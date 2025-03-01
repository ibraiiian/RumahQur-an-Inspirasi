import { motion } from "framer-motion";

const Tahfidz = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Program Tahfidz</h1>
            <p className="text-xl text-gray-300">
              Program menghafal Al-Quran dengan metode yang sistematis dan bimbingan ustadz/ustadzah yang berpengalaman
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
              className="h-[400px]"
            >
              <img
                src="/Program.Quran.jpg"
                alt="Program Tahfidz"
                className="rounded-2xl shadow-lg w-full h-full object-cover object-center"
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
                  "Bimbingan hafalan one-on-one",
                  "Target hafalan disesuaikan kemampuan",
                  "Muroja'ah terjadwal",
                  "Evaluasi berkala",
                  "Sertifikat tahfidz",
                  "Sanad hafalan"
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
              Jadwal & Kurikulum
            </h2>
            <p className="text-gray-600">
              Program tahfidz kami dirancang untuk membantu Anda menghafal Al-Quran
              dengan metode yang efektif dan menyenangkan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kelas Pagi",
                time: "08:00 - 11:00",
                details: ["Setoran hafalan baru", "Muroja'ah", "Tahsin"]
              },
              {
                title: "Kelas Sore",
                time: "16:00 - 18:00",
                details: ["Setoran hafalan baru", "Muroja'ah", "Tahsin"]
              },
              {
                title: "Kelas Malam",
                time: "19:30 - 21:00",
                details: ["Muroja'ah", "Penguatan hafalan", "Motivasi"]
              }
            ].map((schedule, idx) => (
              <motion.div
                key={schedule.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-[#1a365d] mb-2">
                  {schedule.title}
                </h3>
                <p className="text-gray-500 mb-4">{schedule.time}</p>
                <ul className="space-y-2">
                  {schedule.details.map((detail, index) => (
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

export default Tahfidz;
