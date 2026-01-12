import { Pill, Droplets, Leaf, Milk } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: "Aneka Madu Murni",
            description: "Madu hutan, madu hitam pahit, madu yaman, dan berbagai jenis madu murni berkualitas lainnya.",
            icon: <Droplets className="w-10 h-10 text-amber-500" />,
            color: "bg-amber-50"
        },
        {
            title: "Habbatussauda",
            description: "Habbatussauda dalam bentuk cair (minyak) maupun kapsul serbuk untuk menjaga daya tahan tubuh.",
            icon: <Pill className="w-10 h-10 text-gray-700" />,
            color: "bg-gray-100"
        },
        {
            title: "Minyak Zaitun (Olive Oil)",
            description: "Extra virgin olive oil untuk kesehatan jantung, kulit, dan masakan sehat keluarga.",
            icon: <Leaf className="w-10 h-10 text-green-600" />,
            color: "bg-green-50"
        },
        {
            title: "Susu Kambing Etawa",
            description: "Susu kambing etawa bubuk dengan berbagai varian rasa yang nikmat dan menyehatkan.",
            icon: <Milk className="w-10 h-10 text-blue-500" />,
            color: "bg-blue-50"
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase">Produk & Layanan</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Koleksi Herbal Terlengkap</h2>
                    <p className="text-gray-600 mt-4">
                        Kami menyediakan berbagai macam produk herbal pilihan yang terjamin keaslian dan khasiatnya.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
                        >
                            <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
