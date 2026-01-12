import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Location() {
    return (
        <section id="location" className="py-20 bg-green-50">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                    {/* Contact & Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kunjungi Toko Kami</h2>
                            <p className="text-gray-600">
                                Kami berlokasi strategis di pusat kota Bogor, mudah dijangkau dari berbagai arah.
                                Silakan datang untuk berkonsultasi langsung mengenai kebutuhan herbal Anda.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex items-start space-x-4">
                                <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Alamat</h3>
                                    <p className="text-gray-600 mt-1">
                                        Jl. Pekojan No.13, RT.01/RW.01, Empang, <br />
                                        Kec. Bogor Sel., Kota Bogor, Jawa Barat 16132
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Telepon</h3>
                                    <p className="text-gray-600 mt-1">(0251) 8357985</p>
                                    <a href="tel:02518357985" className="text-sm text-primary hover:underline mt-1 block">
                                        Hubungi Sekarang
                                    </a>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start space-x-4">
                                <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Jam Operasional</h3>
                                    <div className="text-gray-600 mt-1 space-y-1">
                                        <p className="flex justify-between w-48">
                                            <span>Senin - Sabtu</span>
                                            <span>08:00 - 17:00</span>
                                        </p>
                                        <p className="flex justify-between w-48 text-red-500">
                                            <span>Minggu</span>
                                            <span>Tutup</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="https://maps.app.goo.gl/sprXjd1RiUdvXRU36"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors text-center"
                            >
                                Buka di Google Maps
                            </a>
                            <a
                                href="#"
                                className="px-6 py-3 bg-white text-gray-700 border border-gray-300 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                            >
                                <MessageCircle size={20} className="text-green-600" />
                                <span>Chat WhatsApp (Coming Soon)</span>
                            </a>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="h-[400px] lg:h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border-4 border-white relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.3340576359747!2d106.7936688!3d-6.6068289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5c64c5b36b9%3A0x6d9f8e40409a8f6e!2sWina+Collection!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi Wina Collection"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}
