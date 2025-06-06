import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [allTech, setAllTech] = useState([]);

  const navigate = useNavigate();

  // Ganti URL lama dengan API dari tech.jsx
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/technologies`);
        const techData = await response.json();
        setAllTech(techData.data || []);
      } catch (err) {
        console.error('Gagal fetch data:', err);
      }
    };
    fetchData();
  }, []);

  // Realtime search
  useEffect(() => {
    const searchTerm = searchInput.toLowerCase();

    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const matchedTech = allTech.filter((item) =>
      item.tech_name.toLowerCase().includes(searchTerm)
    );

    setResults(matchedTech);
  }, [searchInput, allTech]);

  const handleItemClick = (id) => {
    setSearchInput('');
    setResults([]);
    navigate(`/technology/detail/${id}`);
  };

  return (
    <div className="w-full max-w-xl mx-auto mb relative z-50">
      {/* Input */}
      <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
        <input
          type="text"
          placeholder="Search technologies..."
          className="w-full h-12 px-4  text-gray-700 outline-none"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="px-4 text-gray-400">🔍</div>
      </div>

      {/* Dropdown hasil pencarian */}
      {searchInput.trim() && (
        <div className="absolute top-[3.2rem] left-0 w-full bg-gray-900 text-white text-left shadow-lg rounded-md max-h-80 overflow-auto">
          {results.length > 0 ? (
            <ul className="divide-y divide-gray-700">
              {results.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-800 transition cursor-pointer"
                  onClick={() => handleItemClick(item.id_tech)}
                >
                  {item.tech_name}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center italic py-4 text-gray-400">
              Tidak ada produk ditemukan.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
