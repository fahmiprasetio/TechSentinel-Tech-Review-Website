import { useState, useEffect } from 'react';
import { FunnelPlus, FunnelX, Star, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Listbox } from '@headlessui/react';


// untuk keperluan filter custom side bar : kategori
const kategoriOptions = [
  { name: 'Show All', value: '' },
  { name: 'Handphone', value: 'handphone' },
  { name: 'Laptop', value: 'laptop' },
  { name: 'Tablet', value: 'tablet' },
];

// untuk keperluan filter custom side bar : brand
const brandOptions = [
  { name: 'Show All', value: '' },
  { name: 'Samsung', value: 'Samsung' },
  { name: 'Xiaomi', value: 'Xiaomi' },
  { name: 'Vivo', value: 'Vivo' },
  { name: 'Infinix', value: 'Infinix' },
  { name: 'Apple', value: 'Apple' },
  { name: 'Google Pixel', value: 'Google Pixel' },
  { name: 'ASUS', value: 'ASUS' },
  { name: 'Dell', value: 'Dell' },
  { name: 'HP', value: 'HP' },
  { name: 'Lenovo', value: 'Lenovo' },
  { name: 'Sony', value: 'Sony' }
];

// untuk keperluan filter custom side bar : RAM
const ramOptions = [
  { name: 'Show All', value: '' },
  { name: '3 GB', value: '3 GB' },
  { name: '4 GB', value: '4 GB' },
  { name: '6 GB', value: '6 GB' },
  { name: '8 GB', value: '8 GB' },
  { name: '12 GB', value: '12 GB' },
  { name: '16 GB', value: '16 GB' },
  { name: '24 GB', value: '24 GB' },
  { name: '>24 GB', value: '>24 GB' }
];

// untuk keperluan filter custom side bar : Memori Internal
const storageOptions = [
  { name: 'Show All', value: '' },
  { name: '< 64 GB', value: '<64' },
  { name: '64 - 128 GB', value: '64-128' },
  { name: '128 - 256 GB', value: '128-256' },
  { name: '> 256 GB', value: '>256' }
];

// untuk keperluan filter custom side bar : Rating
const ratingOptions = [
  { name: 'Show All', value: '' },
  { name: '⭐ 1', value: '1' },
  { name: '⭐ 2', value: '2' },
  { name: '⭐ 3', value: '3' },
  { name: '⭐ 4', value: '4' },
  { name: '⭐ 5', value: '5' }
];



