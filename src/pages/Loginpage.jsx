import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000/users", {
        params: {
          email,
          password,
        },
      });

      if (response.data.length > 0) {
        // Simpan data login dan user di localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(response.data[0])); // Simpan data user (misalnya, email)

        navigate("/"); // Arahkan ke Homepage setelah login berhasil
      } else {
        alert("Email atau password salah!");
      }
    } catch (error) {
      console.error("Login error: ", error);
      alert("Terjadi kesalahan server!");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4" style={{ backgroundImage: "url('/bg-login.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Login</h2>
        <form className="space-y-5" onSubmit={handleLogin}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

        <p className="text-center text-gray-600 mt-6">
          Belum punya akun?{" "}
          <a href="/RegisterPage" className="text-blue-600 hover:underline font-semibold">
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
