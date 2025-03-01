import { motion } from "framer-motion";

const facilities = [
  {
    title: "Ruang Belajar",
    description: "Ruangan nyaman dengan fasilitas modern untuk kegiatan belajar mengajar Al-Quran dan ilmu agama",
    image: "https://al-maahiraiibs.sch.id/assets/portal/news/20230929_032113_468060.jpg",
    features: ["Smart Board", "AC", "Meja & Kursi Ergonomis", "Audio System"]
  },
  {
    title: "Perpustakaan",
    description: "Koleksi lengkap kitab-kitab tafsir, hadis, dan buku-buku Islam untuk memperdalam ilmu",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop",
    features: ["Ribuan Koleksi Buku", "Ruang Baca Nyaman", "Sistem Katalog Digital", "WiFi"]
  },
  {
    title: "Asrama",
    description: "Tempat tinggal nyaman dengan fasilitas lengkap untuk para penghafal Al-Quran",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1469&auto=format&fit=crop",
    features: ["Kamar AC", "Kamar Mandi Dalam", "Laundry", "Kantin"]
  },
];

const Facilities = () => {
  return (
    <section id="fasilitas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fasilitas Kami</h2>
          <p className="text-gray-600">
            Kami menyediakan fasilitas modern dan nyaman untuk mendukung proses pembelajaran
            dan pengembangan diri santri
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-900">Fasilitas tersedia:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-600 flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
