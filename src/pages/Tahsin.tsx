import { motion } from "framer-motion";

const Tahsin = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Program Tahsin</h1>
            <p className="text-xl text-gray-300">
              Program perbaikan bacaan Al-Quran untuk memastikan ketepatan dalam membaca sesuai kaidah tajwid
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
                src="/images/tahsin.jpg"
                alt="Program Tahsin"
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
                  "Pembelajaran tajwid praktis",
                  "Latihan makhorijul huruf",
                  "Praktik membaca intensif",
                  "Evaluasi berkala",
                  "Sertifikasi tahsin",
                  "Metode mudah dan sistematis"
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
              Level Program
            </h2>
            <p className="text-gray-600">
              Program tahsin kami terbagi dalam beberapa level untuk memastikan
              perkembangan yang optimal sesuai kemampuan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Level Dasar",
                duration: "3 Bulan",
                details: ["Pengenalan huruf hijaiyah", "Makhorijul huruf", "Harokat dasar"]
              },
              {
                title: "Level Menengah",
                duration: "3 Bulan",
                details: ["Hukum tajwid dasar", "Gharib", "Praktik membaca"]
              },
              {
                title: "Level Lanjutan",
                duration: "3 Bulan",
                details: ["Tajwid mendalam", "Qiroat", "Tahsin tilawah"]
              }
            ].map((level, idx) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-[#1a365d] mb-2">
                  {level.title}
                </h3>
                <p className="text-gray-500 mb-4">Durasi: {level.duration}</p>
                <ul className="space-y-2">
                  {level.details.map((detail, index) => (
                    <li key={index} className="text-gray-600">• {detail}</li>
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

export default Tahsin;
