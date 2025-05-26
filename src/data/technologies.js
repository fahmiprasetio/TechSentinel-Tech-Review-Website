const allTechnologies = [
  // Handphones
  {
    id_tech: '1',
    tech_name: 'Samsung Galaxy S23',
    category: 'handphone',
    brand: 'Samsung',
    specs: {
      ram: '8 GB',
      storage: '128 GB',
      prosesor: 'Snapdragon 8 Gen 2 for Galaxy',
      sistem_operasi: 'Android 13, One UI 5.1',
      baterai: '3900 mAh',
      kamera_depan: '12 MP',
      kamera_belakang: '50 MP + 10 MP + 12 MP',
      ukuran_layar: '6.1 inci',
      resolusi_layar: '1080 x 2340 piksel',
      refresh_rate: '120Hz',
      price: 12000000
    },

    image: 'techs/samsung-23.png',
    review: 'Cocok banget buat kamu yang suka foto-foto dan multitasking. Desainnya kece, performanya juga ngebut!',
    description: 'Samsung Galaxy S23 adalah ponsel flagship yang diluncurkan oleh Samsung pada awal tahun 2023 sebagai penerus dari seri Galaxy S22. Didesain dengan material premium dan perlindungan Gorilla Glass Victus 2, ponsel ini menawarkan tampilan mewah sekaligus daya tahan tinggi. Chipset Snapdragon 8 Gen 2 for Galaxy membuat kinerjanya sangat responsif untuk gaming berat maupun penggunaan multitasking harian.\n\nSektor kameranya dilengkapi triple-lens 50 MP yang menghasilkan gambar tajam dan natural, didukung dengan fitur Nightography untuk foto malam yang jernih. Layar Dynamic AMOLED 2X 120Hz memberikan pengalaman visual luar biasa dengan warna yang hidup dan detail tinggi. Baterainya mungkin tidak terlalu besar, namun software optimalisasi Samsung membuat daya tahan tetap baik. Galaxy S23 cocok untuk pengguna profesional yang ingin performa dan gaya dalam satu paket.',
    reviews: [
      {
        userName: 'Rina',
        rating: 4.5,
        comment: 'Ponsel ini enak banget buat dipakai sehari-hari. Kamera-nya cakep, hasil fotonya tajam dan warnanya natural. Aku suka banget karena bisa multitasking lancar tanpa nge-lag, cocok banget buat aku yang kerja sambil main sosial media. Baterainya juga awet, bisa seharian tanpa ngecas.'
      },
      {
        userName: 'Dedi',
        rating: 4.6,
        comment: 'Menurut aku, ponsel ini udah oke banget buat harga segitu. Layarnya jernih, enak buat nonton video atau scrolling. Performa juga lancar buat main game ringan dan aplikasi kerja. Cuma kadang suka panas kalau dipakai lama, tapi masih wajar lah buat kelasnya.'
      },
      {
        userName: 'Sari',
        rating: 4.7,
        comment: 'Desainnya kece, pas digenggam juga enak. Kamera depan dan belakang sama-sama oke buat foto selfie dan video call. Paling suka karena prosesornya cepat, gak ada hambatan waktu aku buka banyak aplikasi sekaligus. Recommended banget buat yang pengen ponsel stylish tapi tetep performa ngebut.'
      }
    ],
    rating: 0, 
  },
  {
    id_tech: '2',
    tech_name: 'Xiaomi Redmi Note 12',
    category: 'handphone',
    brand: 'Xiaomi',
    specs: {
      ram: '6 GB',
      storage: '128 GB',
      prosesor: 'Snapdragon 685',
      sistem_operasi: 'Android 12, MIUI 14',
      baterai: '4500 mAh',
      kamera_depan: '13 MP',
      kamera_belakang: '48 MP + 8 MP + 2 MP',
      ukuran_layar: '6.67 inci',
      resolusi_layar: '1080 x 2400 piksel',
      refresh_rate: '120Hz',
      price: 2799000
    },
    rating: 4.1,
    image: 'techs/xiaomi-redmi-note-12.png',
    review: 'Dengan harga segini, udah dapet spek yang lumayan banget. Pas buat pelajar atau yang budget terbatas.',
    description: 'Xiaomi Redmi Note 12 merupakan smartphone kelas menengah yang dirancang untuk menghadirkan performa seimbang dengan harga terjangkau. Diperkenalkan pada tahun 2022, ponsel ini menggunakan layar AMOLED 120Hz yang sangat jarang ditemukan di segmen harganya. Desainnya ramping dan ergonomis, membuat nyaman saat digenggam dalam waktu lama.\n\nChipset Snapdragon 685 memberikan kinerja cukup untuk penggunaan harian seperti media sosial, browsing, dan game ringan. Kamera utama 48 MP mampu menghasilkan foto yang layak di kondisi pencahayaan cukup. Dengan baterai 4500 mAh dan pengisian cepat, Redmi Note 12 adalah pilihan ideal untuk pelajar, mahasiswa, dan siapa saja yang mencari keseimbangan fitur dan harga.',
    reviews: [{'userName': 'Budi', 'rating': 4.2, 'comment': 'Dengan harga segini, Xiaomi Redmi Note 12 udah luar biasa. Aku beli buat keperluan kuliah dan hiburan, dan semuanya lancar. Layarnya AMOLED dan 120Hz bikin pengalaman nonton jadi lebih tajam dan mulus. Main sosmed dan chat lancar banget, dan kamera belakangnya bisa diandalkan buat foto di siang hari. Desainnya juga modern, gak kelihatan seperti HP murah.'}, {'userName': 'Ayu', 'rating': 4.0, 'comment': 'Aku udah pakai HP ini sebulan lebih. Performa buat harian seperti browsing, chat, dan YouTube udah oke banget. Kameranya lumayan bagus, walaupun malam hari agak kurang tajam. Tapi baterainya tahan lama dan pengisian cepatnya sangat membantu. Cocok banget buat pelajar atau mahasiswa yang cari HP budget tapi tetap fungsional.'}, {'userName': 'Lina', 'rating': 4.1, 'comment': 'Baterai 4500 mAh-nya bisa tahan seharian bahkan dengan pemakaian aktif. Aku pakai buat kerja dan scrolling media sosial, gak ada masalah berarti. Layarnya lega dan terang banget di luar ruangan. Kamera cukup bagus untuk dokumentasi momen-momen penting. Pokoknya ini HP yang pas buat yang butuh perangkat handal tanpa bikin kantong bolong.'}],
  },
  {
    id_tech: '3',
    tech_name: 'iPhone 14 Pro',
    category: 'handphone',
    brand: 'Apple',
    specs: {
      ram: '6 GB',
      storage: '256 GB',
      prosesor: 'Apple A16 Bionic',
      sistem_operasi: 'iOS 16',
      baterai: '3200 mAh',
      kamera_depan: '12 MP',
      kamera_belakang: '48 MP + 12 MP + 12 MP',
      ukuran_layar: '6.1 inci',
      resolusi_layar: '1179 x 2556 piksel',
      refresh_rate: '120Hz',
      price: 18499000
    },
    rating: 4.8,
    image: 'techs/iphone-14-pro.png',
    review: 'Kalau kamu pengen tampil gaya dan ngerekam video sinematik, ini iPhone pilihan paling aman.',
    description: 'iPhone 14 Pro merupakan ponsel flagship dari Apple yang diumumkan pada akhir tahun 2022. Dilengkapi dengan chip A16 Bionic terbaru, ponsel ini menjanjikan performa luar biasa dalam berbagai skenario, termasuk gaming, editing video, dan multitasking berat. iPhone 14 Pro juga memperkenalkan fitur Dynamic Island yang menggantikan notch klasik dengan tampilan interaktif.\n\nSistem kamera Pro-nya sangat mumpuni, terutama kamera utama 48 MP dengan kemampuan ProRAW dan ProRes yang ideal bagi fotografer dan videografer profesional. Dengan material stainless steel dan Ceramic Shield, bodi ponsel terlihat eksklusif dan sangat kokoh. Cocok untuk pengguna yang menginginkan teknologi terbaik dari Apple dalam bentuk yang ringkas.',
    reviews: [
    {
      userName: 'Andi',
      rating: 5.0,
      comment: 'Performa luar biasa, terutama untuk editing video dan main game berat. Dynamic Island juga fitur yang sangat membantu.'
    },
    {
      userName: 'Sari',
      rating: 4.7,
      comment: 'Kameranya juara banget! ProRAW dan ProRes sangat berguna buat kerjaan fotografi. Bodi dan layarnya juga premium.'
    },
    {
      userName: 'Rizky',
      rating: 4.6,
      comment: 'iPhone 14 Pro ini cocok buat multitasking. Harga memang tinggi, tapi sepadan dengan fitur dan kualitasnya.'
    }
  ]
  },
  {
    id_tech: '4',
    tech_name: 'Infinix Zero 5G',
    category: 'handphone',
    brand: 'Infinix',
    specs: {
      ram: '8 GB',
      storage: '128 GB',
      prosesor: 'MediaTek Dimensity 920',
      sistem_operasi: 'Android 11, XOS 10',
      baterai: '5000 mAh',
      kamera_depan: '16 MP',
      kamera_belakang: '50 MP + 2 MP',
      ukuran_layar: '6.78 inci',
      resolusi_layar: '1080 x 2460 piksel',
      refresh_rate: '120Hz',
      price: 2999000
    },
    rating: 4.0,
    image: 'techs/infinix-zero-5g.png',
    review: 'Performa ngebut di harga hemat. Enak buat gaming santai atau scrolling seharian.',
    description: 'Infinix Zero 5G adalah ponsel pertama dari Infinix yang mendukung jaringan 5G. Dirilis pada tahun 2022, ponsel ini menawarkan konektivitas masa depan dengan harga yang sangat terjangkau. Menggunakan chipset MediaTek Dimensity 920, performa multitasking dan gaming cukup stabil di kelas harganya.\n\nLayar besar 6.78 inci dengan refresh rate 120Hz memberikan pengalaman visual mulus, sementara kamera utamanya yang 50 MP sanggup menghasilkan foto yang detail di pencahayaan cukup. Baterai 5000 mAh memungkinkan penggunaan seharian tanpa perlu khawatir kehabisan daya. Ideal bagi pengguna muda yang mencari performa modern dengan harga bersahabat.',
    reviews: [{'userName': 'Rudi', 'rating': 4.2, 'comment': 'Infinix Zero 5G ini menurutku underrated banget. Performa-nya mantep buat game ringan sampai sedang. Aku pakai main Mobile Legends, gak ngelag sama sekali. Layarnya gede dan tajam, enak buat nonton juga. Desainnya simpel tapi terlihat modern. Buat harga segini, ini udah luar biasa.'}, {'userName': 'Nia', 'rating': 4.0, 'comment': 'Aku beli HP ini karena butuh koneksi 5G yang murah. Ternyata dapet lebih dari ekspektasi. Baterainya awet, bisa dipakai seharian penuh. Kamera cukup bagus untuk kebutuhan dokumentasi. Chipset-nya lancar dipakai multitasking, apalagi buat kerja dan sosmed. Recommended buat pelajar dan pengguna aktif.'}, {'userName': 'Fajar', 'rating': 4.1, 'comment': 'Ponsel ini performanya stabil untuk multitasking. Aku pakai buat streaming sambil buka dokumen kerja. Jarang ada lag. Meskipun bodinya agak besar, tapi tetap nyaman digenggam. Kamera belakangnya cukup oke buat foto outdoor. Harganya juga pas di kantong, gak bikin nyesel beli.'}],
  },
  {
    id_tech: '5',
    tech_name: 'Vivo V25',
    category: 'handphone',
    brand: 'Vivo',
    specs: {
      ram: '12 GB',
      storage: '256 GB',
      prosesor: 'MediaTek Dimensity 900',
      sistem_operasi: 'Android 12, Funtouch 12',
      baterai: '4500 mAh',
      kamera_depan: '50 MP',
      kamera_belakang: '64 MP + 8 MP',
      ukuran_layar: '6.38 inci',
      resolusi_layar: '1080 x 2400 piksel',
      refresh_rate: '90Hz',
      price: 4899000
    },
    rating: 4.3,
    image: 'techs/vivo-v25.png',
    review: 'Kamera jernih, desain kece. Cocok buat yang hobi selfie atau bikin konten tipis-tipis.',
    description: 'Vivo V25 diluncurkan pada pertengahan tahun 2022 sebagai bagian dari lini menengah Vivo yang menonjolkan desain dan kamera. Salah satu fitur uniknya adalah kaca belakang dengan kemampuan color-changing, yang dapat berubah warna saat terkena cahaya, memberikan kesan futuristik dan modis.\n\nDi sisi fotografi, kamera depan 50 MP membuat V25 sangat cocok untuk pecinta selfie dan konten media sosial. Kamera belakangnya juga dilengkapi OIS yang membantu menghasilkan foto dan video yang stabil. Dengan RAM besar dan penyimpanan luas, perangkat ini juga nyaman untuk multitasking dan menyimpan banyak media. Ideal untuk pengguna muda dan konten kreator pemula.',
    reviews: [{'userName': 'Nia', 'rating': 4.4, 'comment': 'Vivo V25 ini stylish banget, pas banget buat aku yang suka tampil kece di sosmed. Kamera depannya luar biasa jernih, hasil selfie selalu memuaskan bahkan dalam cahaya minim. Aku juga sering bikin konten video, dan OIS-nya bener-bener bantu banget biar gak goyang. Warnanya berubah-ubah di belakang bikin HP ini tambah unik. Worth every rupiah!'}, {'userName': 'Eka', 'rating': 4.2, 'comment': 'Desainnya tipis dan enteng, nyaman dipakai lama-lama. Layarnya cerah dan tajam, cocok buat streaming dan browsing. Aku suka karena memorinya lega, jadi gak perlu sering-sering hapus file. Prosesor cepat dan multitasking-nya lancar banget. Sejauh ini gak pernah ngerasa lemot meskipun dipakai banyak aplikasi sekaligus.'}, {'userName': 'Rina', 'rating': 4.5, 'comment': 'Aku suka banget pakai Vivo V25 buat aktivitas harian. Kameranya tajam, baik depan maupun belakang, dan cocok buat foto-foto konten. Aku juga seneng karena baterainya cukup tahan dan pengisian cepatnya sangat membantu. Perpaduan desain futuristik dan performa yang stabil bikin HP ini cocok buat yang aktif dan stylish kayak aku.'}],
  },

  // Laptops
  {
    id_tech: '6',
    tech_name: 'MacBook Air M2',
    category: 'laptop',
    brand: 'Apple',
    specs: {
      ram: '8 GB',
      storage: '256 GB',
      price: 16999000,
      baterai: '52.6 Wh',
      ukuran_layar: '13.6 inci',
      resolusi_layar: '2560 x 1664',
      prosesor: 'Apple M2',
      grafis: 'Integrated (8-core GPU)',
      sistem_operasi: 'macOS Ventura',
    },
    rating: 4.7,
    image: 'techs/macbook-m2.png',
    review: 'Tipis, ringan, dan kenceng. Cocok buat kamu yang sering kerja sambil nongkrong di kafe.',
    description: 'MacBook Air M2 dirilis oleh Apple pada tahun 2022 sebagai generasi penerus MacBook Air dengan desain yang lebih tipis dan ringan namun dengan performa jauh lebih kencang. Menggunakan chip Apple M2 yang hemat daya, laptop ini mampu menangani berbagai tugas produktivitas dan multimedia secara mulus tanpa panas berlebih.\n\nLayar Retina 13,6 inci memberikan warna yang tajam dan akurat, sangat cocok untuk pekerjaan kreatif seperti desain grafis dan editing video. Baterai tahan lama hingga 18 jam membuat MacBook Air M2 ideal untuk profesional yang sering bekerja mobile tanpa harus sering mencari colokan listrik.',
    reviews: [{'userName': 'Fajar', 'rating': 4.8, 'comment': 'MacBook Air M2 ini bener-bener perangkat impian. Sangat ringan tapi kencang. Aku sering bawa ke kampus dan kantor tanpa merasa berat di tas. Semua aplikasi jalan mulus, bahkan buat edit video ringan dan desain grafis. Layarnya tajam dan speakernya juga mengesankan. Baterainya tahan lama, bisa tahan seharian penuh kerja tanpa colok charger.'}, {'userName': 'Yuni', 'rating': 4.7, 'comment': 'Pertama kali coba MacBook, dan langsung jatuh cinta. Booting super cepat, dan semua terasa smooth banget. Desainnya cantik dan minimalis, cocok buat yang suka tampilan modern. Keyboard nyaman banget buat ngetik lama. Aku pakai buat kerja remote dan sejauh ini gak pernah ngecewain.'}, {'userName': 'Sinta', 'rating': 4.6, 'comment': 'Laptop ini performanya stabil dan adem banget meskipun dipakai lama. Aku biasa kerja pakai software berat dan semuanya lancar. Retina display-nya bikin mata gak cepat capek. Trackpad-nya responsif banget, dan pengalaman pakainya bener-bener premium. Cocok banget buat mahasiswa, profesional, maupun freelancer.'}],
  },
  {
    id_tech: '7',
    tech_name: 'ROG Zephyrus G14',
    category: 'laptop',
    brand: 'ASUS',
    specs: {
      ram: '16 GB',
      storage: '512 GB',
      price: 19999000,
      baterai: '76 Wh',
      ukuran_layar: '14 inci',
      resolusi_layar: '2560 x 1600',
      prosesor: 'AMD Ryzen 9 6900HS',
      grafis: 'NVIDIA RTX 3060',
      sistem_operasi: 'Windows 11 Home'
    },
    rating: 4.6,
    image: 'techs/ASUS-ROG-Zephyrus-G14.png',
    review: 'Laptop gaming tapi tetap ramping. Main game lancar, kerja juga gas terus.',
    description: 'ASUS ROG Zephyrus G14 adalah laptop gaming ringkas yang dirilis pada tahun 2022, dirancang untuk memberikan performa tinggi tanpa mengorbankan portabilitas. Ditenagai oleh prosesor AMD Ryzen 9 dan GPU NVIDIA RTX terbaru, laptop ini mampu menjalankan game dan aplikasi berat dengan lancar.\n\nLayar dengan refresh rate tinggi dan sistem pendingin canggih memungkinkan sesi gaming panjang tanpa overheating. Desain stylish dengan bodi ringan menjadikannya favorit gamer yang juga membutuhkan mobilitas tinggi, serta kreator konten yang menginginkan performa dalam kemasan ramping.',
    reviews: [{'userName': 'Bayu', 'rating': 4.6, 'comment': 'Aku beli ROG Zephyrus G14 ini buat kerja sekaligus main game, dan dua-duanya dilibas habis. Performanya luar biasa dengan prosesor AMD Ryzen dan RTX, main game berat lancar tanpa stutter. Keyboardnya nyaman dan gak terlalu berisik. Desainnya juga keren, gak lebay kayak laptop gaming lain. Udah kayak ultrabook tapi kekuatan dewa!'}, {'userName': 'Diana', 'rating': 4.5, 'comment': 'Laptop ini pas banget buat aku yang kerja di bidang desain dan kadang gaming juga. Layarnya enak dilihat, warna akurat. Gak panas meskipun render lama. Build quality-nya terasa premium dan tahan banting. Ukurannya gak terlalu besar, jadi tetap mudah dibawa-bawa. Salah satu laptop gaming paling portabel yang pernah aku punya.'}, {'userName': 'Reza', 'rating': 4.7, 'comment': 'Aku pakai G14 ini untuk editing video dan streaming, semua jalan mulus. Suaranya jernih, kipas gak terlalu bising, dan cooling system-nya efisien banget. Udah lama cari laptop yang bisa kerja berat tapi tetap ramping, dan ini jawabannya. Daya tahan baterainya juga oke untuk laptop gaming. Recommended buat kreator konten juga.'}],
  },
  {
    id_tech: '8',
    tech_name: 'Dell XPS 13',
    category: 'laptop',
    brand: 'Dell',
    specs: {
      ram: '16 GB',
      storage: '512 GB',
      price: 21000000,
      baterai: '51 Wh',
      ukuran_layar: '13.4 inci',
      resolusi_layar: '1920 x 1200',
      prosesor: 'Intel Core i7-1250U',
      grafis: 'Intel Iris Xe Graphics',
      sistem_operasi: 'Windows 11 Pro'
    },
    rating: 4.5,
    image: 'techs/Dell-XPS-13.png',
    review: 'Desain premium dan layar tajam banget. Enak buat kerja desain atau nulis skripsi biar kerasa mahal.',
    description: 'ASUS ROG Zephyrus G14 adalah laptop gaming ringkas yang dirilis pada tahun 2022, dirancang untuk memberikan performa tinggi tanpa mengorbankan portabilitas. Ditenagai oleh prosesor AMD Ryzen 9 dan GPU NVIDIA RTX terbaru, laptop ini mampu menjalankan game dan aplikasi berat dengan lancar.\n\nLayar dengan refresh rate tinggi dan sistem pendingin canggih memungkinkan sesi gaming panjang tanpa overheating. Desain stylish dengan bodi ringan menjadikannya favorit gamer yang juga membutuhkan mobilitas tinggi, serta kreator konten yang menginginkan performa dalam kemasan ramping.',
    reviews: [{'userName': 'Diana', 'rating': 4.5, 'comment': 'Dell XPS 13 tampil dengan desain mewah dan minimalis. Sangat nyaman buat kerja ngetik lama dan browsing. Aku suka layar InfinityEdge-nya yang tajam banget, bikin presentasi kerja kelihatan profesional. Performanya gak kalah dengan laptop mahal lainnya. Tipis, ringan, dan tangguh buat mobilitas tinggi.'}, {'userName': 'Lina', 'rating': 4.6, 'comment': 'Awalnya beli karena bentuknya kece, tapi ternyata performanya juga keren. Cocok buat multitasking, kerja desain, atau sekadar hiburan. Layarnya super tajam dan nyaman buat mata. Suara speaker-nya juga jernih. Laptop ini cocok banget buat mahasiswa atau profesional yang butuh tampilan premium dan kinerja tangguh.'}, {'userName': 'Andi', 'rating': 4.5, 'comment': 'Satu kata, yaitu elegan. Dell XPS 13 ini jadi teman kerja sehari-hari yang bisa diandalkan. Booting cepat, responsif banget, dan jarang banget ngelag. Udah aku pakai buat coding, desain, bahkan presentasi ke klien. Ringan dan awet baterai. Kalau suka laptop stylish dan tangguh, ini pilihan tepat.'}],
  },
  {
    id_tech: '9',
    tech_name: 'MSI Prestige 13 AI Evo',
    category: 'laptop',
    brand: 'MSI',
    specs: { ram: '16 GB', storage: '1000 GB SSD', price: 19999000 },
    rating: 4.7,
    image: 'techs/MSI-Prestige-13-AI-Evo.png',
    review: 'Powerful tapi tetap stylish. Cocok buat content creator yang butuh performa dan gaya.',
    description: 'MSI Prestige 13 AI Evo diluncurkan pada tahun 2022 sebagai laptop stylish untuk para profesional kreatif dan content creator. Menggunakan prosesor Intel Core generasi terbaru yang bertenaga, laptop ini mampu menjalankan aplikasi editing video dan grafis dengan efisien.\n\nLayar dengan akurasi warna tinggi dan desain tipis ringan memudahkan mobilitas pengguna. Dilengkapi fitur keamanan dan konektivitas lengkap, MSI Prestige 13 AI Evo menjadi pilihan ideal untuk produktivitas tinggi di berbagai lokasi.',
    reviews: [{'userName': 'Reza', 'rating': 4.7, 'comment': 'MSI Prestige 13 AI Evo ini salah satu laptop terbaik buat content creator. Aku biasa edit video dan desain grafis, semua jalan mulus tanpa lag. Layar warna-warnanya hidup, cocok banget buat pekerjaan visual. Desainnya elegan dan bobotnya ringan, enak banget dibawa-bawa. Baterainya juga awet, gak bikin panik saat kerja mobile.'}, {'userName': 'Sinta', 'rating': 4.6, 'comment': 'Laptop ini nyaman banget dipakai buat kerja berjam-jam. Suaranya jernih, keyboard empuk, dan touchpad-nya presisi. Desainnya modern dan profesional, cocok buat dipakai meeting atau presentasi ke klien. Aku suka juga dengan port-nya yang lengkap, gak perlu banyak adapter tambahan.'}, {'userName': 'Bayu', 'rating': 4.8, 'comment': 'Aku pakai Prestige 13 AI Evo buat kombinasi kerja berat dan hiburan. Bisa buka banyak aplikasi tanpa penurunan performa. Fitur AI-nya membantu banget untuk penghematan daya dan kinerja. Material bodi-nya juga solid dan premium. Salah satu investasi terbaik buat kerja fleksibel.'}],
  },
  {
    id_tech: '10',
    tech_name: 'Lenovo LOQ 15i',
    category: 'LOQ',
    specs: { ram: '16 GB', storage: '512 GB SSD', price: 15999000 },
    rating: 4.6,
    image: 'techs/Lenovo-LOQ-15i.png',
    review: 'Kalau kamu cari laptop gaming murah tapi mantep, ini pilihan yang oke banget.',
    description: 'Lenovo LOQ 15i adalah laptop gaming entry-level yang hadir dengan performa solid dan harga terjangkau, dirilis tahun 2023. Laptop ini menggunakan prosesor Intel Core dan GPU NVIDIA GTX yang dapat menjalankan game populer dengan frame rate stabil.\n\nDesainnya cukup compact dengan sistem pendingin yang efektif menjaga suhu tetap rendah selama sesi gaming panjang. Keyboard dengan backlight RGB dan audio yang jernih menambah pengalaman gaming lebih seru bagi pengguna muda dan gamer pemula.',
    reviews: [{'userName': 'Galang', 'rating': 4.6, 'comment': 'Lenovo LOQ 15i ini cocok banget buat yang mau laptop gaming entry-level dengan harga terjangkau. Performa main game seperti Valorant dan GTA V lancar banget. Sistem pendinginnya juga bagus, gak cepat panas walau main lama. Keyboard RGB-nya keren, bikin pengalaman main makin seru.'}, {'userName': 'Putra', 'rating': 4.5, 'comment': 'Aku pakai laptop ini buat kerja dan kadang main game. Bisa multitasking sambil buka software berat tanpa masalah. Desainnya gak terlalu norak kayak laptop gaming lain, jadi tetap elegan dipakai kerja. Layarnya tajam dan responsif. Port-nya juga lengkap, gak repot nyambung ke perangkat lain.'}, {'userName': 'Devi', 'rating': 4.7, 'comment': 'Laptop ini jadi andalan buat kuliah dan hiburan. Bisa dipakai ngerjain tugas sambil streaming musik dan YouTube. Suara speakernya kenceng dan jelas. Performa grafik cukup kuat buat game menengah. Daya tahan baterai oke lah untuk kelas gaming laptop. Worth banget!'}],
  },
  
  // Tablets
  {
    id_tech: '11',
    tech_name: 'iPad Air 5',
    category: 'tablet',
    brand: 'Apple',
    specs: {
      ram: '8 GB',
      storage: '256 GB',
      prosesor: 'Apple M1',
      sistem_operasi: 'iPadOS 15 (upgradable)',
      baterai: '28.6 Wh',
      kamera_depan: '12 MP',
      kamera_belakang: '12 MP',
      ukuran_layar: '10.9 inci',
      resolusi_layar: '1640 x 2360 piksel',
      refresh_rate: '60Hz',
      price: 10000000
    },
    rating: 4.6,
    image: 'techs/iPad-Air-5.png',
    review: 'Enak buat nonton, gambar, atau belajar online. Ringan tapi bertenaga.',
    description: 'iPad Air 5 hadir pada tahun 2022 dengan chip M1 yang powerful, membawa performa setara laptop ke dalam tablet yang ringan dan ringkas. Layar Liquid Retina 10,9 inci menawarkan warna akurat dan tampilan jernih, sangat ideal untuk belajar, bekerja, dan hiburan.\n\nPerangkat ini mendukung Apple Pencil generasi kedua dan Magic Keyboard, memudahkan pengguna untuk menggambar digital, mengetik, dan multitasking. Baterai tahan lama membuat iPad Air 5 siap menemani aktivitas seharian.',
    reviews: [{'userName': 'Sinta', 'rating': 4.5, 'comment': 'iPad Air 5 ini tipis dan ringan, tapi performanya setara laptop. Aku sering pakai buat kuliah, nyatet pakai Apple Pencil, dan multitasking sambil video call. Layarnya jernih banget dan responsif. Selain buat belajar, aku juga sering streaming Netflix dan main game ringan, semuanya lancar. Sangat cocok untuk pelajar maupun profesional yang butuh mobilitas tinggi.'}, {'userName': 'Putra', 'rating': 4.6, 'comment': 'Awalnya beli iPad Air 5 buat kebutuhan gambar digital, ternyata bisa jauh lebih dari itu. Editing video ringan, presentasi, bahkan dokumen kerjaan semua bisa diselesaikan di sini. Baterainya tahan seharian penuh, gak perlu takut lowbat pas kerja di luar. Keyboard-nya nyaman kalau pakai Magic Keyboard tambahan.'}, {'userName': 'Yuni', 'rating': 4.7, 'comment': 'Aku suka karena tampilannya simple tapi performa M1-nya kencang banget. Buat Zoom, YouTube, desain, semua jalan lancar. Ukurannya pas, gak terlalu besar tapi cukup luas buat kerja atau gambar. Daya tahan baterai top dan build quality-nya mewah. Ini bukan cuma tablet, ini hampir laptop versi ringan.'}],
  },
  {
    id_tech: '12',
    tech_name: 'Samsung Galaxy Tab S8',
    category: 'tablet',
    brand: 'Samsung',
    specs: {
      ram: '8 GB',
      storage: '128 GB',
      prosesor: 'Snapdragon 8 Gen 1',
      sistem_operasi: 'Android 12, One UI 4.1',
      baterai: '8000 mAh',
      kamera_depan: '12 MP',
      kamera_belakang: '13 MP',
      ukuran_layar: '11 inci',
      resolusi_layar: '1600 x 2560 piksel',
      refresh_rate: '120Hz',
      price: 9500000
    },
    rating: 4.5,
    image: 'techs/Samsung-Galaxy-Tab-S8.png',
    review: 'Tablet Android yang serius. Stylus-nya enak banget dipake nulis atau coret-coret.',
    description: 'Samsung Galaxy Tab S8 adalah tablet flagship Android yang dirilis tahun 2022, hadir dengan layar 11 inci beresolusi tinggi dan refresh rate 120Hz. Stylus S Pen yang disertakan memberikan pengalaman menulis dan menggambar yang responsif dan natural.\n\nDitenagai prosesor Snapdragon 8 Gen 1, tablet ini mampu menjalankan aplikasi multitasking dan game dengan lancar. Baterai besar dan dukungan pengisian cepat membuat Galaxy Tab S8 ideal untuk pengguna yang membutuhkan perangkat serbaguna untuk kerja dan hiburan.',
    reviews: [{'userName': 'Bayu', 'rating': 4.6, 'comment': 'Samsung Galaxy Tab S8 ini pilihan tepat buat pengguna Android yang butuh tablet serius. Stylus-nya responsif banget, cocok buat nulis dan gambar sketsa. Aku biasa pakai buat kerja, catatan meeting, dan hiburan, semua lancar tanpa lemot. Layarnya luas dan terang, bikin nyaman di mata meskipun dipakai lama.'}, {'userName': 'Dedi', 'rating': 4.5, 'comment': 'Tablet ini punya performa mantap, aku pakai buat multitasking dan main game ringan, semua stabil. S Pen-nya akurat dan serasa nulis di kertas. Konektivitasnya lengkap, dan UI Samsung One UI sangat ramah pengguna. Plus, desainnya ramping dan elegan, mudah dibawa kemana-mana.'}, {'userName': 'Rina', 'rating': 4.7, 'comment': 'Tablet ini enak banget buat kerja kreatif. Aku suka ngedit foto dan video ringan di sini, dan hasilnya oke banget. Stylus-nya nyaman, layarnya mulus, dan suaranya juga jernih. Buat nonton atau rapat online juga nyaman. Gak nyangka Android bisa sefleksibel ini!'}],
  },
  {
    id_tech: '13',
    tech_name: 'Xiaomi Pad 5',
    category: 'tablet',
    brand: 'Xiaomi',
    specs: {
      ram: '6 GB',
      storage: '128 GB',
      prosesor: 'Snapdragon 860',
      sistem_operasi: 'MIUI for Pad (berbasis Android 11)',
      baterai: '8720 mAh',
      kamera_depan: '8 MP',
      kamera_belakang: '13 MP',
      ukuran_layar: '11 inci',
      resolusi_layar: '1600 x 2560 piksel',
      refresh_rate: '120Hz',
      price: 5200000
    },
    rating: 4.3,
    image: 'techs/Xiaomi-Pad-5.png',
    review: 'Tablet murah tapi tampil mewah. Bisa buat kerja, bisa buat hiburan.',
    description: 'Xiaomi Pad 5 adalah tablet mid-range yang menawarkan spesifikasi unggulan untuk harga yang kompetitif. Layar 11 inci dengan refresh rate 120Hz memberikan pengalaman visual yang halus dan tajam, cocok untuk menonton film dan bermain game.\n\nDengan chipset Snapdragon 860, Xiaomi Pad 5 mampu menjalankan berbagai aplikasi dan multitasking tanpa hambatan. Audio stereo ganda mendukung pengalaman hiburan lebih imersif, sementara desain tipis dan baterai besar mendukung penggunaan jangka panjang.',
    reviews: [{'userName': 'Devi', 'rating': 4.3, 'comment': 'Xiaomi Pad 5 ini bener-bener tablet serbaguna. Aku pakai buat kerja remote, buka dokumen, dan ikut meeting, semua berjalan lancar. Layarnya besar dan tajam, nyaman banget buat baca atau nonton. Stylus-nya juga responsif untuk catatan atau gambar sketsa. Dengan harga segini, dapat fitur sekelas flagship, rasanya worth banget.'}, {'userName': 'Galang', 'rating': 4.4, 'comment': 'Tablet ini cocok banget buat mahasiswa. Aku sering pakai buat belajar online dan hiburan, multitasking lancar dan jarang hang. Desainnya ramping, dan baterainya tahan lama walau dipakai terus-menerus. Suara speakernya stereo dan jelas banget buat nonton atau dengerin musik. Sangat direkomendasikan untuk yang punya budget menengah.'}, {'userName': 'Reza', 'rating': 4.2, 'comment': 'Untuk ukuran harga dan spesifikasi, Xiaomi Pad 5 termasuk yang terbaik. Cocok untuk produktivitas ringan, multimedia, dan bahkan game ringan. Layarnya enak dilihat dan refresh rate tinggi bikin scroll jadi smooth. Desain minimalis tapi elegan. Cocok buat kerja maupun hiburan sehari-hari.'}],
  },
  {
    id_tech: '14',
    tech_name: 'Realme GT 5 Pro',
    category: 'handphone',
    brand: 'Realme',
    specs: {
      ram: '16 GB',
      storage: '512 GB',
      prosesor: 'Snapdragon 8 Gen 2',
      sistem_operasi: 'Android 13, Realme UI 4.0',
      baterai: '4500 mAh',
      kamera_depan: '32 MP',
      kamera_belakang: '64 MP + 8 MP + 2 MP',
      ukuran_layar: '6.43 inci',
      resolusi_layar: '1440 x 3260 piksel',
      refresh_rate: '120Hz',
      price: 10999000
    },
    rating: 4.6,
    image: 'techs/Realme-GT-5-Pro.png',
    review: 'Spek dewa, harga masih masuk akal. Buat gaming atau daily driver, nendang banget.',
    description: 'Realme GT 5 Pro adalah smartphone flagship yang dirilis tahun 2023, membawa performa tinggi dengan chipset Snapdragon 8 Gen 2. Layar AMOLED 6,43 inci dengan refresh rate 120Hz menawarkan tampilan sangat responsif dan tajam.\n\nPengisian daya super cepat 100W memungkinkan pengisian baterai yang singkat. Sistem kamera lengkap dengan sensor utama 64 MP mendukung foto dan video berkualitas tinggi. Realme GT 5 Pro cocok bagi pengguna yang mencari ponsel kencang dan fitur lengkap untuk gaming dan produktivitas.',
    reviews: [{'userName': 'Yoga', 'rating': 4.6, 'comment': 'Realme GT 5 Pro ini performanya luar biasa, terutama buat gaming. Snapdragon 8 Gen 2-nya ngebut banget, gak pernah ngelag bahkan main game berat. Layarnya cerah dan tajam, enak banget buat konten visual. Baterainya juga tahan lama, dan nge-charge-nya super cepat. Cocok buat yang aktif dan butuh ponsel multitasking.'}, {'userName': 'Lina', 'rating': 4.7, 'comment': 'Aku pakai HP ini buat kerja dan hiburan, semuanya lancar. Kamera belakangnya menghasilkan foto yang tajam, dan kamera depannya bagus buat video call. Storage-nya lega, jadi gak perlu khawatir kehabisan ruang. Hasil foto malam juga mengejutkan bagus. Desainnya juga kekinian dan elegan.'}, {'userName': 'Hana', 'rating': 4.5, 'comment': 'HP ini keren banget dari segala sisi. Gaming jalan lancar, buka aplikasi berat juga cepat. Sistem pendinginnya bagus, jadi gak gampang panas. Buat streaming, scrolling, sampai kerja, semuanya lancar jaya. Kamera selfie dan belakang dua-duanya bagus. Realme GT 5 Pro ini salah satu pilihan terbaik di kelas harga 10 jutaan.'}],
  },
  {
    id_tech: '15',
    tech_name: 'iPad Pro 11" M4',
    category: 'tablet',
    brand: 'Apple',
    specs: {
      ram: '8 GB',
      storage: '256 GB',
      prosesor: 'Apple M4',
      sistem_operasi: 'iPadOS 17',
      baterai: '28.65 Wh',
      kamera_depan: '12 MP',
      kamera_belakang: '12 MP + TOF 3D LiDAR Scanner',
      ukuran_layar: '11 inci',
      resolusi_layar: '1668 x 2388 piksel',
      refresh_rate: '120Hz',
      price: 18999000
    },
    rating: 4.9,
    image: 'techs/iPad Pro-11-M4.png',
    review: 'Kalau mau tablet yang rasa laptop, ini dia rajanya. Super smooth dan multitaskingnya mantap.',
    description: 'iPad Pro 11" M4 adalah tablet premium Apple generasi terbaru yang diluncurkan pada tahun 2024 dengan chip M4 yang sangat cepat dan efisien. Layar ProMotion 120Hz menghadirkan visual halus dan responsif, cocok untuk kerja kreatif dan hiburan.\n\nDukungan Apple Pencil dan Magic Keyboard menjadikan iPad Pro 11" M4 perangkat serbaguna yang mampu menggantikan laptop. Dengan performa tinggi dan desain portabel, tablet ini ideal untuk profesional dan pengguna yang menuntut fleksibilitas.',
    reviews: [{'userName': 'Melati', 'rating': 4.9, 'comment': 'iPad Pro 11 M4 ini rasanya kayak laptop tapi versi super ringan. Aku pakai buat desain grafis, edit video, sampai bikin dokumen kantor. Semuanya mulus dan gak ada delay. Apple Pencil-nya presisi banget dan sangat mendukung kerja kreatif. Layar ProMotion-nya bikin semuanya kelihatan hidup. Sangat ideal buat kamu yang butuh perangkat fleksibel dengan performa tinggi.'}, {'userName': 'Rudi', 'rating': 4.8, 'comment': 'Tablet ini bukan main. Performa M4-nya beneran kerasa, multitasking lancar banget bahkan pas buka aplikasi berat. Layarnya terang dan responsif, cocok buat gambar atau nonton film. Aku juga pakai buat catatan dan presentasi. Ringan tapi powerful. Cocok buat kerja profesional yang butuh mobilitas.'}, {'userName': 'Eka', 'rating': 4.9, 'comment': 'iPad Pro ini jadi andalan aku buat kerja mobile. Ringan, baterai awet, dan bisa gantiin laptop untuk banyak tugas. Magic Keyboard dan Apple Pencil bikin pengalaman kerjanya makin produktif. Cocok buat kamu yang pengen gaya dan performa sekaligus. Harganya mahal, tapi setimpal dengan yang didapat.'}],
  },
  {
    id_tech: '16',
    tech_name: 'ASUS Zenbook 14 OLED',
    category: 'laptop',
    brand: 'ASUS',
    specs: { ram: '16 GB', storage: '1000 GB SSD', price: 17499000 },
    rating: 4.7,
    image: 'techs/ASUS-Zenbook-14-OLED.png',
    review: 'Layar OLED-nya bikin betah. Tipis, ringan, dan keren buat kerja ataupun gaya.',
    description: 'ASUS Zenbook 14 OLED adalah laptop premium yang hadir dengan layar OLED berkualitas tinggi dan warna sangat akurat. Dirilis tahun 2023, Zenbook ini menggabungkan desain tipis dan ringan dengan performa kuat berkat prosesor terbaru dan penyimpanan SSD 1 TB.\n\nLayar OLED memungkinkan tampilan warna hitam pekat dan kontras tinggi, meningkatkan pengalaman multimedia dan desain grafis. Desain elegan dan daya tahan baterai panjang membuat ASUS Zenbook 14 OLED cocok untuk profesional yang mengutamakan gaya dan performa.',
    reviews: [{'userName': 'Hana', 'rating': 4.7, 'comment': 'ASUS Zenbook 14 OLED ini tampilannya elegan dan profesional. Aku pakai buat kerja dan nonton, dan layarnya beneran memanjakan mata. Warna-warna di layar OLED-nya tajam dan kontras tinggi. Desainnya ringan dan enak dibawa ke mana-mana. Performanya juga mantap buat multitasking atau kerja berat.'}, {'userName': 'Lina', 'rating': 4.8, 'comment': 'Zenbook ini pilihan sempurna buat kerja hybrid. Aku sering pindah tempat kerja dan laptop ini ringan banget. Keyboard-nya nyaman dan nggak bising. Selain buat kerja, aku juga sering nonton drama Korea di sini karena kualitas layarnya luar biasa. Baterai tahan lama, gak perlu bawa charger terus.'}, {'userName': 'Yuni', 'rating': 4.6, 'comment': 'Aku pakai Zenbook ini setiap hari buat desain dan browsing. Performa cepat dan gak pernah hang. Storage besar jadi gak perlu pakai hard disk eksternal lagi. Yang paling aku suka, tampilannya sleek dan modern. Cocok buat yang butuh performa dan tampilan stylish dalam satu paket.'}],
  },
  {
    id_tech: '17',
    tech_name: 'iPhone 15 Pro Max',
    category: 'handphone',
    brand: 'Apple',
    specs: {
      ram: '8 GB',
      storage: '256 GB',
      price: 23999000,
      baterai: '4441 mAh',
      kamera_depan: '12 MP',
      kamera_belakang: '48 MP + 12 MP + 12 MP + TOF 3D',
      ukuran_layar: '6.7 inci'
    },

    image: 'techs/iphone-15-pro-max.png',
    review: 'Kalau kamu pengen ponsel super premium yang bisa segalanya dengan elegan, iPhone 15 Pro Max jawabannya.',
    description: 'iPhone 15 Pro Max adalah flagship terbaru Apple yang dirilis pada akhir 2023 dengan inovasi besar di sisi material, performa, dan fotografi. Dibalut titanium grade 5 yang ringan dan kuat, bodinya terasa kokoh namun tetap ergonomis. Chip A17 Pro membawa peningkatan signifikan pada efisiensi dan grafis, menjadikannya ideal untuk gaming berat dan aplikasi profesional.\n\nSistem kamera Pro dengan lensa periskop 5x zoom optik memungkinkan pemotretan jarak jauh tanpa kehilangan detail. Mode video sinematik, ProRes, dan log recording juga tersedia untuk para pembuat konten. Layar Super Retina XDR 120Hz menghadirkan visual yang luar biasa tajam dan responsif. iPhone 15 Pro Max adalah pilihan utama bagi pengguna yang mengutamakan kualitas, kecepatan, dan kamera terbaik di kelasnya.',
    reviews: [
      {
        userName: 'Fajar',
        rating: 4.9,
        comment: 'Ini iPhone paling gahar yang pernah aku pakai. Kameranya luar biasa banget, terutama zoom optik 5x yang bisa ngambil foto dari kejauhan tapi tetap tajam. Aku sering banget rekam video waktu jalan-jalan dan hasilnya kayak pakai kamera profesional. Main game berat pun lancar banget, gak kerasa panas sama sekali. Desain titanium-nya juga elegan dan ringan, bener-bener upgrade dari versi sebelumnya. Buat kerja dan hiburan, iPhone 15 Pro Max ini udah paling mantap.'
      },
      {
        userName: 'Yuni',
        rating: 4.8,
        comment: 'Layarnya super tajam dan warnanya vivid banget, bikin nonton Netflix jadi makin seru. Aku juga suka Face ID-nya yang makin responsif. Baterainya tahan seharian walau aku sering pakai buat foto, kerja, dan scrolling sosial media. Desain bodinya keliatan mewah dan enak banget digenggam. iPhone ini cocok banget buat yang pengen tampil gaya tapi juga butuh performa buat kerja dan konten.'
      },
      {
        userName: 'Andi',
        rating: 4.9,
        comment: 'Fitur kamera pro-nya keren banget, bisa rekam log ProRes langsung dari HP! Cocok banget buat aku yang sering bikin konten buat YouTube dan Instagram. Stabilisasi videonya halus, hasil fotonya jernih walau malam hari. Desain baru yang lebih ringan bikin makin nyaman dibawa ke mana-mana. Harganya memang tinggi, tapi sebanding sama fitur dan kualitas yang ditawarkan. Gak nyesel upgrade ke iPhone ini!'
      }
    ],
    rating: 0
  },
  {
    id_tech: '18',
    tech_name: 'Samsung Galaxy S24 Ultra',
    category: 'handphone',
    brand: 'Samsung',
    specs: {
      ram: '12 GB',
      storage: '512 GB',
      price: 21999000,
      baterai: '5000 mAh',
      kamera_depan: '12 MP',
      kamera_belakang: '200 MP + 12 MP + 10 MP + 10 MP',
      ukuran_layar: '6.8 inci'
    },

    image: 'techs/Samsung-Galaxy-S24-Ultra.png',
    review: 'Performa, kamera, dan layar terbaik Samsung? Semua ada di Galaxy S24 Ultra.',
    description: 'Samsung Galaxy S24 Ultra hadir sebagai flagship paling ambisius Samsung di tahun 2024. Ditenagai Snapdragon 8 Gen 3, performanya sangat impresif untuk gaming 120Hz, multitasking berat, dan AI photography. Dengan bodi titanium baru dan layar Edge 6.8 inci Dynamic AMOLED 2X, perangkat ini memadukan kekuatan dan kemewahan dalam satu genggaman.\n\nSistem kamera 200 MP-nya dilengkapi AI image enhancer, Space Zoom 100x, dan mode Nightography generasi baru, menjadikannya senjata utama bagi fotografer mobile. Stylus S Pen tetap hadir, cocok untuk kreativitas dan produktivitas. Galaxy S24 Ultra benar-benar tandingan serius bagi iPhone 15 Pro Max.',
    reviews: [
      {
        userName: 'Dedi',
        rating: 4.8,
        comment: 'Pertama kali nyobain Galaxy S24 Ultra langsung jatuh cinta sama kameranya. Hasil fotonya tajem banget, bahkan pas zoom sampe 10x atau 100x masih keliatan detailnya! Buat ngambil foto bulan atau konser dari jauh, ini juara sih. Layarnya juga gede dan super jernih, bikin nonton film atau kerja dari HP jadi nyaman banget. Buat yang doyan foto-foto dan butuh layar lega, wajib banget coba ini.'
      },
      {
        userName: 'Sari',
        rating: 4.9,
        comment: 'Desain Galaxy S24 Ultra ini keren parah! Titanium bodinya bikin kesan mewah dan kokoh, tapi tetep enteng digenggam. Aku suka banget sama stylus-nya, sering aku pake buat coret-coret ide atau edit foto langsung di HP. Multitasking lancar, buka banyak aplikasi sekaligus juga gak ada lag. Kalau buat kerja, hiburan, sampe konten kreatif, ini HP all-in-one banget. Puas maksimal!'
      },
      {
        userName: 'Budi',
        rating: 4.9,
        comment: 'Menurutku ini Android paling lengkap dan bisa banget saingan sama iPhone 15 Pro Max. Kameranya udah level profesional, hasil fotonya keren siang dan malam. Layar AMOLED-nya bener-bener halus dan warnanya hidup banget. Aku juga sering pake S Pen-nya buat catat ide dan bikin sketsa. Performanya ngebut, baterai tahan lama, dan charging-nya cepat. Buat kamu yang pengen flagship Android tanpa kompromi, ini jawabannya!'
      }
    ],
    rating: 0
  },
  {
    id_tech: '19',
    tech_name: 'MacBook Pro 16 M3 Max',
    category: 'laptop',
    brand: 'Apple',
    specs: {
      ram: '36 GB',
      storage: '1000 GB SSD',
      price: 49999000,
      baterai: '100 Wh',
      ukuran_layar: '16.2 inci',
      resolusi_layar: '3456 x 2234',
      prosesor: 'Apple M3 Max (16-core CPU, 40-core GPU)',
      grafis: 'Integrated (Apple M3 Max)',
      sistem_operasi: 'macOS Sonoma'
    },
    image: 'techs/MacBook-Pro-16-M3-Max.png',
    review: 'Buat kamu yang cari performa profesional tanpa kompromi, MacBook Pro M3 Max jawabannya.',
    description: 'MacBook Pro 16 M3 Max adalah laptop paling powerful dari Apple yang dirilis pada akhir 2023. Menggunakan chip Apple Silicon generasi ketiga, M3 Max membawa peningkatan besar dalam performa grafis dan efisiensi daya, sangat cocok untuk rendering, machine learning, dan produksi konten skala tinggi.\n\nLayar Liquid Retina XDR 16 inci dengan refresh rate ProMotion 120Hz menyajikan visual super tajam dan akurat. Baterainya tetap tahan lama meski mengusung performa tinggi. Dengan build alumunium yang premium dan dukungan penuh untuk Final Cut Pro, Logic Pro, dan tools kreatif lainnya, MacBook Pro M3 Max adalah laptop ideal untuk profesional dan kreator yang menuntut performa ekstrem.',
    reviews: [
      {
        userName: 'Fajar',
        rating: 4.9,
        comment: 'Pakai MacBook Pro M3 Max tuh berasa kayak bawa workstation dalam bentuk laptop. Aku biasa render video 4K, edit audio, dan multitasking berat tanpa hambatan. Layarnya juga bikin betah lama-lama. Cocok banget buat profesional.'
      },
      {
        userName: 'Yuni',
        rating: 4.8,
        comment: 'Desainnya tetap mewah dan minimalis khas Apple. Keyboard dan trackpad-nya nyaman banget buat kerja berjam-jam. Performa M3 Max-nya bikin semua kerjaan terasa enteng. Worth it buat kamu yang serius di dunia kreatif.'
      },
      {
        userName: 'Andi',
        rating: 4.9,
        comment: 'Suaranya stereo, layar HDR-nya mantap, dan baterainya tahan lama meskipun aku pakai buat kerja berat. Gak nyesel upgrade dari M1 ke M3 Max. Ini laptop masa depan.'
      }
    ],
    rating: 0
  },
  {
    id_tech: '20',
    tech_name: 'ASUS ROG Zephyrus Duo 16',
    category: 'laptop',
    brand: 'ASUS',
    specs: {
      ram: '32 GB',
      storage: '2000 GB SSD',
      price: 47999000,
      baterai: '90 Wh',
      ukuran_layar: '16 inci (utama) + 14 inci (ScreenPad)',
      resolusi_layar: '2560 x 1600 (utama)',
      prosesor: 'AMD Ryzen 9 7945HX',
      grafis: 'NVIDIA RTX 4090 16GB',
      sistem_operasi: 'Windows 11 Pro'
    },
    image: 'techs/ASUS-ROG-Zephyrus-Duo -16-2024.png',
    review: 'Kalau kamu butuh laptop yang bertenaga dan beda dari yang lain, Zephyrus Duo 16 punya semuanya.',
    description: 'ASUS ROG Zephyrus Duo 16 edisi 2024 membawa pendekatan unik dengan layar ganda yang inovatif. Ditenagai prosesor AMD Ryzen 9 dan GPU NVIDIA RTX 4090, laptop ini diciptakan untuk profesional gaming, editing video, hingga live streaming level tinggi.\n\nLayar utama 16 inci QHD+ Mini LED dengan refresh rate tinggi berpadu dengan layar kedua ROG ScreenPad Plus di atas keyboard, memberikan fleksibilitas luar biasa untuk produktivitas dan kontrol multitasking. Sistem pendingin liquid metal dan airflow optimal menjamin performa tetap stabil. Zephyrus Duo 16 adalah laptop ekstrem untuk kreator dan gamer sejati yang butuh kekuatan dan keunikan dalam satu paket.',
    reviews: [
      {
        userName: 'Dedi',
        rating: 4.8,
        comment: 'Laptop ini beneran unik banget. Layar ganda bikin aku bisa kerja sambil monitor software lain di bawahnya. Performa? Udah gak perlu diraguin. Bisa render 3D sambil buka tab segudang.'
      },
      {
        userName: 'Sari',
        rating: 4.9,
        comment: 'Desainnya beda banget, stylish dan futuristik. Aku sering pakai buat live streaming sambil multitasking. GPU dan RAM-nya bikin semua serba lancar. Buat content creator atau streamer, ini sih surga.'
      },
      {
        userName: 'Budi',
        rating: 4.9,
        comment: 'Punya Zephyrus Duo tuh kayak bawa studio kerja lengkap. Layarnya cakep, audionya jernih, dan gak pernah panas berlebihan. Meskipun mahal, tapi pengalaman pakainya gak tertandingi.'
      }
    ],
    rating: 0
  }


  


  
];

// Hitung rating rata-rata tiap produk
allTechnologies.forEach(product => {
  if (product.reviews && product.reviews.length > 0) {
    const total = product.reviews.reduce((acc, cur) => acc + cur.rating, 0);
    product.rating = +(total / product.reviews.length).toFixed(1);
  }
});

// Tambahkan foto profil otomatis berdasarkan nama (pakai UI Avatars atau DiceBear)
allTechnologies.forEach(product => {
  if (product.reviews && product.reviews.length > 0) {
    const total = product.reviews.reduce((acc, cur) => acc + cur.rating, 0);
    product.rating = +(total / product.reviews.length).toFixed(1);

    product.reviews = product.reviews.map(review => ({
      ...review,
      userPhoto: `https://ui-avatars.com/api/?name=${encodeURIComponent(review.userName)}&background=random&color=fff`
      // Alternatif: `https://avatars.dicebear.com/api/initials/${encodeURIComponent(review.userName)}.svg`
    }));
  }
});


export default allTechnologies;


