import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-[#1a365d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Rumah Quran Inspirasi</h3>
            <p className="text-gray-100 mb-4">
              Membentuk generasi Qurani yang berakhlak mulia dan bermanfaat bagi umat
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-100 hover:text-blue-300 transition-colors">Beranda</Link>
              </li>
              <li>
                <Link to="/tentang" className="text-gray-100 hover:text-blue-300 transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/program" className="text-gray-100 hover:text-blue-300 transition-colors">Program</Link>
              </li>
              <li>
                <Link to="/pendaftaran" className="text-gray-100 hover:text-blue-300 transition-colors">Pendaftaran</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Program</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tahfidz" className="text-gray-100 hover:text-blue-300 transition-colors">Program Tahfidz</Link>
              </li>
              <li>
                <Link to="/tahsin" className="text-gray-100 hover:text-blue-300 transition-colors">Program Tahsin</Link>
              </li>
              <li>
                <Link to="/arabic" className="text-gray-100 hover:text-blue-300 transition-colors">Bahasa Arab</Link>
              </li>
              <li>
                <Link to="/kajian" className="text-gray-100 hover:text-blue-300 transition-colors">Kajian Islam</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-100">
                <MapPin size={20} className="text-blue-300" />
                <span>Jl. Pemuda No. 23, Jakarta Timur, DKI Jakarta</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-300" />
                <a href="tel:+6281234567890" className="text-gray-100 hover:text-blue-300 transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-300" />
                <a href="mailto:info@rumahquraninspirasi.com" className="text-gray-100 hover:text-blue-300 transition-colors">
                  info@rumahquraninspirasi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            {new Date().getFullYear()} Rumah Quran Inspirasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
