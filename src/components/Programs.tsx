import { motion } from "framer-motion";

const programs = [
  {
    id: "tahfidz",
    title: "Program Tahfidz",
    description: "Program menghafal Al-Quran dengan metode yang sistematis dan bimbingan ustadz/ustadzah yang berpengalaman",
    features: [
      "Bimbingan hafalan one-on-one",
      "Target hafalan disesuaikan kemampuan",
      "Muroja'ah terjadwal",
      "Evaluasi berkala"
    ],
    image: "/images/tahfidz.jpg"
  },
  {
    id: "tahsin",
    title: "Program Tahsin",
    description: "Program perbaikan bacaan Al-Quran untuk memastikan ketepatan dalam membaca sesuai kaidah tajwid",
    features: [
      "Pembelajaran tajwid praktis",
      "Latihan makhorijul huruf",
      "Praktik membaca intensif",
      "Sertifikasi tahsin"
    ],
    image: "/images/tahsin.jpg"
  },
  {
    id: "arabic",
    title: "Program Bahasa Arab",
    description: "Program pembelajaran bahasa Arab untuk memahami Al-Quran dan literatur Islam dengan lebih baik",
    features: [
      "Pembelajaran grammar dasar",
      "Kosa kata Al-Quran",
      "Percakapan praktis",
      "Latihan membaca teks Arab"
    ],
    image: "/images/arabic.jpg"
  },
  {
    id: "kajian",
    title: "Kajian Islam",
    description: "Program pembelajaran Islam komprehensif dengan fokus pada pemahaman Al-Quran dan Hadits dalam kehidupan sehari-hari",
    features: [
      "Tafsir Al-Quran tematik",
      "Kajian Hadits pilihan",
      "Fiqih praktis sehari-hari",
      "Pembentukan karakter Islami"
    ],
    image: "/images/kajian.jpg"
  }
];

const Programs = () => {
  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Unggulan</h2>
          <p className="text-gray-600">
            Kami menyediakan berbagai program pembelajaran Al-Quran dan bahasa Arab
            yang dirancang untuk memenuhi kebutuhan setiap peserta
          </p>
        </motion.div>

        <div className="space-y-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              id={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a365d]">
                  {program.title}
                </h3>
                <p className="text-gray-600">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
