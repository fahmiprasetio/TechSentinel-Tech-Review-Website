import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import allTechnologies from '../data/technologies';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allTechnologies.find(item => item.id_tech === id);

  const [activeTab, setActiveTab] = useState('productDetails');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div className="text-white p-6">Produk tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black/70 via-black/30 to-black/70 text-white px-6">

      <div className="flex flex-col md:flex-row items-start justify-center gap-12 max-w-6xl mx-auto ">
        {/* Gambar Produk */}
        <div className="w-full md:w-1/2 flex justify-center  mt-10">
          <img
            src={`/${product.image}`}
            alt={product.tech_name}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-xl"
            style={{ filter: 'drop-shadow(10px 10px 15px rgba(0,0,0,0.7))' }}
          />
        </div>

        {/* Informasi Produk */}
        <div className="w-full md:w-2/3 text-left text-lg mt-16 ">
          {/* nama produk */}
          <h1 className="text-4xl mb-2 font-bold">{product.tech_name}</h1>

          {/* Rating */}
          <div className="flex items-center space-x-2 text-yellow-400 text-lg font-semibold">
            <span>★ {product.rating.toFixed(1)}</span>
          </div>

          {/* Review */}
          <p className="text-gray-300 mb-2 text-base">{product.review}</p>

          {/* Harga */}
          <p className="text-3xl font-bold text-white">
            IDR {product.specs.price.toLocaleString('id-ID')}
          </p>


          {/* Tab pilihan */}
          <div className="mt-10">
            <div className="bg-gray-200 rounded-full inline-flex p-1 text-sm">
              <button
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeTab === 'description'
                    ? 'bg-white text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Deskripsi
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeTab === 'specifications'
                    ? 'bg-white text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                Spesifikasi
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeTab === 'ratingReviews'
                    ? 'bg-white text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('ratingReviews')}
              >
                Rating & Reviews
              </button>
            </div>

            {/* Konten tab */}
            <div className="mt-6 text-gray-300">
              {activeTab === 'description' && (
                <div>
                  <p>{product.description || 'Deskripsi produk belum tersedia.'}</p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 text-white text-md md:grid-cols-2 gap-2">
                  {product.specs.ram && (
                    <p><strong>RAM:</strong> {product.specs.ram}</p>
                  )}
                  {product.specs.storage && (
                    <p><strong>Storage:</strong> {product.specs.storage}</p>
                  )}
                  {product.specs.baterai && (
                    <p><strong>Baterai:</strong> {product.specs.baterai}</p>
                  )}
                  {product.specs.kamera_depan && (
                    <p><strong>Kamera Depan:</strong> {product.specs.kamera_depan}</p>
                  )}
                  {product.specs.kamera_belakang && (
                    <p>
                      <strong>Kamera Belakang:</strong>{' '}
                      <span className="text-white text-sm">{product.specs.kamera_belakang}</span>
                    </p>
                  )}
                  {product.specs.ukuran_layar && (
                    <p><strong>Ukuran Layar:</strong> {product.specs.ukuran_layar}</p>
                  )}
                  {product.specs.price && (
                    <p><strong>Harga:</strong> IDR {product.specs.price.toLocaleString('id-ID')}</p>
                  )}
                </div>
              )}

              {activeTab === 'ratingReviews' && (
                <div>
                  <p><strong>Rating:</strong> ★ {product.rating.toFixed(1)}</p>
                  <p className="mt-2">{product.review}</p>
                </div>
              )}
            </div>
          </div>


          {/* Tombol Kembali */}
          <div className="mt-10">
            <button
              onClick={() => navigate('/technology')}
              className="inline-block bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition font-medium"
            >
              ← Kembali ke daftar produk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
