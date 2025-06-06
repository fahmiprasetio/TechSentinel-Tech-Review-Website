import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, LogOut } from "lucide-react";

const ProfilePage = () => {
  const [storedUser, setStoredUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [newName, setNewName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem("user"));
    if (!userFromStorage?.token) {
      navigate("/LoginPage");
      return;
    }
    setStoredUser(userFromStorage);

    const fetchUser = async () => {
      try {
        const res = await fetch(`${API_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${userFromStorage.token}`,
          },
        });

        const result = await res.json();
        if (result.success && result.data) {
          setUserData(result.data);
          setPhoto(result.data.profile_picture || null);
          setNewName(result.data.user_name);
          fetchFavorites(userFromStorage.token);
        } else {
          throw new Error("Data profil tidak valid");
        }
      } catch (error) {
        alert("Gagal mengambil data user, coba login ulang.");
        navigate("/LoginPage");
      }
    };

    fetchUser();
  }, [navigate]);

  const fetchFavorites = async (token) => {
    try {
      const res = await fetch(`${API_URL}/favorites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      if (result.success && Array.isArray(result.data.techFavorites)) {
        setFavorites(result.data.techFavorites);
      }
    } catch (_) {}
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const saveName = async () => {
    if (!newName) return alert("Nama tidak boleh kosong!");
    try {
      const res = await fetch(`${API_URL}/user/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedUser.token}`,
        },
        body: JSON.stringify({ user_name: newName }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);
      setUserData((prev) => ({ ...prev, user_name: newName }));
      setIsEditingName(false);
      localStorage.setItem("user", JSON.stringify({ ...storedUser, user_name: newName }));
    } catch (error) {
      alert("Terjadi kesalahan saat memperbarui nama.");
    }
  };

  const handlePhotoUpload = async (file) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("profile_picture", file);

    try {
      const res = await fetch(`${API_URL}/user/profile`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${storedUser.token}`,
        },
        body: formData,
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);
      setPhoto(result.data.profile_picture);
    } catch (_) {
      alert("Upload gagal");
    }
  };

  const handleDeletePhoto = async () => {
    try {
      const res = await fetch(`${API_URL}/user/profile`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${storedUser.token}`,
        },
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);
      setPhoto(null);
    } catch (_) {
      alert("Gagal menghapus foto");
    }
  };

  if (!storedUser || !userData) {
    return <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>;
  }

  return (
    <div className="text-white px-6 py-10">
      {/* CARD PROFIL */}
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-10 flex flex-col md:flex-row">
        {/* FOTO */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform hover:scale-105">
            <img src={photo || "/profileicon.png"} alt="Profile" className="object-cover w-full h-full" />
          </div>
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            className="hidden"
            onChange={(e) => handlePhotoUpload(e.target.files[0])}
          />
          <label htmlFor="photo-upload" className="mt-4 text-sm text-blue-400 cursor-pointer hover:underline">
            Ganti Foto
          </label>
        </div>

        {/* INFO PENGGUNA */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="bg-gray-700/40 rounded-xl p-5 border border-white/20 shadow-md">
            {isEditingName ? (
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-md border border-white/30 text-lg w-full sm:w-auto"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={saveName}
                    className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white text-sm"
                  >
                    Simpan
                  </button>
                  <button
                    onClick={() => setIsEditingName(false)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white text-sm"
                  >
                    Batal
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">{userData.user_name}</h1>
                  <p className="text-sm sm:text-base text-gray-300 mt-1">{userData.user_email}</p>
                </div>
                <button onClick={() => setIsEditingName(true)}>
                  <Pencil size={20} className="text-white hover:text-gray-400" />
                </button>
              </div>
            )}
          </div>
          <div className="flex justify-end mb-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded shadow font-semibold"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* FAVORIT TEKNOLOGI */}
      <div className="max-w-6xl mx-auto mt-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 shadow-inner">
        <h2 className="text-white font-bold text-2xl mb-4">Favorit Teknologi</h2>
        {favorites.length > 0 ? (
          <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            {favorites.map((fav) => (
              <div
                key={fav.technology.id_tech}
                onClick={() => navigate(`/technology/detail/${fav.technology.id_tech}`)}
                className="min-w-[250px] max-w-[250px] bg-black bg-opacity-30 border border-white/20 shadow-md backdrop-blur-md rounded-2xl p-4 text-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="w-full h-32 bg-white/10 rounded-xl overflow-hidden flex items-center justify-center mb-3">
                  <img
                    src={fav.technology.tech_image}
                    alt={fav.technology.tech_name}
                    className="h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg truncate">{fav.technology.tech_name}</h3>
                <p className="text-sm text-gray-300">{fav.technology.brand}</p>
                <p className="text-sm mt-2 text-gray-200 line-clamp-3">{fav.technology.review}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">Belum ada favorit.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
