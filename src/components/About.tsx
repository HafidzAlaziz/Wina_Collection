import { CheckCircle2 } from 'lucide-react';

export default function About() {
    const benefits = [
        "Produk 100% Asli & Berkualitas",
        "Harga Terjangkau & Grosir",
        "Pilihan Lengkap (Madu, Habbatussauda, Minyak Zaitun)",
        "Lokasi Strategis di Empang, Bogor"
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Mengenal <span className="text-primary">Wina Collection</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-accent rounded-full mb-6"></div>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            Wina Collection telah menjadi kepercayaan masyarakat Bogor sebagai pusat penyedia obat-obatan herbal dan *Thibbun Nabawi*.
                            Kami berdedikasi untuk menyediakan produk kesehatan alami yang terjamin keasliannya dan aman dikonsumsi.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Berlokasi strategis di kawasan Empang, kami melayani pembelian eceran maupun grosir dengan harga yang sangat bersahabat.
                            Visi kami adalah menjadikan pola hidup sehat islami mudah dijangkau oleh semua kalangan.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Decorative Image/Pattern Area */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden group">
                            {/* Placeholder for actual store image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-amber-50 opacity-50 transition-opacity group-hover:opacity-75" />
                            <div className="text-center p-8 z-10">
                                <span className="block text-6xl mb-4">🌿</span>
                                <p className="text-gray-500 font-medium">Foto Toko / Aktivitas</p>
                                <p className="text-sm text-gray-400 mt-2">(Dapat diganti dengan foto asli lokasi)</p>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
