
export default function Gallery() {
    // Using placeholders for now. Replace src with actual images if provided.
    const images = [
        { src: '/api/placeholder/400/300', alt: 'Rak Produk Herbal' },
        { src: '/api/placeholder/400/400', alt: 'Suasana Toko' },
        { src: '/api/placeholder/400/300', alt: 'Koleksi Madu' },
        { src: '/api/placeholder/400/400', alt: 'Produk Habbatussauda' },
        { src: '/api/placeholder/400/300', alt: 'Minyak Wangi & Zaitun' },
        { src: '/api/placeholder/400/400', alt: 'Pelayanan Pelanggan' },
    ];

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Galeri Toko</h2>
                        <p className="text-gray-600 mt-4">
                            Intip suasana toko kami dan berbagai kelengkapan produk yang tersedia.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <button className="text-primary font-semibold hover:text-green-800 transition-colors">
                            Lihat Semua Foto &rarr;
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((img, idx) => (
                        <div key={idx} className={`relative rounded-xl overflow-hidden group ${idx % 2 === 0 ? 'aspect-[4/3]' : 'aspect-square'}`}>
                            {/* 
                    Note: Using colored divs as placeholders since real images aren't available. 
                    In a real implementation, <Image /> from 'next/image' would be used here.
                */}
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                                <span className="text-xs md:text-sm font-medium">{img.alt}</span>
                            </div>
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-semibold tracking-wide">Lihat</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
