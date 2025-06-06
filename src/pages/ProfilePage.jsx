import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [newName, setNewName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!storedUser?.token) {
      navigate("/LoginPage");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch("https://backend-techsentinel.vercel.app/user/profile", {
          headers: {
            Authorization: `Bearer ${storedUser.token}`,
          },
        });

        if (!res.ok) throw new Error("Gagal mengambil data user");

        const result = await res.json();
        if (result.success && result.data) {
          setUserData(result.data);
          setPhoto(result.data.profile_picture || null);
          setNewName((prev) => prev || result.data.user_name);
        } else {
          throw new Error("Data profil tidak valid");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("Gagal mengambil data user, coba login ulang.");
        navigate("/LoginPage");
      }
    };

    fetchUser();
  }, [storedUser, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const saveName = async () => {
    if (!newName) return alert("Nama tidak boleh kosong!");

    try {
      const res = await fetch("https://backend-techsentinel.vercel.app/user/profile", {
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
      alert("Nama berhasil diperbarui");
    } catch (error) {
      console.error("Update error:", error);
      alert("Terjadi kesalahan saat memperbarui nama.");
    }
  };

  const handlePhotoUpload = async (file) => {
    if (!file) return alert("Pilih file terlebih dahulu!");

    const formData = new FormData();
    formData.append("profile_picture", file);

    try {
      const res = await fetch("https://backend-techsentinel.vercel.app/user/profile", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${storedUser.token}`,
        },
        body: formData,
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setPhoto(result.data.profile_picture);
      setUserData((prev) => ({ ...prev, profile_picture: result.data.profile_picture }));
      localStorage.setItem("user", JSON.stringify({ ...storedUser, profile_picture: result.data.profile_picture }));
      alert("Foto profil berhasil diperbarui");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Terjadi kesalahan saat mengunggah foto.");
    }
  };

const handleDeletePhoto = async () => {
  try {
    console.log("🧪 DELETE FOTO DIPANGGIL");
    console.log("Token:", storedUser.token);

    const res = await fetch(`https://backend-techsentinel.vercel.app/user/profile`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${storedUser.token}`,
      },
    });

    const result = await res.json();
    console.log("📦 Response dari server:", result);

    if (!res.ok || !result.success) throw new Error(result.message);

    setPhoto(null);
    setUserData((prev) => ({ ...prev, profile_picture: null }));
    localStorage.setItem("user", JSON.stringify({ ...storedUser, profile_picture: null }));
    alert("Foto profil berhasil dihapus");
  } catch (error) {
    console.error("❌ Delete error:", error);
    alert(`Gagal menghapus foto: ${error.message}`);
  }
};


  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/background-3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="bg-black bg-opacity-40 rounded-xl px-10 py-14 flex items-center gap-14 max-w-4xl w-full mx-4">
        {/* Foto Profil */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden">
            <img
              src={photo || "/profileicon.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              if (e.target.files.length > 0) {
                handlePhotoUpload(e.target.files[0]);
              }
            }}
          />
          <label htmlFor="photo-upload" className="mt-2 text-blue-400 hover:underline cursor-pointer">
            Ganti Foto
          </label>
        </div>

        {/* Info User */}
        <div className="flex flex-col justify-center gap-3 flex-grow min-w-0">
          <div className="flex items-center gap-2">
            {isEditingName ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="text-white bg-transparent border-b border-white outline-none text-3xl font-bold truncate max-w-full"
                  autoFocus
                />
                <button onClick={saveName} className="text-green-400 font-semibold hover:underline">
                  Simpan
                </button>
                <button
                  onClick={() => {
                    setIsEditingName(false);
                    setNewName(userData.user_name);
                  }}
                  className="text-red-400 font-semibold hover:underline"
                >
                  Batal
                </button>
              </>
            ) : (
              <>
                <h1 className="text-white font-bold text-3xl truncate">{userData.user_name}</h1>
                <button
                  onClick={() => setIsEditingName(true)}
                  aria-label="Edit name"
                  className="text-white hover:text-gray-300 focus:outline-none"
                >
                  ✎
                </button>
              </>
            )}
          </div>
          <p className="text-white font-semibold text-xl truncate">{userData.user_email}</p>
          <div className="mt-12">
            <button
              onClick={handleLogout}
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
