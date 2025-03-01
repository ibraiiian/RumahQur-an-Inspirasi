import { motion } from "framer-motion";

const TentangKami = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-xl text-gray-200">
              Rumah Quran Inspirasi adalah lembaga pendidikan Al-Quran yang berkomitmen
              untuk menghadirkan pembelajaran Al-Quran yang berkualitas dan inspiratif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Visi</h2>
              <p className="text-gray-700 text-lg">
                Menjadi pusat pembelajaran Al-Quran terkemuka yang menginspirasi
                dan membentuk generasi Qurani yang berakhlak mulia, berwawasan luas,
                dan bermanfaat bagi umat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Misi</h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>• Menyelenggarakan pembelajaran Al-Quran dengan metode yang modern dan efektif</li>
                <li>• Mengembangkan program-program pembelajaran yang komprehensif dan berkualitas</li>
                <li>• Membentuk lingkungan belajar yang inspiratif dan menyenangkan</li>
                <li>• Membangun karakter islami melalui nilai-nilai Al-Quran</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nilai-nilai Kami Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Nilai-nilai Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menjunjung tinggi nilai-nilai yang menjadi landasan dalam setiap
              langkah dan program yang kami kembangkan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Profesional",
                description: "Mengedepankan kualitas dan profesionalisme dalam setiap aspek pembelajaran"
              },
              {
                title: "Inovatif",
                description: "Terus berinovasi dalam metode pembelajaran untuk hasil yang optimal"
              },
              {
                title: "Inspiratif",
                description: "Menciptakan suasana belajar yang menginspirasi dan memotivasi"
              }
            ].map((nilai, index) => (
              <motion.div
                key={nilai.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#1a365d] mb-4">{nilai.title}</h3>
                <p className="text-gray-600">{nilai.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Pengajar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Tim Pengajar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Para pengajar kami adalah individu yang berpengalaman dan berkompeten dalam bidangnya
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ustad Ahmad",
                role: "Kepala Program Tahfidz",
                image: "/Ustad Ahmad.jpg"
              },
              {
                name: "Ustad Muhammad",
                role: "Pengajar Bahasa Arab",
                image: "/ustad Muhammad.jpg"
              },
              {
                name: "Ustadzah Aisyah",
                role: "Pembimbing Tahfidz",
                image: "/Ustadzah Aisyah.jpg"
              },
              {
                name: "Ustadzah Fatimah",
                role: "Koordinator Program Tahsin",
                image: "/Ustadzah Fatimah.jpg"
              }
            ].map((pengajar, index) => (
              <motion.div
                key={pengajar.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="mb-4 relative w-48 h-48 mx-auto">
                  <img
                    src={pengajar.image}
                    alt={pengajar.name}
                    className="rounded-xl w-full h-full object-cover shadow-md"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-2">{pengajar.name}</h3>
                <p className="text-gray-600">{pengajar.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
