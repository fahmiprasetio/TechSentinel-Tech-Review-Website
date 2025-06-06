import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsRight } from 'lucide-react';
import FavoriteButton from "../components/FavoriteButton";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [allTechnologies, setAllTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const userId = localStorage.getItem("userId");
  const [activeTab, setActiveTab] = useState('description');
  const tabRefs = {
    description: useRef(null),
    specifications: useRef(null),
    ratingReviews: useRef(null),
  };
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const currentRef = tabRefs[activeTab]?.current;
    if (currentRef) {
      setIndicatorProps({
        left: currentRef.offsetLeft,
        width: currentRef.offsetWidth,
      });
    }
  }, [activeTab]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://backend-techsentinel.vercel.app/technology/${id}`);
        const data = await res.json();
        setProduct(data.data || null);
      } catch (err) {
        console.error('Gagal ambil data produk:', err);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchAllTech = async () => {
      try {
        const res = await fetch('https://backend-techsentinel.vercel.app/technologies');
        const data = await res.json();
        setAllTechnologies(data.data || []);
      } catch (err) {
        console.error('Gagal ambil semua teknologi:', err);
      }
    };
    fetchAllTech();
  }, []);

  if (isLoading) return <div className="text-white p-6">Loading...</div>;
  if (!product) return <div className="text-white p-6">Produk tidak ditemukan.</div>;

  const specs = product.specs?.[0] || {};
  const reviews = product.reviews || [];

  return (
    <div className="min-h-full w-full bg-gradient-to-b from-black/70 via-black/30 to-black/50 text-white pb-20">
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 max-w-6xl mx-auto relative">
        <div className="w-full md:w-1/2 flex justify-center mt-16">
          <img src={product.tech_image} alt={product.tech_name} className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-xl" />
        </div>

        <div className="w-full md:w-2/3 text-left text-lg mt-16">
          <h1 className="text-4xl mb-2 font-bold flex items-center gap-3">
            {product.tech_name}
            <FavoriteButton product={product} userId={userId} />
          </h1>
          <div className="flex items-center space-x-2 text-yellow-400 text-xl font-semibold">
            <span>★ {Number(product.rating || 0).toFixed(1)} <span className="text-white/50 text-sm">/ 5.0</span></span>
          </div>
          <p className="text-gray-300 mb-2 text-base">{product.review || 'Belum ada review.'}</p>
          <p className="text-3xl font-bold text-white">IDR {Number(specs.price || 0).toLocaleString('id-ID')}</p>

          {/* Tab Navigasi */}
          <div className="mt-5 relative w-fit">
            <div className="relative bg-gray-600 rounded-full inline-flex p-1 text-sm">
              <motion.div layout transition={{ type: 'spring', stiffness: 500, damping: 70 }} className="absolute top-1 bottom-1 rounded-full bg-white" style={{ width: indicatorProps.width, left: indicatorProps.left, zIndex: 0 }} />
              {['description', 'specifications', 'ratingReviews'].map((tab) => (
                <button key={tab} ref={tabRefs[tab]} onClick={() => setActiveTab(tab)} className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 z-10
                    ${activeTab === tab ? 'text-black border border-white bg-white' : 'text-white hover:bg-white/20 border border-transparent'}`}>
                  {tab === 'description' && 'Description'}
                  {tab === 'specifications' && 'Specifications'}
                  {tab === 'ratingReviews' && 'Rating & Reviews'}
                </button>
              ))}
            </div>

            {/* Konten Tab */}
            <div className="mt-6 text-gray-300 min-h-[150px]">
              <AnimatePresence mode="wait">
                {activeTab === 'description' && (
                  <motion.div key="description" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.3 }} className="space-y-4 text-white text-justify text-lg">
                    {(product.description_tech || 'Deskripsi belum tersedia.').split('\n\n').map((para, idx) => <p key={idx}>{para}</p>)}
                  </motion.div>
                )}
                {activeTab === 'specifications' && (
                  <motion.div key="specifications" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 text-white text-base md:grid-cols-2 gap-2">
                    {Object.entries(specs).map(([key, value]) => key !== 'price' ? (<p key={key}><strong>{key.replace(/_/g, ' ')}:</strong> {value}</p>) : null)}
                    <p><strong>Harga:</strong> IDR {Number(specs.price || 0).toLocaleString('id-ID')}</p>
                  </motion.div>
                )}
                {activeTab === 'ratingReviews' && (
                  <motion.div key="ratingReviews" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.3 }}>
                    <div className="mt-4 space-y-4">
                      {Array.isArray(reviews) && reviews.length > 0 ? reviews.map((review, idx) => (
                        <div key={idx} className="border-b border-gray-600 pb-4 last:border-b-0">
                          <div className="flex items-center space-x-4">
                            <img src={review.user?.profile_picture || '/default-avatar.png'} alt={review.user?.user_name || 'User'} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                              <p className="font-semibold text-white">{review.user?.user_name || 'Anonim'}</p>
                              <p className="text-yellow-400 font-semibold">★ {Number(review.rating || 0).toFixed(1)} <span className="text-white/50 text-sm">/ 5.0</span></p>
                            </div>
                          </div>
                          <p className="mt-2 text-white text-base">{review.comment}</p>
                        </div>
                      )) : (<p className="text-gray-400 italic">Belum ada ulasan dari pengguna lain.</p>)}
                    </div>
                    <div className="mt-6">
                      <button onClick={() => navigate(`/technology/comments/${product.id_tech}`)} className="inline-flex items-center gap-2 text-white border-2 border-white pl-4 pr-3 py-2 rounded-lg hover:bg-white hover:text-black transition font-medium text-base">
                        View More Comments <ChevronsRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Produk Serupa */}
      <div className="mt-12 -mb-10 max-w-7xl mx-auto">
        <hr className="border-t border-1 border-white mb-8" />
        <h2 className="text-2xl font-semibold mb-6 mx-auto">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allTechnologies.filter(
            item => item.id_tech !== product.id_tech && item.category?.id_category === product.category?.id_category
          ).slice(0, 4).map(tech => (
            <div key={tech.id_tech} className="border rounded-lg p-4 text-white shadow-md transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('Background-4.2.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
              <img src={tech.tech_image} alt={tech.tech_name} className="w-72 h-auto object-contain mx-auto -mt-3 rounded" />
              <h2 className="text-lg ml-3 font-bold font-poppins mx-auto">{tech.tech_name}</h2>
              <p className="ml-3">Brand : {tech.brand}</p>
              <p className="ml-3">IDR {Number(tech.specs?.[0]?.price || 0).toLocaleString('id-ID')}</p>
              <div className="flex items-center ml-3">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{Number(tech.rating || 0).toFixed(1)}</span>
              </div>
              <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate(`/technology/detail/${tech.id_tech}`); }} className="mt-4 mb-3 ml-3 inline-block bg-transparent border border-white text-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
