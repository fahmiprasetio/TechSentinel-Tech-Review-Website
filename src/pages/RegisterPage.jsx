import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const { user_name, user_email, user_password } = form;

    if (!user_name || !user_email || !user_password) {
      alert("Semua field wajib diisi!");
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${API_URL}/auth/register`, {
        user_name,
        user_email,
        user_password,
        profile_picture:
          "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
      });

      console.log("Response register:", response.data);
      alert("Registrasi berhasil! Silakan login.");
      navigate("/LoginPage");
    } catch (error) {
      console.error("Register error:", error.response?.data || error);
      alert("Gagal registrasi: " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4 dark:bg-black"
      style={{ backgroundImage: "url('/bg-login.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-90 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">
          Register
        </h2>
        <form className="space-y-5" onSubmit={handleRegister}>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
            >
              Nama Lengkap
            </label>
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="text-gray-400 dark:text-gray-300 mr-2" />
              <input
                type="text"
                id="name"
                className="w-full outline-none bg-transparent text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                placeholder="John Doe"
                value={form.user_name}
                onChange={(e) =>
                  setForm({ ...form, user_name: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
            >
              Email
            </label>
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="text-gray-400 dark:text-gray-300 mr-2" />
              <input
                type="email"
                id="email"
                className="w-full outline-none bg-transparent text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                placeholder="you@example.com"
                value={form.user_email}
                onChange={(e) =>
                  setForm({ ...form, user_email: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="text-gray-400 dark:text-gray-300 mr-2" />
              <input
                type="password"
                id="password"
                className="w-full outline-none bg-transparent text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                placeholder="••••••••"
                value={form.user_password}
                onChange={(e) =>
                  setForm({ ...form, user_password: e.target.value })
                }
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300 shadow-sm"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          Sudah punya akun?{" "}
          <Link
            to="/LoginPage"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
