import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://backend-techsentinel.vercel.app/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_email: email,
        user_password: password,
      }),
    });

    const resData = await response.json(); // ✅ hanya sekali di sini
    console.log("Response login:", resData);

    if (!response.ok || !resData.success) {
      alert("Login gagal: " + (resData.message || "Server error"));
      return;
    }

    const { id_user, user_name, user_email, level, profile_picture } = resData.data;
    const token = resData.token;

    if (!token) {
      alert("Token tidak ditemukan dalam response.");
      return;
    }

    const userWithToken = {
      id_user,
      user_name,
      user_email,
      level,
      profile_picture,
      token,
    };

    console.log("Login berhasil, menyimpan ke localStorage:", userWithToken);
    localStorage.setItem("user", JSON.stringify(userWithToken));

    // Cek simpanan
    const cek = localStorage.getItem("user");
    if (!cek) {
      alert("Gagal menyimpan ke localStorage");
      return;
    }
    setTimeout(() => {
  navigate("/");
}, 100);

  } catch (error) {
    console.error("Login error:", error);
    alert("Terjadi error: " + error.message);
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
          Login
        </h2>
        <form className="space-y-5" onSubmit={handleLogin}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300 shadow-sm"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          Belum punya akun?{" "}
          <Link
            to="/RegisterPage"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
