'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
             <div className="bg-primary p-2 rounded-lg text-white">
                <MapPin size={24} />
             </div>
             <div className="flex flex-col">
                <span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-primary'} group-hover:text-primary transition-colors`}>
                    Wina Collection
                </span>
                <span className={`text-xs ${scrolled ? 'text-gray-600' : 'text-gray-600'} font-medium`}>
                    Pusat Obat Herbal Bogor
                </span>
             </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                scrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#location"
            className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
          >
            Kunjungi Kami
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 font-medium text-lg hover:text-primary pl-2 border-l-4 border-transparent hover:border-primary transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
            <Link
            href="#location"
             onClick={() => setIsOpen(false)}
            className="w-full text-center px-5 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
          >
            Kunjungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
}
