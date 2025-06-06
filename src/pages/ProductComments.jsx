import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductComments() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    window.scrollTo(0, 0);
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/technology/${id}`);
        const data = await res.json();
        setProduct(data.data || null);
      } catch (error) {
        console.error('Gagal ambil data produk:', error);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (isLoading) return <div className="text-white p-6">Loading...</div>;
  if (!product) return <div className="text-white p-6">Produk tidak ditemukan.</div>;

  const reviews = product.reviews || [];

  return (
    <div className="min-h-full w-full bg-gradient-to-b from-black/70 via-black/30 to-black/50 text-white pb-20">
      <div className="text-white max-w-6xl mx-auto px-4 py-8 -mt-3 ">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-1">
          <img
            src={product.tech_image}
            alt={product.tech_name}
            className="w-36 h-36 object-contain rounded-xl"
            style={{ filter: 'drop-shadow(10px 10px 15px rgba(0,0,0,0.7))' }}
          />
          <div className="text-center md:text-left mt-10">
            <h1 className="text-3xl font-bold">{product.tech_name}</h1>
            <p className="text-yellow-400 text-lg font-semibold">
              ★ {Number(product.rating || 0).toFixed(1)} <span className="text-white/50 text-base">/ 5.0</span>
            </p>
          </div>
        </div>

        <hr className="border-t border-1 border-white/90 mb-5" />

        {reviews.length > 0 ? (
          reviews.map((review, idx) => (
            <div key={idx} className="mb-6 border-b border-gray-700 pb-4 text-justify max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center text-white font-bold">
                  {review.user?.profile_picture ? (
                    <img
                      src={review.user.profile_picture}
                      alt={review.user.user_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>
                      {review.user?.user_name
                        ?.split(' ')
                        .map(word => word[0])
                        .join('')
                        .toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-semibold">{review.user?.user_name || 'Anonim'}</p>
                  <p className="text-yellow-400">
                    ★ {Number(review.rating || 0).toFixed(1)} <span className="text-white/50 text-sm">/ 5.0</span>
                  </p>
                </div>
              </div>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic text-center mt-4">Belum ada komentar untuk produk ini.</p>
        )}
      </div>
    </div>
  );
}
