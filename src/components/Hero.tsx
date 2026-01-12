import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-gray-900">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary blur-3xl" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-accent blur-3xl scroll-animate" />
                <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-green-600 blur-3xl" />
            </div>

            <div className="container-custom relative z-10 text-center px-4">
                <div className="space-y-6 animate-in fade-in zoom-in duration-700">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide border border-green-200">
                        Pusat Herbal & Thibbun Nabawi Terbaik
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
                        Wina <span className="text-primary">Collection</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Menyediakan produk herbal berkualitas, lengkap, dan terjangkau untuk kesehatan keluarga Anda.
                        Solusi alami untuk hidup yang lebih sehat sesuai sunnah.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link
                            href="#location"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:shadow-primary/30 hover:bg-green-700 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                        >
                            <span>Belanja Sekarang</span>
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#about"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-bold rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center"
                        >
                            Tentang Kami
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
                <span className="text-xs font-uppercase tracking-widest">Scroll</span>
            </div>
        </section>
    );
}
