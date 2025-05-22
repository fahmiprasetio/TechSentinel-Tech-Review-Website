import React from "react";

const DetailArticle = () => {
  return (
    <div
      className="bg-center bg-contain min-h-screen px-4 sm:px-8 py-12"
      style={{ backgroundImage: "url('/bg-riviw.svg')" }}
    >
      <div className="max-w-screen-lg mx-auto border border-collapse bg-slate-800">
        {/* Judul Utama */}
        <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl text-center mb-10">
          Samsung Galaxy S23: Mengukir Standar Baru Smartphone Premium
        </h1>

        {/* Gambar & Paragraf Pendahuluan */}
        <div className="flex flex-wrap xl:flex-nowrap gap-8 justify-center items-center mb-12">
          {/* Gambar */}
          <div className="w-full xl:w-1/2 max-w-md">
            <img
              src="gas23.png"
              alt="Samsung Galaxy S23"
              className="w-full h-[250px] object-cover rounded shadow-md"
            />
          </div>

          {/* Paragraf */}
          <div className="w-full xl:w-1/2 text-slate-200 text-base max-w-xl">
            <p>
              Samsung Galaxy S23 telah hadir sebagai salah satu smartphone
              premium yang mendefinisikan ulang standar di pasar perangkat
              seluler. Dengan desain elegan, performa tangguh, dan inovasi
              kamera yang luar biasa, perangkat ini menawarkan pengalaman yang
              tak tertandingi bagi pengguna yang menginginkan yang terbaik dari
              teknologi modern. Berikut adalah ulasan mendalam tentang
              fitur-fitur unggulan Galaxy S23 dan mengapa perangkat ini layak
              disebut sebagai pelopor baru di kelas premium.
            </p>
          </div>
        </div>

        {/* Section: Performa */}
        <div className="text-center mb-12">
          {/* Judul Section */}
          <h2 className="font-semibold text-white text-xl sm:text-2xl mb-4">
            Performa Tangguh dengan Snapdragon 8 Gen 2 for Galaxy
          </h2>

          {/* Gambar Chipset */}
          <div className="flex justify-center mb-6">
            <img
              src="Processor_gas23.png"
              alt="Snapdragon"
              className="w-80 h-[200px] object-cover rounded shadow"
            />
          </div>

          {/* Paragraf Penjelasan */}
          <div className="text-slate-200 text-base max-w-xl mx-auto text-left">
            <p>
              Ditenagai oleh chipset Qualcomm Snapdragon 8 Gen 2 for Galaxy,
              Galaxy S23 menawarkan performa yang luar biasa. Chipset ini, yang
              dirancang khusus untuk perangkat Samsung, memiliki CPU octa-core
              dengan kecepatan hingga 3.36 GHz dan GPU Adreno 740 yang
              di-overclock untuk performa grafis 30% lebih baik dibandingkan
              generasi sebelumnya. Dengan RAM 8 GB (LPDDR5) dan opsi penyimpanan
              128 GB (UFS 3.1) atau 256/512 GB (UFS 4.0), perangkat ini mampu
              menangani multitasking, gaming, dan aplikasi berat dengan mulus.
            </p>

            <h3 className="font-semibold my-4">
              Benchmark dan Pengalaman Nyata:
            </h3>

            <p>
              Dalam pengujian Geekbench 6, Galaxy S23 mencatat skor single-core
              sekitar 1,961 dan multi-core sekitar 5,207, menunjukkan performa
              yang hampir setara dengan model Ultra. Sistem pendingin yang
              ditingkatkan juga memastikan perangkat tetap dingin selama
              penggunaan intensif, seperti bermain game dengan ray tracing atau
              mengedit video.
            </p>
          </div>
        </div>
        <div className="text-center mb-12">
          {/* Judul Section */}
          <h2 className="font-semibold text-white text-xl sm:text-2xl mb-4">
            Kamera dan Daya Tahan Baterai yang Mengesankan
          </h2>

          {/* Gambar Chipset */}
          <div className="flex justify-center mb-6">
            <img
              src="kamera_gas23.png"
              alt="Snapdragon"
              className="w-80 h-[200px] object-cover rounded shadow"
            />
          </div>

          {/* Paragraf Penjelasan */}
          <div className="text-slate-200 text-base max-w-xl mx-auto text-left">
            <p>
              Galaxy S23 mengusung sistem kamera belakang tiga lensa: kamera utama 50 MP (f/1.8, OIS, Dual Pixel PDAF) untuk foto detail dengan dynamic range luas, ultrawide 12 MP (f/2.2) untuk bidikan lanskap, dan telefoto 10 MP (f/2.4, 3x optical zoom) untuk zoom tajam hingga 30x digital. Fitur Nightography menghasilkan foto malam dengan noise minimal, sementara Photo Assist berbasis AI memungkinkan pengeditan canggih, seperti menghapus objek atau membuat efek slo-mo. Kamera selfie 12 MP mendukung video 4K 60fps, dan aplikasi Expert RAW memenuhi kebutuhan fotografer profesional. Untuk daya tahan, baterai 3,900 mAh mampu bertahan seharian untuk penggunaan normal, didukung pengisian cepat 25W (0-50% dalam 30 menit), pengisian nirkabel 15W, dan wireless power sharing 4.5W, menjadikan Galaxy S23 serbaguna untuk gaya hidup modern
            </p>

            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailArticle;
