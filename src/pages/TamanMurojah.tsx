
import { motion } from "framer-motion";
import { Trees, Leaf, Cloud, Sun } from "lucide-react";

const TamanMurojah = () => {
  return (
    <div className="min-h-screen bg-white">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20 pb-16 px-4"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Taman Muroja'ah</h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Ruang terbuka hijau yang dirancang untuk memberikan ketenangan dan inspirasi 
            dalam menghafal dan mengulang hafalan Al-Quran
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: Trees,
                title: "Taman Rindang",
                desc: "Area hijau dengan pepohonan rindang",
              },
              {
                icon: Leaf,
                title: "Gazebo Privat",
                desc: "Tempat nyaman untuk muroja'ah sendiri",
              },
              {
                icon: Cloud,
                title: "Air Mancur",
                desc: "Suara air yang menenangkan",
              },
              {
                icon: Sun,
                title: "Pencahayaan Alami",
                desc: "Optimalkan waktu muroja'ah di pagi hari",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default TamanMurojah;
