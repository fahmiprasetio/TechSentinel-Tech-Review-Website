import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
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
          setUserData(data[0]);
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

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-600">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 text-center">
        <div className="relative mb-4">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png" // Gambar profile pengguna
            alt="Avatar"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white -mt-16"
          />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800">{userData.name}</h1>
        <p className="text-gray-500 mb-2">{userData.email}</p>
        

        {/* Tombol */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
  );
};

export default ProfilePage;
