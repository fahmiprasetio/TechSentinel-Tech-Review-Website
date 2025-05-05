import React from "react";
import { FaPen, FaEnvelope, FaUser } from "react-icons/fa";

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    photoUrl: "https://via.placeholder.com/150",
    articles: [
      { id: 1, title: "Artikel Pertama", date: "2025-05-01" },
      { id: 2, title: "Artikel Kedua", date: "2025-04-15" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="flex items-center p-6 bg-blue-600 text-white">
          <div className="flex-shrink-0">
            <img
              src={user.photoUrl}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white"
            />
          </div>
          <div className="ml-6">
            <h1 className="text-3xl font-semibold">{user.name}</h1>
            <p className="text-lg mt-2 flex items-center">
              <FaEnvelope className="mr-2" />
              {user.email}
            </p>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">Artikel yang Disimpan</h2>
            <ul className="mt-4 space-y-4">
              {user.articles.map((article) => (
                <li
                  key={article.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <FaPen className="text-blue-600" />
                    <p className="font-medium">{article.title}</p>
                  </div>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-6 text-center">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
