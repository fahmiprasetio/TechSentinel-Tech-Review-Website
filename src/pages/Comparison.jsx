import { useEffect, useState } from "react";
import Select from "react-select";

export default function Comparison() {
  const [products, setProducts] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/technologies");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      }
    };
    fetchData();
  }, []);

  const formatKey = (key) =>
    key
      .replace(/_/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  const options = products.map((p) => ({
    value: p.id_tech,
    label: p.tech_name,
    data: p,
  }));

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      zIndex: 50,
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "160px",
      overflowY: "scroll",
      paddingTop: 0,
      paddingBottom: 0,
      scrollbarWidth: "auto",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "#1f2937",
      borderColor: "#4b5563",
      color: "white",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#374151" : "#1f2937",
      color: "white",
    }),
  };

  return (
    <div className="p-6 text-white min-h-screen bg-black/20 backdrop-blur-sm">
      <div className="text-center text-white mt-5 mb-5">
        <h1 className="text-4xl font-bold mb-2">Compare Your Favorite Tech</h1>
        <p className="text-md text-gray-300">
          Find out which device fits your needs best — compare specifications,
          brands, and performance side-by-side.
        </p>
      </div>

      <div className="border-b-2 border-white w-full mb-10"></div>

      {/* Dropdown */}
      <div className="flex justify-center gap-24 mt-5 mb-10">
        <div className="w-72">
          <label className="block mb-2 text-center">Pilih Produk Kiri:</label>
          <Select
            options={options}
            styles={customStyles}
            onChange={(option) => setSelectedLeft(option?.data || null)}
            placeholder="-- Pilih Produk --"
            isClearable
            classNamePrefix="react-select"
          />
        </div>
        <div className="w-72">
          <label className="block mb-2 text-center">Pilih Produk Kanan:</label>
          <Select
            options={options}
            styles={customStyles}
            onChange={(option) => setSelectedRight(option?.data || null)}
            placeholder="-- Pilih Produk --"
            isClearable
            classNamePrefix="react-select"
          />
        </div>
      </div>

      {/* Card Gambar Produk */}
      {(selectedLeft || selectedRight) && (
        <div className="flex justify-center gap-40 mb-10">
          {selectedLeft && (
            <div
              key={`left-${selectedLeft.id_tech}`}
              className="group border border-white/20 rounded-lg p-4 text-white shadow-md bg-white/10 transition duration-300 ease-in-out hover:shadow-2xl backdrop-blur-md"
            >
              <img
                src={selectedLeft.image}
                alt={selectedLeft.tech_name}
                className="w-72 h-auto object-contain mx-auto -mt-3 rounded transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
                style={{
                  filter: "drop-shadow(10px 10px 7px rgba(0,0,0,0.6))",
                }}
              />
              <p className="text-center mt-3">{selectedLeft.tech_name}</p>
            </div>
          )}
          {selectedRight && (
            <div
              key={`right-${selectedRight.id_tech}`}
              className="group border border-white/20 rounded-lg p-4 text-white shadow-md bg-white/10 transition duration-300 ease-in-out hover:shadow-2xl backdrop-blur-md"
            >
              <img
                src={selectedRight.image}
                alt={selectedRight.tech_name}
                className="w-72 h-auto object-contain mx-auto -mt-3 rounded transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
                style={{
                  filter: "drop-shadow(10px 10px 7px rgba(0,0,0,0.6))",
                }}
              />
              <p className="text-center mt-3">{selectedRight.tech_name}</p>
            </div>
          )}
        </div>
      )}

      {/* Tabel Perbandingan */}
      {(selectedLeft || selectedRight) &&
        (() => {
          const specsLeft = selectedLeft?.specs || {};
          const specsRight = selectedRight?.specs || {};

          const allKeysSet = new Set([
            ...Object.keys(specsLeft),
            ...Object.keys(specsRight),
          ]);
          const allKeys = Array.from(allKeysSet);

          return (
            <div className="overflow-x-auto mt-10 px-4">
              <table className="w-4/5 border text-left mx-auto text-white mb-10">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="w-1/3 p-3 border border-white/70">
                      Spesifikasi
                    </th>
                    {selectedLeft && (
                      <th className="w-1/3 p-3 border border-white/70">
                        {selectedLeft.tech_name}
                      </th>
                    )}
                    {selectedRight && (
                      <th className="w-1/3 p-3 border border-white/70">
                        {selectedRight.tech_name}
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-black/30">
                    <td className="p-2 border border-white/70 font-bold">
                      Brand
                    </td>
                    {selectedLeft && (
                      <td className="p-2 border border-white/70">
                        {selectedLeft.brand}
                      </td>
                    )}
                    {selectedRight && (
                      <td className="p-2 border border-white/70">
                        {selectedRight.brand}
                      </td>
                    )}
                  </tr>
                  <tr className="bg-black/30">
                    <td className="p-2 border border-white/70 font-bold">
                      Kategori
                    </td>
                    {selectedLeft && (
                      <td className="p-2 border border-white/70">
                        {selectedLeft.category}
                      </td>
                    )}
                    {selectedRight && (
                      <td className="p-2 border border-white/70">
                        {selectedRight.category}
                      </td>
                    )}
                  </tr>
                  {allKeys.map((key) => (
                    <tr key={key} className="bg-black/30">
                      <td className="p-2 border border-white/70 font-bold">
                        {formatKey(key)}
                      </td>
                      {selectedLeft && (
                        <td className="p-2 border border-white/70">
                          {key.toLowerCase() === "price"
                            ? `Rp ${Number(
                                specsLeft[key] || 0
                              ).toLocaleString()}`
                            : specsLeft[key] || "-"}
                        </td>
                      )}
                      {selectedRight && (
                        <td className="p-2 border border-white/70">
                          {key.toLowerCase() === "price"
                            ? `Rp ${Number(
                                specsRight[key] || 0
                              ).toLocaleString()}`
                            : specsRight[key] || "-"}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })()}
    </div>
  );
}
