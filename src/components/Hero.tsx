
import { motion } from "framer-motion";
import { Book, Trees, Building, Monitor } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-primary to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
          Rumah Quran Inspirasi
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Tempat yang nyaman untuk menghafal dan mempelajari Al-Quran dengan 
          fasilitas modern dan suasana yang inspiratif
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {[
          {
            icon: Book,
            title: "Perpustakaan",
            desc: "Koleksi lengkap kitab tafsir dan hadis",
            path: "/perpustakaan"
          },
          {
            icon: Trees,
            title: "Taman Muroja'ah",
            desc: "Ruang terbuka untuk refleksi",
            path: "/taman-murojah"
          },
          {
            icon: Building,
            title: "Masjid",
            desc: "Tempat ibadah dengan arsitektur modern",
            path: "/masjid"
          },
          {
            icon: Monitor,
            title: "Ruang Belajar",
            desc: "Pembelajaran interaktif",
            path: "/ruang-belajar"
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full mb-4">
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
