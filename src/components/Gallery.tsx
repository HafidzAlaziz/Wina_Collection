import Image from 'next/image';

export default function Gallery() {
    // Using placeholders for now. Replace src with actual images if provided.
    // Using real images
    const images = [
        { src: '/images/herbal-shelf.png', alt: 'Rak Produk Herbal' },
        { src: '/images/store-interior.png', alt: 'Suasana Toko' },
        { src: '/images/honey-collection.png', alt: 'Koleksi Madu' },
        { src: '/images/hero-bg.png', alt: 'Interior Toko' },
        { src: '/images/herbal-shelf.png', alt: 'Produk Habbatussauda' },
        { src: '/images/honey-collection.png', alt: 'Minyak Wangi & Zaitun' },
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
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((img, idx) => (
                        <div key={idx} className={`relative rounded-xl overflow-hidden group ${idx % 2 === 0 ? 'aspect-[4/3]' : 'aspect-square'}`}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-semibold tracking-wide drop-shadow-md">{img.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
