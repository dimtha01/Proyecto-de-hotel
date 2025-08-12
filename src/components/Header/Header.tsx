import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  const navigationLinks = [
    { to: "/rooms-and-suites", label: "Habitaciones" },
    { to: "/gastronomy", label: "Gastronomía" },
    { to: "/services", label: "Servicios" },
    { to: "/experiences", label: "Experiencias" },
    { to: "/about-us", label: "Sobre Nosotros" },
    { to: "/contact", label: "Contacto" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-bold hover:text-white/80 transition-colors"
        >
          Logo
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3">
          <Link
            to="/rooms-and-suites"
            className="text-white hover:text-white/80 transition-colors"
          >
            Habitaciones
          </Link>
          <Link
            to="/gastronomy"
            className="text-white hover:text-white/80 transition-colors"
          >
            Gastronomía
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-white/80 transition-colors"
          >
            Servicios
          </Link>
          <Link
            to="/experiences"
            className="text-white hover:text-white/80 transition-colors"
          >
            Experiencias
          </Link>
          <Link
            to="/about-us"
            className="text-white hover:text-white/80 transition-colors"
          >
            Sobre Nosotros
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-white/80 transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link
            to="/signin"
            className="text-white hover:text-white/80 transition-colors hidden md:block"
          >
            Iniciar Sesión
          </Link>
          <Button
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <Download className="w-4 h-4 mr-2" />
            Get the app
          </Button>
        </div>
      </div>
    </header>
  );
};