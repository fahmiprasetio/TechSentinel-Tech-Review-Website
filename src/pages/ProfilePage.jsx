import React from "react";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>Anda belum login. Silakan login terlebih dahulu.</p>;
  }

  return (
    <div className="p-4">
      <h1>Welcome, {user.email}</h1>
      <p>Ini adalah halaman profil Anda.</p>
    </div>
  );
};

export default ProfilePage;
