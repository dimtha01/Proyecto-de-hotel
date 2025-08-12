import { useEffect, useState } from "react";
import { ChevronDown, Star, Award, Users, Bed } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const RoomsHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/images/hero-background.png",
    "/public/images/habitaones hero 2.jpg",
    "/public/images/habitaones hero 3.jpg",
  ];

  const stats = [
    {
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
      value: "4.9",
      label: "Rating",
    },
    {
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
      value: "50+",
      label: "Habitaciones",
    },
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      value: "10K+",
      label: "Huéspedes",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen h-screen max-h-[1200px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 sm:from-black/30 sm:via-black/50 sm:to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-transparent sm:from-orange-900/20" />
      </div>

      {/* Floating Elements - Responsive */}
      <div className="absolute top-10 left-4 w-12 h-12 sm:top-20 sm:left-10 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-8 w-20 h-20 sm:bottom-32 sm:right-16 sm:w-32 sm:h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/4 right-8 w-10 h-10 sm:top-1/3 sm:right-20 sm:w-16 sm:h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500" />

      {/* Animated Icons - Responsive */}
      <div className="absolute top-16 right-16 sm:top-32 sm:right-32 opacity-20">
        <div className="animate-bounce delay-200">
          <Bed className="w-6 h-6 sm:w-8 sm:h-8 text-white/30" />
        </div>
      </div>
      <div className="absolute bottom-24 left-8 sm:bottom-40 sm:left-20 opacity-20">
        <div
          className="animate-bounce delay-700"
          style={{ animationDirection: "reverse" }}
        >
          <Star className="w-4 h-4 sm:w-6 sm:h-6 text-orange-300/40" />
        </div>
      </div>

      {/* Particles - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-ping"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 800}ms`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Content - Posicionado más abajo para dar espacio al header */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mt-20 sm:mt-24 lg:mt-32">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 sm:px-7 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-xs sm:text-sm hover:bg-white/20 transition-all duration-300">
            <Link to="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 rotate-[-90deg]" />
            <span className="text-white font-medium">
              Habitaciones & Suites
            </span>
          </div>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl xs:text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          <span className="block">Nuestras</span>
          <span className="block bg-gradient-to-r from-[#F20C0C] via-[#D10000] to-[#A00000] bg-clip-text text-transparent">
            Habitaciones
          </span>
          <span className="block text-2xl xs:text-3xl sm:text-3xl md:text-2xl lg:text-5xl xl:text-6xl font-light text-white/90 mt-1 sm:mt-2">
            & Suites
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2"
        >
          Descubre el{" "}
          <span className="text-[#F20C1F] font-semibold">confort</span> y la{" "}
          <span className="text-[#F20C1F] font-semibold">elegancia</span> en
          cada rincón de tu estancia.
          <br className="hidden sm:block" />
          <span className="text-white/70 text-sm sm:text-base md:text-lg block mt-1 sm:mt-2">
            Experiencias únicas diseñadas para superar tus expectativas
          </span>
        </motion.p>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-10 px-2"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105 sm:hover:scale-110 hover:rotate-1 cursor-pointer min-w-[90px] sm:min-w-[110px]"
            >
              <div className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm sm:text-lg">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs group-hover:text-white/90 whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

       
      </div>

      {/* Image Indicators - Responsive */}
      <div className="absolute bottom-8 right-4 sm:bottom-20 sm:right-8 flex flex-col gap-1 sm:gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-1.5 h-6 sm:w-2 sm:h-8 rounded-full transition-all duration-300 hover:scale-110 hover:w-2 sm:hover:w-3 ${
              index === currentImageIndex
                ? "bg-orange-400 shadow-lg animate-pulse"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Solo en pantallas grandes */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </div>
    </section>
  );
};
