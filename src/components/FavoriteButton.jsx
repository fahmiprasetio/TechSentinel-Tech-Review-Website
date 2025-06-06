import { useState, useEffect } from "react";
import { Save } from "lucide-react";

export default function FavoriteButton({ product, userId }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleToggleFavorite = async () => {
    console.log("Tombol diklik untuk produk:", product.id_tech);

    if (!userId) {
      alert("Silakan login terlebih dahulu untuk menambahkan ke favorit.");
      return;
    }

    try {
      const res = await fetch(`https://backend-techsentinel.vercel.app/favorite/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_tech: product.id_tech }),
      });

      if (!res.ok) {
        throw new Error("Gagal menambahkan ke favorit");
      }

      setIsFavorited(true);
      console.log("✅ Produk ditambahkan ke favorit");
    } catch (err) {
      console.error("❌ Gagal menambahkan ke favorit:", err.message);
    }
  };

  if (!product || !product.id_tech) return null;

  return (
    <button onClick={handleToggleFavorite} className="ml-3 text-white hover:text-yellow-300">
      <Save className="w-6 h-6" />
    </button>
  );
}
