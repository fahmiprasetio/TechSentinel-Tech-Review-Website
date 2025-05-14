import { useParams } from 'react-router-dom';
import allTechnologies from '../data/technologies';

export default function ProductDetail() {
  const { id } = useParams();
  const product = allTechnologies.find(item => item.id_tech === id);

  if (!product) {
    return <div className="text-white p-6">Produk tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto bg-white/10 rounded-lg p-6 shadow-lg text-center">
        <img
          src={product.image}
          alt={product.tech_name}
          className="w-full max-w-sm mx-auto mb-6 rounded-lg shadow"
        />

        {/* Informasi Produk */}
        <h1 className="text-3xl font-bold mb-4">{product.tech_name}</h1>
        <p className="mb-2"><strong>Brand:</strong> {product.brand}</p>
        <p className="mb-2"><strong>Kategori:</strong> {product.category}</p>
        <p className="mb-2"><strong>RAM:</strong> {product.specs.ram}</p>
        <p className="mb-2"><strong>Storage:</strong> {product.specs.storage}</p>
        <p className="mb-2"><strong>Harga:</strong> IDR {product.specs.price.toLocaleString()}</p>
        <p className="mb-2"><strong>Rating:</strong> ⭐ {product.rating}</p>

        <a
          href="/technology"
          className="inline-block mt-6 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          ← Kembali
        </a>
      </div>
    </div>
  );
}