export default function TechPage() {
    const [allTechnologies, setAllTechnologies] = useState([]);

    useEffect(() => {
      const fetchTechnologies = async () => {
        try {
          const response = await fetch("http://localhost:5000/technologies");
          if (!response.ok) throw new Error("Gagal mengambil data");
          const data = await response.json();


          // Hitung rating & tambahkan foto profil
          data.forEach(product => {
            if (product.reviews && product.reviews.length > 0) {
              // Hitung rata-rata rating
              const total = product.reviews.reduce((acc, cur) => acc + cur.rating, 0);
              product.rating = +(total / product.reviews.length).toFixed(1);

              // avatar user berdasarkan nama
              product.reviews = product.reviews.map(review => ({
                ...review,
                userPhoto: `https://ui-avatars.com/api/?name=${encodeURIComponent(review.userName)}&background=random&color=fff`
                // alternatif DiceBear:
                // userPhoto: `https://avatars.dicebear.com/api/initials/${encodeURIComponent(review.userName)}.svg`
              }));
            } else {
              // Jika belum ada review, set rating ke 0
              product.rating = 0;
            }
          });


          setAllTechnologies(data);
        } catch (err) {
          console.error("Fetch gagal:", err);
        }
      };
      fetchTechnologies();
    }, []);
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
    if (filters.ram) {
      const ramValue = parseInt(tech.specs.ram); // Ambil angka dari '6 GB', dsb.
      if (filters.ram === '>24 GB') {
        if (isNaN(ramValue) || ramValue <= 24) return false;
      } else {
        if (tech.specs.ram !== filters.ram) return false;
      }
    }


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
      {showFilter && (
        // Sidebar
        <div className="w-72 bg-[#1f2937] text-white shadow-lg p-4 border-r-2 border-r-gray-200">
          {/* Kategori */}
          <div className="mb-4 mt-5">
            <label className="block font-medium mb-1">Category:</label>
            <Listbox value={kategoriOptions.find(k => k.value === category)} onChange={(val) => setCategory(val.value)}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-gray-800 text-white py-2 pl-3 pr-10 text-left shadow-md hover:shadow-[5px_8px_20px_rgba(0,0,0,0.5)] border border-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                >
                  <span>{kategoriOptions.find(k => k.value === category)?.name || 'Show All'}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black/10 focus:outline-none z-50">
                  {kategoriOptions.map((option, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={option}
                      className={({ active, selected }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 transition-all duration-200 ease-in-out group ${
                          active ? 'text-white' : 'text-gray-200'
                        } ${selected ? 'font-semibold' : ''}`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span className="block relative w-fit">
                            {option.name}
                            <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-out" />
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                              <Check className="w-4 h-4" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Brand */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Brand:</label>
            <Listbox value={brandOptions.find(b => b.value === filters.brand)} onChange={(val) => handleFilterChange('brand', val.value)}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-gray-800 text-white py-2 pl-3 pr-10 text-left shadow-md hover:shadow-[5px_8px_20px_rgba(0,0,0,0.5)] border border-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all">
                  <span>{brandOptions.find(b => b.value === filters.brand)?.name || 'Show All'}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black/10 focus:outline-none z-50">
                  {brandOptions.map((option, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={option}
                      className={({ active, selected }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 transition-all duration-200 ease-in-out group ${
                          active ? 'text-white' : 'text-gray-200'
                        } ${selected ? 'font-semibold' : ''}`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span className="block relative w-fit">
                            {option.name}
                            <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-out" />
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                              <Check className="w-4 h-4" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* RAM */}
          <div className="mb-4">
            <label className="block font-medium mb-1">RAM:</label>
            <Listbox value={ramOptions.find(r => r.value === filters.ram)} onChange={(val) => handleFilterChange('ram', val.value)}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-gray-800 text-white py-2 pl-3 pr-10 text-left shadow-md hover:shadow-[5px_8px_20px_rgba(0,0,0,0.5)] border border-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all">
                  <span>{ramOptions.find(r => r.value === filters.ram)?.name || 'Show All'}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black/10 focus:outline-none z-50">
                  {ramOptions.map((option, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={option}
                      className={({ active, selected }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 transition-all duration-200 ease-in-out group ${
                          active ? 'text-white' : 'text-gray-200'
                        } ${selected ? 'font-semibold' : ''}`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span className="block relative w-fit">
                            {option.name}
                            <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-out" />
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                              <Check className="w-4 h-4" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Memori Internal */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Internal Storage:</label>
            <Listbox value={storageOptions.find(s => s.value === filters.storage)} onChange={(val) => handleFilterChange('storage', val.value)}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-gray-800 text-white py-2 pl-3 pr-10 text-left shadow-md hover:shadow-[5px_8px_20px_rgba(0,0,0,0.5)] border border-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all">
                  <span>{storageOptions.find(s => s.value === filters.storage)?.name || 'Tampilkan Semua'}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black/10 focus:outline-none z-50">
                  {storageOptions.map((option, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={option}
                      className={({ active, selected }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 transition-all duration-200 ease-in-out group ${
                          active ? 'text-white' : 'text-gray-200'
                        } ${selected ? 'font-semibold' : ''}`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span className="block relative w-fit">
                            {option.name}
                            <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-out" />
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                              <Check className="w-4 h-4" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Harga */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Price Range (IDR):</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Min"
                value={formatNumber(filters.priceMin)}
                onChange={(e) => handlePriceInput('priceMin', e.target.value)}
                className="bg-gray-800 w-1/2 text-white border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Max"
                value={formatNumber(filters.priceMax)}
                onChange={(e) => handlePriceInput('priceMax', e.target.value)}
                className="bg-gray-800 w-1/2 text-white border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <label className="block font-medium mb-1">Minimum Rating:</label>
            <Listbox
              value={ratingOptions.find(r => r.value === filters.rating)}
              onChange={(val) => handleFilterChange('rating', val.value)}
            >
              {({ open }) => (
                <div className="relative">
                  <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-gray-800 text-white py-2 pl-3 pr-10 text-left shadow-md hover:shadow-[5px_8px_20px_rgba(0,0,0,0.5)] border border-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all">
                    <span>
                      {ratingOptions.find(r => r.value === filters.rating)?.name || 'Tampilkan Semua'}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute bottom-full mb-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black/10 focus:outline-none z-50">
                    {ratingOptions.map((option, idx) => (
                      <Listbox.Option
                        key={idx}
                        value={option}
                        className={({ active, selected }) =>
                          `relative cursor-pointer select-none py-2 pl-10 pr-4 transition-all duration-200 ease-in-out group ${
                            active ? 'text-white' : 'text-gray-200'
                          } ${selected ? 'font-semibold' : ''}`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span className="block relative w-fit">
                              {option.name}
                              <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-out" />
                            </span>
                            {selected && (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                                <Check className="w-4 h-4" />
                              </span>
                            )}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              )}
            </Listbox>
          </div>


        </div>
      )}


      {/* Konten utama */}
      <div className="flex-1 p-6">
        {/* Tombol Filter dan Search */}
        <div className="flex flex-wrap items-center gap-2 mt-5 mb-7">
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md border transition
                ${category || Object.values(filters).some(val => val)
                  ? 'bg-transparent border-2 border-green-300 text-green-300'
                  : 'border-2 text-white'}
                hover:bg-green-500 hover:text-white`}
              title={showFilter ? 'Close Filter Menu' : 'Show Filter Menu'}
            >
              <FunnelPlus size={20} />
              <span className="text-sm">
                {showFilter ? 'Close Filter Menu' : 'Show Filter Menu'}
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
            placeholder="Search by name . . ."
            className="bg-white/0 w-1/3 text-white border border-white rounded-lg py-2 px-3 focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-80"
          />
        </div>

        {/* Garis horizontal */}
        <div className="border-b-2 border-white w-full mb-10"></div>

        {/* Grid Teknologi */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${showFilter ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-6`}>
          {filteredTechs.map((tech) => (
            <div
              key={tech.id_tech}
              className="group border rounded-lg p-4 text-white shadow-md bg-white/10 transition duration-300 ease-in-out hover:shadow-2xl backdrop-blur-md"
              // style={{
              //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('Background-4.2.png')`,
              //   backgroundSize: 'cover',
              //   backgroundRepeat: 'no-repeat',
              //   backgroundPosition: 'center',
              // }}
            >
              <img
                src={tech.image}
                alt={tech.tech_name}
                className="w-72 h-auto object-contain mx-auto -mt-3 rounded transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
                style={{
                  filter: 'drop-shadow(10px 10px 7px rgba(0,0,0,0.6))',
                }}
              />
              <h2 className="text-lg ml-3 font-bold font-poppins mx-auto"
                  style={{
                    filter: 'drop-shadow(3px 2px 2px rgba(0,0,0,0.3))',
                  }}>
                    {tech.tech_name}
              </h2>
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
                View Details
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
