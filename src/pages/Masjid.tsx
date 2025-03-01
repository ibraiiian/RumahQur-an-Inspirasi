
import { motion } from "framer-motion";
import { Building, Users, Book, Moon } from "lucide-react";

const Masjid = () => {
  return (
    <div className="min-h-screen bg-white">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20 pb-16 px-4"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Masjid</h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Tempat ibadah dengan arsitektur modern yang menyatukan estetika Islam dengan 
            kenyamanan beribadah
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: Building,
                title: "Arsitektur Modern",
                desc: "Desain kontemporer bernuansa Islami",
              },
              {
                icon: Users,
                title: "Kapasitas Besar",
                desc: "Dapat menampung ratusan jamaah",
              },
              {
                icon: Book,
                title: "Kajian Rutin",
                desc: "Program kajian harian dan mingguan",
              },
              {
                icon: Moon,
                title: "Qiyamul Lail",
                desc: "Program shalat tahajud berjamaah",
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

export default Masjid;
