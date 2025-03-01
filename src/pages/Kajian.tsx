import { motion } from "framer-motion";

const Kajian = () => {
  return (
    <div className="pt-16">
      <section className="bg-[#1a365d] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kajian Islam</h1>
            <p className="text-xl text-gray-300">
              Program pembelajaran Islam komprehensif untuk memahami dan mengamalkan ajaran Islam dalam kehidupan sehari-hari
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">
              Keunggulan Program
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Tafsir Al-Quran Tematik",
                  description: "Memahami ayat-ayat Al-Quran secara mendalam dengan pendekatan tematik yang relevan dengan kehidupan modern"
                },
                {
                  title: "Kajian Hadits Pilihan",
                  description: "Mempelajari hadits-hadits shahih yang berkaitan dengan berbagai aspek kehidupan Muslim"
                },
                {
                  title: "Fiqih Praktis",
                  description: "Pembelajaran hukum Islam yang fokus pada penerapan dalam kehidupan sehari-hari"
                },
                {
                  title: "Pembentukan Karakter",
                  description: "Pengembangan kepribadian Muslim yang berakhlak mulia sesuai dengan Al-Quran dan Sunnah"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold text-[#1a365d] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">
              Materi Program
            </h2>
            <p className="text-gray-600">
              Kurikulum terstruktur yang mencakup aspek-aspek penting dalam pemahaman dan pengamalan Islam
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Dasar-dasar Islam",
                details: [
                  "Pengenalan Rukun Islam",
                  "Pemahaman Rukun Iman",
                  "Konsep Tauhid",
                  "Sejarah Islam"
                ]
              },
              {
                title: "Fiqih Ibadah",
                details: [
                  "Thaharah dan Shalat",
                  "Puasa dan Zakat",
                  "Haji dan Umrah",
                  "Muamalah Dasar"
                ]
              },
              {
                title: "Akhlak & Adab",
                details: [
                  "Adab terhadap Allah",
                  "Adab terhadap Rasul",
                  "Adab Sosial",
                  "Pembentukan Karakter"
                ]
              }
            ].map((level, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-[#1a365d] mb-4 text-center">
                  {level.title}
                </h3>
                <ul className="space-y-3">
                  {level.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kajian;
