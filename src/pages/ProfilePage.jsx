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
  if (!storedUser?.email) {
    navigate("/HomePage");
    return;
  }

  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users?email=${storedUser.email}`);
      const data = await response.json();
      if (data.length > 0) {
        const user = data[0];
        setUserData(user);
        setPhoto(user.photo || null);
        if (!newName) setNewName(user.name);
      }
    } catch (error) {
      console.error("Gagal mengambil data user:", error);
    }
  };

  fetchUser();
}, [storedUser, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;

      const updatedUser = { ...userData, photo: base64Image };
      await fetch(`http://localhost:5000/users/${userData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
      setPhoto(base64Image);
      setUserData(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = async () => {
    const updatedUser = { ...userData, photo: null };
    await fetch(`http://localhost:5000/users/${userData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
    setPhoto(null);
    setUserData(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const saveName = async () => {
    const updatedUser = { ...userData, name: newName };
    await fetch(`http://localhost:5000/users/${userData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
    setUserData(updatedUser);
    setIsEditingName(false);
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
        backgroundRepeat: "no-repeat",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="bg-black bg-opacity-40 rounded-xl px-16 py-16 flex items-center gap-14 max-w-4xl w-full mx-4">
        {/* Foto Profil */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden">
            {photo ? (
              <img src={photo} className="w-full h-full object-cover" alt="Profile" />
            ) : (
              <img src="/profileicon.png" className="w-full h-full object-cover" />
            )}
          </div>
          <label className="text-white font-semibold mt-3 text-sm cursor-pointer hover:underline">
            Ganti Foto
            <input type="file" onChange={handlePhotoChange} className="hidden" accept="image/*" />
          </label>
          {photo && (
            <button
              onClick={handleRemovePhoto}
              className="text-red-300 hover:underline mt-1 text-sm"
            >
              Hapus Foto
            </button>
          )}
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
                    setNewName(userData.name);
                  }}
                  className="text-red-400 font-semibold hover:underline"
                >
                  Batal
                </button>
              </>
            ) : (
              <>
                <h1 className="text-white font-bold text-3xl truncate">{userData.name}</h1>
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
          <p className="text-white font-semibold text-xl truncate">{userData.email}</p>
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleLogout}
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-md w-max"
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
