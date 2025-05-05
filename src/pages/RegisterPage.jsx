import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Semua field wajib diisi!");
      return;
    }

    // Simpan ke localStorage (simulasi pendaftaran)
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registrasi berhasil! Silakan login.");
    navigate("/LoginPage");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/bg-login.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Form Card */}
      <div className="relative z-10 bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Register</h2>
        <form className="space-y-5" onSubmit={handleRegister}>
          {/* Nama */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nama
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                id="name"
                className="w-full outline-none bg-transparent"
                placeholder="Nama Lengkap"
                value={form.name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                id="email"
                className="w-full outline-none bg-transparent"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                id="password"
                className="w-full outline-none bg-transparent"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300 shadow-sm"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Sudah punya akun?{" "}
          <Link to="/LoginPage" className="text-blue-600 hover:underline font-semibold">
  Login Di sini
</Link>

        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
