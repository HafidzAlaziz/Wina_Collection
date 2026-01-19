import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Suasana Toko Herbal Wina Collection"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40 dark:from-gray-900/90 dark:via-gray-900/80 dark:to-transparent" />
            </div>

            <div className="container-custom relative z-10 px-4">
                <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-100/90 text-green-800 text-sm font-bold tracking-wide border border-green-200 backdrop-blur-sm shadow-sm">
                        Pusat Herbal & Thibbun Nabawi Terbaik
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
                        Wina <span className="text-primary">Collection</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-800 md:text-gray-700 font-medium max-w-2xl leading-relaxed drop-shadow-sm">
                        Menyediakan produk herbal berkualitas, lengkap, dan terjangkau untuk kesehatan keluarga Anda.
                        Solusi alami untuk hidup yang lebih sehat sesuai sunnah.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
                        <Link
                            href="#location"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:shadow-primary/30 hover:bg-green-700 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                        >
                            <span>Belanja Sekarang</span>
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#about"
                            className="w-full sm:w-auto px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 font-bold rounded-lg shadow-sm border border-gray-200 hover:bg-white hover:border-gray-300 transition-all flex items-center justify-center"
                        >
                            Tentang Kami
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 font-medium z-10">
                <span className="text-xs font-uppercase tracking-widest bg-white/50 px-3 py-1 rounded-full backdrop-blur-md">Scroll Down</span>
            </div>
        </section>
    );
}
