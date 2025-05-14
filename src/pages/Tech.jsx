import { useState } from 'react';
import { FunnelPlus, FunnelX, Star } from 'lucide-react';
import allTechnologies from '../data/technologies';
import { Link } from 'react-router-dom';


export default function TechPage() {
  const [category, setCategory] = useState('');
  const [filters, setFilters] = useState({
    brand: '',
    ram: '',
    storage: '',
    priceMin: '',
    priceMax: '',
    rating: '',
  });
  const [showFilter, setShowFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Uncomment jika ingin ambil data dari API
  // }, []);

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const resetFilter = () => {
    setCategory('');
    setFilters({
      brand: '',
      ram: '',
      storage: '',
      priceMin: '',
      priceMax: '',
      rating: '',
    });
    setSearchTerm('');
  };

  const filteredTechs = allTechnologies.filter((tech) => {
    if (category && tech.category !== category) return false;
    if (filters.brand && tech.brand !== filters.brand) return false;
    if (filters.ram && tech.specs.ram !== filters.ram) return false;

    const storageGB = parseInt(tech.specs.storage);
    if (filters.storage && !isNaN(storageGB)) {
      if (filters.storage === '<64' && storageGB >= 64) return false;
      if (filters.storage === '64-128' && (storageGB < 64 || storageGB > 128)) return false;
      if (filters.storage === '128-256' && (storageGB < 128 || storageGB > 256)) return false;
      if (filters.storage === '>256' && storageGB <= 256) return false;
    }

    const price = tech.specs.price;
    if (filters.priceMin && price < parseInt(filters.priceMin)) return false;
    if (filters.priceMax && price > parseInt(filters.priceMax)) return false;
    if (filters.rating && Math.floor(tech.rating) < parseInt(filters.rating)) return false;

    if (searchTerm && !tech.tech_name.toLowerCase().includes(searchTerm.toLowerCase())) return false;

    return true;
  });

  const formatNumber = (value) => {
    return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const parseNumber = (value) => value.replace(/\./g, '');

  const handlePriceInput = (field, value) => {
    const formatted = formatNumber(value);
    const numericValue = parseNumber(formatted);
    setFilters((prev) => ({
      ...prev,
      [field]: numericValue,
    }));
  };

  return (
    <div className="flex w-full min-h-screen text-white m-0 p-0">
      {/* Sidebar */}
      {showFilter && (
        <div className="w-72 bg-white rounded-2xl text-black shadow-lg p-4">
          {/* Kategori */}
          <div className="mb-4 mt-5">
            <label className="block font-medium mb-1">Kategori:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-2 w-full rounded"
            >
              <option value="">Tampilkan Semua</option>
              <option value="handphone">Handphone</option>
              <option value="laptop">Laptop</option>
              <option value="tablet">Tablet</option>
            </select>
          </div>

          {/* Brand */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Merk:</label>
            <select
              value={filters.brand}
              onChange={(e) => handleFilterChange('brand', e.target.value)}
              className="border p-2 w-full rounded"
            >
              <option value="">Tampilkan Semua</option>
              <option value="Samsung">Samsung</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Vivo">Vivo</option>
              <option value="Infinix">Infinix</option>
              <option value="Apple">Apple</option>
              <option value="Google Pixel">Google Pixel</option>
              <option value="ASUS">ASUS</option>
              <option value="Dell">Dell</option>
              <option value="HP">HP</option>
              <option value="Lenovo">Lenovo</option>
              <option value="Sony">Sony</option>
            </select>
          </div>

          {/* RAM & Storage */}
          {category !== 'headphone' && (
            <>
              <div className="mb-4">
                <label className="block font-medium mb-1">RAM:</label>
                <select
                  value={filters.ram}
                  onChange={(e) => handleFilterChange('ram', e.target.value)}
                  className="border p-2 w-full rounded"
                >
                  <option value="">Tampilkan Semua</option>
                  <option value="3 GB">3 GB</option>
                  <option value="4 GB">4 GB</option>
                  <option value="6 GB">6 GB</option>
                  <option value="8 GB">8 GB</option>
                  <option value="12 GB">12 GB</option>
                  <option value="16 GB">16 GB</option>
                  <option value="24 GB">24 GB</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1">Memori Internal:</label>
                <select
                  value={filters.storage}
                  onChange={(e) => handleFilterChange('storage', e.target.value)}
                  className="border p-2 w-full rounded"
                >
                  <option value="">Tampilkan Semua</option>
                  <option value="<64">{"< 64 GB"}</option>
                  <option value="64-128">64 - 128 GB</option>
                  <option value="129-256">128 - 256 GB</option>
                  <option value=">256">{"> 256 GB"}</option>
                </select>
              </div>
            </>
          )}

          {/* Harga */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Rentang Harga (IDR):</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Min"
                value={formatNumber(filters.priceMin)}
                onChange={(e) => handlePriceInput('priceMin', e.target.value)}
                className="border p-2 w-1/2 rounded"
              />
              <input
                type="text"
                placeholder="Max"
                value={formatNumber(filters.priceMax)}
                onChange={(e) => handlePriceInput('priceMax', e.target.value)}
                className="border p-2 w-1/2 rounded"
              />
            </div>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <label className="block font-medium mb-1">Minimal Rating:</label>
            <select
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
              className="border p-2 w-full rounded"
            >
              <option value="">Tampilkan Semua</option>
              <option value="1">⭐ 1</option>
              <option value="2">⭐ 2</option>
              <option value="3">⭐ 3</option>
              <option value="4">⭐ 4</option>
              <option value="5">⭐ 5</option>
            </select>
          </div>
        </div>
      )}


      {/* Konten utama */}
      <div className="flex-1 p-6">
        {/* Tombol Filter dan Search */}
        <div className="flex flex-wrap items-center gap-2 mt-5 mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition
                ${category || Object.values(filters).some(val => val)
                  ? 'bg-transparent border-2 border-green-300 text-green-300'
                  : 'border-2 text-white'}
                hover:bg-green-500 hover:text-white`}
              title={showFilter ? 'Tutup Filter' : 'Tampilkan Filter'}
            >
              <FunnelPlus size={20} />
              <span className="text-sm">
                {showFilter ? 'Tutup Menu Filter' : 'Tampilkan Menu Filter'}
              </span>
            </button>

            {(category || Object.values(filters).some(val => val)) && (
              <button
                onClick={resetFilter}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white text-white hover:bg-red-600 transition"
                title="Reset Filter"
              >
                <FunnelX size={20} />
                <span className="text-sm">Reset Filter</span>
              </button>
            )}
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari berdasarkan nama..."
            className="px-4 py-2 w-full rounded-xl md:w-72 text-black"
          />
        </div>

        {/* Grid Teknologi */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${showFilter ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-6`}>
          {filteredTechs.map((tech) => (
            <div
              key={tech.id_tech}
              className="border border-white rounded-lg p-4 text-white shadow-md transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('Background-4.2.png')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <img
                src={tech.image}
                alt={tech.tech_name}
                className="w-72 h-auto object-contain mx-auto -mb-2 -mt-3 rounded"
                style={{
                  filter: 'drop-shadow(10px 10px 10px rgba(0,0,0,0.5))',
                }}
              />
              <h2 className="text-lg ml-3 font-bold font-poppins mx-auto">{tech.tech_name}</h2>
              <p className="ml-3">Brand : {tech.brand}</p>
              <p className="ml-3">IDR {tech.specs.price.toLocaleString()}</p>
              <div className="flex items-center ml-3">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span>{tech.rating}</span>
              </div>


              <Link
                to={`/technology/detail/${tech.id_tech}`}
                className="mt-4 mb-3 ml-3 inline-block bg-transparent border border-white text-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
              >
                Lihat Detail
              </Link>
            </div>

          ))}

          {filteredTechs.length === 0 && (
            <p className="col-span-full text-center text-gray-300 mt-8">
              Tidak ada data yang cocok. Coba ubah filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
