import { useState } from 'react';
import { FunnelPlus, FunnelX } from 'lucide-react';


const allTechnologies = [
    // Handphones
    {
      id_tech: '1',
      tech_name: 'Samsung Galaxy S23',
      category: 'handphone',
      brand: 'Samsung',
      specs: { ram: '8 GB', storage: '128 GB', price: 12000000 },
      rating: 4.5,
    },
    {
      id_tech: '2',
      tech_name: 'Xiaomi Redmi Note 12',
      category: 'handphone',
      brand: 'Xiaomi',
      specs: { ram: '6 GB', storage: '128 GB', price: 3500000 },
      rating: 4.1,
    },
    {
      id_tech: '3',
      tech_name: 'iPhone 14 Pro',
      category: 'handphone',
      brand: 'Apple',
      specs: { ram: '6 GB', storage: '256 GB', price: 18000000 },
      rating: 4.8,
    },
    {
      id_tech: '4',
      tech_name: 'Infinix Zero 5G',
      category: 'handphone',
      brand: 'Infinix',
      specs: { ram: '8 GB', storage: '128 GB', price: 2900000 },
      rating: 4.0,
    },
    {
      id_tech: '5',
      tech_name: 'Vivo V25',
      category: 'handphone',
      brand: 'Vivo',
      specs: { ram: '12 GB', storage: '256 GB', price: 5100000 },
      rating: 4.3,
    },
  
    // Laptops
    {
      id_tech: '6',
      tech_name: 'MacBook Air M2',
      category: 'laptop',
      brand: 'Apple',
      specs: { ram: '8 GB', storage: '256 GB', price: 16999000 },
      rating: 4.7,
    },
    {
      id_tech: '7',
      tech_name: 'ASUS ROG Zephyrus G14',
      category: 'laptop',
      brand: 'ASUS',
      specs: { ram: '16 GB', storage: '512 GB', price: 19999000 },
      rating: 4.6,
    },
    {
      id_tech: '8',
      tech_name: 'Dell XPS 13',
      category: 'laptop',
      brand: 'Dell',
      specs: { ram: '16 GB', storage: '512 GB', price: 21000000 },
      rating: 4.5,
    },
    {
      id_tech: '9',
      tech_name: 'HP Pavilion 14',
      category: 'laptop',
      brand: 'HP',
      specs: { ram: '8 GB', storage: '256 GB', price: 8500000 },
      rating: 4.2,
    },
    {
      id_tech: '10',
      tech_name: 'Lenovo IdeaPad 3',
      category: 'laptop',
      brand: 'Lenovo',
      specs: { ram: '8 GB', storage: '512 GB', price: 7900000 },
      rating: 4.1,
    },
  
    // Headphones
    {
      id_tech: '11',
      tech_name: 'Sony WH-1000XM4',
      category: 'headphone',
      brand: 'Sony',
      specs: { ram: '0 GB', storage: '0 GB', price: 4000000 },
      rating: 4.7,
    },
    {
      id_tech: '12',
      tech_name: 'Apple AirPods Max',
      category: 'headphone',
      brand: 'Apple',
      specs: { ram: '0 GB', storage: '0 GB', price: 8500000 },
      rating: 4.6,
    },
    {
      id_tech: '13',
      tech_name: 'JBL Tune 760NC',
      category: 'headphone',
      brand: 'JBL',
      specs: { ram: '0 GB', storage: '0 GB', price: 1500000 },
      rating: 4.2,
    },
    {
      id_tech: '14',
      tech_name: 'Anker Soundcore Life Q30',
      category: 'headphone',
      brand: 'Anker',
      specs: { ram: '0 GB', storage: '0 GB', price: 1200000 },
      rating: 4.4,
    },
    {
      id_tech: '15',
      tech_name: 'Beats Studio3',
      category: 'headphone',
      brand: 'Beats',
      specs: { ram: '0 GB', storage: '0 GB', price: 5000000 },
      rating: 4.3,
    },
  ];

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
    if (filters.storage) {
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

    //   fungsi untuk memunculkan titik setiap 3 digit yang diinputkan user pas ngisi rentang harga
    const formatNumber = (value) => {
        return value.replace(/\D/g, '') // hapus non-digit
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // tambah titik tiap 3 digit
    };
    
    const parseNumber = (value) => value.replace(/\./g, ''); // hapus titik
    
    const handlePriceInput = (field, value) => {
        const formatted = formatNumber(value);
        const numericValue = parseNumber(formatted);
        setFilters((prev) => ({
        ...prev,
        [field]: numericValue
        }));
    };


  return (
    <div className="flex w-full min-h-screen  text-white m-0 p-0">

      {/* Sidebar */}
      {showFilter && (
        <div className="w-72 bg-white text-black shadow-lg p-4">
          {/* Filter: Category */}
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
              <option value="headphone">Headphone</option>
            </select>
          </div>

          <>
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
                <option value="JBL">JBL</option>
                <option value="Anker">Anker</option>
                <option value="Beats">Beats</option>
              </select>
            </div>

            {/* RAM & Storage untuk non-headphone */}
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
                    <option value="128-256">128 - 256 GB</option>
                    <option value=">256">{"> 256 GB"}</option>
                  </select>
                </div>
              </>
            )}

            {/* Harga */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Rentang Harga (IDR):</label>
              <div className="flex gap-2">
                {/* minimal */}
                <input
                    type="text"
                    placeholder="Min"
                    value={formatNumber(filters.priceMin)}
                    onChange={(e) => handlePriceInput('priceMin', e.target.value)}
                    className="border p-2 w-1/2 rounded"
                />
                {/* maksimal */}
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
          </>
        </div>
      )}

      {/* Konten Utama */}
      <div className="flex-1 p-6">
        {/* Tombol & Search */}
        <div className="flex flex-wrap items-center gap-2 mt-5 mb-8">
          <div className="flex gap-2">
            <button
            onClick={() => setShowFilter(!showFilter)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${
            category || Object.values(filters).some(val => val)
                ? 'bg-blue-600 text-white'
                : 'bg-white text-black'
            } hover:bg-blue-700 transition`}
            title={showFilter ? 'Tutup  Filter' : 'Tampilkan Filter'}
            >
                <FunnelPlus size={20} />
                <span className="text-sm">{showFilter ? 'Tutup Menu Filter' : 'Tampilkan Menu Filter'}</span>
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
            className="px-4 py-2 w-full rounded-xl md:w-72 text-black rounded"
          />
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${showFilter ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
          {filteredTechs.map((tech) => (
            <div key={tech.id_tech} className="border border-white rounded-lg p-4 bg-white/20 text-white shadow">
              <h2 className="text-lg font-bold mb-2">{tech.tech_name}</h2>
              <p>{tech.brand}</p>
              <p>IDR {tech.specs.price.toLocaleString()}</p>
              <p>⭐ {tech.rating}</p>
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
