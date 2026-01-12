import Link from 'next/link';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* Brand Info */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Wina Collection</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Pusat obat-obatan herbal dan thibbun nabawi terlengkap dan termurah di Bogor.
                        Menyediakan Habbatussauda, Madu, Zaitun, Susu Kambing, dan berbagai kebutuhan herbal lainnya.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">Navigasi Cepat</h4>
                    <ul className="space-y-2">
                        <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Beranda</Link></li>
                        <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</Link></li>
                        <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Layanan & Produk</Link></li>
                        <li><Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeri Foto</Link></li>
                        <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Hubungi Kami</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">Info Kontak</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-3 text-gray-400">
                            <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                            <span>Jl. Pekojan No.13, RT.01/RW.01, Empang, Kec. Bogor Sel., Kota Bogor, Jawa Barat 16132</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-400">
                            <Phone className="w-5 h-5 text-primary" />
                            <span>(0251) 8357985</span>
                        </li>
                        {/* Placeholder for Email if later available */}
                        {/* <li className="flex items-center space-x-3 text-gray-400">
              <Mail className="w-5 h-5 text-primary" />
              <span>info@winacollection.com</span>
            </li> */}
                    </ul>

                    <div className="pt-4 flex space-x-4">
                        {/* Social Media Placeholders */}
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Wina Collection. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
