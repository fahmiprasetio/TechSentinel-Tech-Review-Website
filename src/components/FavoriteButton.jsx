import { useState } from "react";
import { Save } from "lucide-react";

export default function FavoriteButton({ product, userId }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleToggleFavorite = async () => {
    console.log("Tombol diklik untuk produk:", product.id_tech); // Log ID Produk yang akan dikirim

    if (!userId) {
      alert("Silakan login terlebih dahulu untuk menambahkan ke favorit.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;

    if (!token) {
      alert("Token tidak ditemukan. Silakan login ulang.");
      return;
    }

    console.log("ID Produk yang dikirim ke server:", product.id_tech);

    try {
      if (isFavorited) {
        // Hapus produk dari favorit (DELETE request)
        const res = await fetch(`https://backend-techsentinel.vercel.app/favorite/${product.id_tech}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) {
          console.error("❌ Detail error:", data.message);
          throw new Error("Gagal menghapus dari favorit");
        }

        setIsFavorited(false); // Menandakan produk sudah dihapus dari favorit
        console.log("✅ Produk dihapus dari favorit:", data);
        alert(`Produk ${product.tech_name} berhasil dihapus dari favorit!`);
      } else {
        // Tambahkan produk ke favorit (POST request)
        const res = await fetch(`https://backend-techsentinel.vercel.app/favorite/${product.id_tech}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({ id_tech: product.id_tech }),
        });

        const data = await res.json();
        if (!res.ok) {
          console.error("❌ Detail error:", data.message);
          throw new Error("Gagal menambahkan ke favorit");
        }

        setIsFavorited(true); // Menandakan produk sudah ditambahkan ke favorit
        console.log("✅ Produk ditambahkan ke favorit:", data);
        alert(`Produk ${product.tech_name} berhasil ditambahkan ke favorit!`);
      }
    } catch (err) {
      console.error("❌ Gagal menambah atau menghapus dari favorit:", err.message);
    }
  };

  if (!product || !product.id_tech) return null;

  return (
    <button onClick={handleToggleFavorite} className="ml-3 text-white hover:text-yellow-300">
      <Save className={`w-6 h-6 ${isFavorited ? 'text-yellow-400' : 'text-white'}`} /> {/* Ubah warna ikon jika sudah difavoritkan */}
    </button>
  );
}
