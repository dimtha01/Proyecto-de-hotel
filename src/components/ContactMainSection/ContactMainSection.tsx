"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export const ContactMainSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend API
    console.log("Formulario enviado:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ponte en Contacto
          </h2>
          <p className="text-lg text-gray-600">
            Estamos aquí para ayudarte. Envíanos un mensaje o encuéntranos en el
            mapa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg">
          {/* Left Column: Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700">
                  Nombre Completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-gray-700">
                  Asunto
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Asunto de tu mensaje"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700">
                  Tu Mensaje
                </Label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Right Column: Location Details & Map */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nuestra Ubicación
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    Dirección
                  </h4>
                  <p className="text-gray-600">
                    Calle Ficticia 123, Ciudad Ejemplo, País Imaginario, CP
                    12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    Teléfono
                  </h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    Correo Electrónico
                  </h4>
                  <p className="text-gray-600">info@bookmehotel.com</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ubicación en el Mapa
            </h3>
            <div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden shadow-md">
              {/* Placeholder for an embedded map (e.g., Google Maps iframe) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2100000000005!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a9b0d7b7%3A0x4a5d4e7b8c9d0e7!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Hotel"
              ></iframe>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 text-xl mb-4">
                Síguenos en Redes Sociales
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <Facebook className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <Instagram className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <Twitter className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
