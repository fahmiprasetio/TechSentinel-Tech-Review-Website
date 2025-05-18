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
      price: 12000000,
      baterai: '3900 mAh',
      kamera_depan: '12 MP',
      kamera_belakang: '50 MP + 10 MP + 12 MP',
      ukuran_layar: '6.1 inci'
    },
    rating: 4.5,
    image: 'techs/samsung-23.png',
    review: 'Cocok banget buat kamu yang suka foto-foto dan multitasking. Desainnya kece, performanya juga ngebut!'
  },
  {
    id_tech: '2',
    tech_name: 'Xiaomi Redmi Note 12',
    category: 'handphone',
    brand: 'Xiaomi',
    specs: {
      ram: '6 GB',
      storage: '128 GB',
      price: 3500000,
      baterai: '4500 mAh',
      kamera_depan: '13 MP',
      kamera_belakang: '48 MP + 8 MP + 2 MP',
      ukuran_layar: '6.67 inci'
    },
    rating: 4.1,
    image: 'techs/xiaomi-redmi-note-12.png',
    review: 'Dengan harga segini, udah dapet spek yang lumayan banget. Pas buat pelajar atau yang budget terbatas.'
  },
  {
    id_tech: '3',
    tech_name: 'iPhone 14 Pro',
    category: 'handphone',
    brand: 'Apple',
    specs: {
      ram: '6 GB',
      storage: '256 GB',
      price: 18000000,
      baterai: '3200 mAh',
      kamera_depan: '12 MP',
      kamera_belakang: '48 MP + 12 MP + 12 MP',
      ukuran_layar: '6.1 inci'
    },
    rating: 4.8,
    image: 'techs/iphone-14-pro.png',
    review: 'Kalau kamu pengen tampil gaya dan ngerekam video sinematik, ini iPhone pilihan paling aman.'
  },
  {
    id_tech: '4',
    tech_name: 'Infinix Zero 5G',
    category: 'handphone',
    brand: 'Infinix',
    specs: {
      ram: '8 GB',
      storage: '128 GB',
      price: 2900000,
      baterai: '5000 mAh',
      kamera_depan: '16 MP',
      kamera_belakang: '50 MP + 2 MP',
      ukuran_layar: '6.78 inci'
    },
    rating: 4.0,
    image: 'techs/infinix-zero-5g.png',
    review: 'Performa ngebut di harga hemat. Enak buat gaming santai atau scrolling seharian.'
  },
  {
    id_tech: '5',
    tech_name: 'Vivo V25',
    category: 'handphone',
    brand: 'Vivo',
    specs: {
      ram: '12 GB',
      storage: '256 GB',
      price: 5100000,
      baterai: '4500 mAh',
      kamera_depan: '50 MP',
      kamera_belakang: '64 MP + 8 MP',
      ukuran_layar: '6.38 inci'
    },
    rating: 4.3,
    image: 'techs/vivo-v25.png',
    review: 'Kamera jernih, desain kece. Cocok buat yang hobi selfie atau bikin konten tipis-tipis.'
  },

  // Laptops
  {
    id_tech: '6',
    tech_name: 'MacBook Air M2',
    category: 'laptop',
    brand: 'Apple',
    specs: { ram: '8 GB', storage: '256 GB', price: 16999000 },
    rating: 4.7,
    image: 'techs/macbook-m2.png',
    review: 'Tipis, ringan, dan kenceng. Cocok buat kamu yang sering kerja sambil nongkrong di kafe.'
  },
  {
    id_tech: '7',
    tech_name: 'ROG Zephyrus G14',
    category: 'laptop',
    brand: 'ASUS',
    specs: { ram: '16 GB', storage: '512 GB', price: 19999000 },
    rating: 4.6,
    image: 'techs/ASUS-ROG-Zephyrus-G14.png',
    review: 'Laptop gaming tapi tetap ramping. Main game lancar, kerja juga gas terus.'
  },
  {
    id_tech: '8',
    tech_name: 'Dell XPS 13',
    category: 'laptop',
    brand: 'Dell',
    specs: { ram: '16 GB', storage: '512 GB', price: 21000000 },
    rating: 4.5,
    image: 'techs/Dell-XPS-13.png',
    review: 'Desain premium dan layar tajam banget. Enak buat kerja desain atau nulis skripsi biar kerasa mahal.'
  },
  {
    id_tech: '9',
    tech_name: 'MSI Prestige 13 AI Evo',
    category: 'laptop',
    brand: 'MSI',
    specs: { ram: '16 GB', storage: '1 TB SSD', price: 19999000 },
    rating: 4.7,
    image: 'techs/MSI-Prestige-13-AI-Evo.png',
    review: 'Powerful tapi tetap stylish. Cocok buat content creator yang butuh performa dan gaya.'
  },
  {
    id_tech: '10',
    tech_name: 'Lenovo LOQ 15i',
    category: 'LOQ',
    specs: { ram: '16 GB', storage: '512 GB SSD', price: 15999000 },
    rating: 4.6,
    image: 'techs/Lenovo-LOQ-15i.png',
    review: 'Kalau kamu cari laptop gaming murah tapi mantep, ini pilihan yang oke banget.'
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
      price: 10000000,
      baterai: '28.6 Wh',
      kamera_depan: '12 MP',
      kamera_belakang: '12 MP',
      ukuran_layar: '10.9 inci'
    },
    rating: 4.6,
    image: 'techs/iPad-Air-5.png',
    review: 'Enak buat nonton, gambar, atau belajar online. Ringan tapi bertenaga.'
  },
  {
    id_tech: '12',
    tech_name: 'Samsung Galaxy Tab S8',
    category: 'tablet',
    brand: 'Samsung',
    specs: {
      ram: '8 GB',
      storage: '128 GB',
      price: 9500000,
      baterai: '8000 mAh',
      kamera_depan: '12 MP',
      kamera_belakang: '13 MP',
      ukuran_layar: '11 inci'
    },
    rating: 4.5,
    image: 'techs/Samsung-Galaxy-Tab-S8.png',
    review: 'Tablet Android yang serius. Stylus-nya enak banget dipake nulis atau coret-coret.'
  },
  {
    id_tech: '13',
    tech_name: 'Xiaomi Pad 5',
    category: 'tablet',
    brand: 'Xiaomi',
    specs: {
      ram: '6 GB',
      storage: '128 GB',
      price: 5200000,
      baterai: '8720 mAh',
      kamera_depan: '8 MP',
      kamera_belakang: '13 MP',
      ukuran_layar: '11 inci'
    },
    rating: 4.3,
    image: 'techs/Xiaomi-Pad-5.png',
    review: 'Tablet murah tapi tampil mewah. Bisa buat kerja, bisa buat hiburan.'
  },
  {
    id_tech: '14',
    tech_name: 'Realme GT 5 Pro',
    category: 'handphone',
    brand: 'Realme',
    specs: {
      ram: '16 GB',
      storage: '512 GB',
      price: 10999000,
      baterai: '4500 mAh',
      kamera_depan: '32 MP',
      kamera_belakang: '64 MP + 8 MP + 2 MP',
      ukuran_layar: '6.43 inci'
    },
    rating: 4.6,
    image: 'techs/Realme-GT-5-Pro.png',
    review: 'Spek dewa, harga masih masuk akal. Buat gaming atau daily driver, nendang banget.'
  },
  {
    id_tech: '15',
    tech_name: 'iPad Pro 11" M4',
    category: 'tablet',
    brand: 'Apple',
    specs: {
      ram: '8 GB',
      storage: '256 GB',
      price: 18999000,
      baterai: '28.65 Wh',
      kamera_depan: '12 MP',
      kamera_belakang: '12 MP + TOF 3D LiDAR Scanner',
      ukuran_layar: '11 inci'
    },
    rating: 4.9,
    image: 'techs/iPad Pro-11-M4.png',
    review: 'Kalau mau tablet yang rasa laptop, ini dia rajanya. Super smooth dan multitaskingnya mantap.'
  },
  {
    id_tech: '16',
    tech_name: 'ASUS Zenbook 14 OLED',
    category: 'laptop',
    brand: 'ASUS',
    specs: { ram: '16 GB', storage: '1 TB SSD', price: 17499000 },
    rating: 4.7,
    image: 'techs/ASUS-Zenbook-14-OLED.png',
    review: 'Layar OLED-nya bikin betah. Tipis, ringan, dan keren buat kerja ataupun gaya.'
  }
];

export default allTechnologies;
