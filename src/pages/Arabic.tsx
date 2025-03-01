import { motion } from "framer-motion";

const Arabic = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Program Bahasa Arab</h1>
            <p className="text-xl text-gray-300">
              Program pembelajaran bahasa Arab untuk memahami Al-Quran dan literatur Islam dengan lebih baik
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/Program Bahasa Arab.webp"
                alt="Program Bahasa Arab"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#1a365d]">
                Keunggulan Program
              </h2>
              <ul className="space-y-4">
                {[
                  "Pembelajaran grammar dasar",
                  "Kosa kata Al-Quran",
                  "Percakapan praktis",
                  "Latihan membaca teks Arab",
                  "Native speaker",
                  "Metode modern"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
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
              Materi Pembelajaran
            </h2>
            <p className="text-gray-600">
              Kurikulum yang komprehensif untuk memahami bahasa Arab secara mendalam
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Nahwu & Shorof",
                description: "Dasar-dasar grammar bahasa Arab",
                topics: ["Isim", "Fi'il", "I'rob", "Tashrif"]
              },
              {
                title: "Muhadatsah",
                description: "Percakapan bahasa Arab sehari-hari",
                topics: ["Perkenalan", "Aktivitas", "Hobi", "Profesi"]
              },
              {
                title: "Qiroah & Kitabah",
                description: "Membaca dan menulis teks Arab",
                topics: ["Membaca teks", "Menulis Arab", "Imla", "Khat"]
              }
            ].map((course, idx) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-[#1a365d] mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-500 mb-4">{course.description}</p>
                <ul className="space-y-2">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="text-gray-600">• {topic}</li>
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

export default Arabic;
