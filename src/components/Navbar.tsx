import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-[#1a365d] text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/quran.png" alt="Logo Quran" className="h-10 w-10" />
            <span className="font-semibold text-xl text-white">Rumah Quran Inspirasi</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-300 transition-colors">
              Beranda
            </Link>
            <div className="relative group">
              <span className="text-white hover:text-blue-300 transition-colors cursor-pointer">
                Program
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to="/tahfidz"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a365d] w-full text-left"
                >
                  Program Tahfidz
                </Link>
                <Link
                  to="/tahsin"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a365d] w-full text-left"
                >
                  Program Tahsin
                </Link>
                <Link
                  to="/arabic"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a365d] w-full text-left"
                >
                  Bahasa Arab
                </Link>
                <Link
                  to="/kajian"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a365d] w-full text-left"
                >
                  Kajian Islam
                </Link>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('fasilitas')} 
              className="text-white hover:text-blue-300 transition-colors"
            >
              Fasilitas
            </button>
            <Link to="/tentang-kami" className="text-white hover:text-blue-300 transition-colors">
              Tentang Kami
            </Link>
            <button 
              onClick={() => scrollToSection('kontak')} 
              className="text-white hover:text-blue-300 transition-colors"
            >
              Kontak
            </button>
            <Button className="bg-white text-[#1a365d] hover:bg-blue-100" asChild>
              <Link to="/daftar">Daftar Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden absolute top-full left-0 right-0 bg-[#1a365d] py-4 px-4 shadow-lg`}
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                <img src="/images/quran.png" alt="Logo Quran" className="h-8 w-8" />
                <span className="font-semibold text-lg text-white">Rumah Quran Inspirasi</span>
              </Link>
              <Link
                to="/"
                className="text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <div className="space-y-2">
                <span className="text-white font-medium">Program</span>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/tahfidz"
                    className="block text-white hover:text-blue-300 transition-colors text-left w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Program Tahfidz
                  </Link>
                  <Link
                    to="/tahsin"
                    className="block text-white hover:text-blue-300 transition-colors text-left w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Program Tahsin
                  </Link>
                  <Link
                    to="/arabic"
                    className="block text-white hover:text-blue-300 transition-colors text-left w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Bahasa Arab
                  </Link>
                  <Link
                    to="/kajian"
                    className="block text-white hover:text-blue-300 transition-colors text-left w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Kajian Islam
                  </Link>
                </div>
              </div>
              <button
                onClick={() => scrollToSection('fasilitas')}
                className="text-white hover:text-blue-300 transition-colors text-left"
              >
                Fasilitas
              </button>
              <Link
                to="/tentang-kami"
                className="text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
              <button
                onClick={() => scrollToSection('kontak')}
                className="text-white hover:text-blue-300 transition-colors text-left"
              >
                Kontak
              </button>
              <Button className="bg-white text-[#1a365d] hover:bg-blue-100 w-full" asChild>
                <Link to="/daftar" onClick={() => setIsOpen(false)}>
                  Daftar Sekarang
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
