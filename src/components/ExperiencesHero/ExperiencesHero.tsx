import { useState, useEffect } from "react";
<<<<<<< HEAD
import {
  ChevronDown,
  Star,
  Camera,
  MapPin,
  Heart,
  Compass,
} from "lucide-react";
=======
import { ChevronDown, Star, Camera, MapPin, Heart, Compass } from "lucide-react";
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
import { Link } from "react-router-dom";

export const ExperiencesHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
<<<<<<< HEAD
    "/public/images/experiencias banner.jpg",
    "/public/images/experiencias banner 2.jpg",
    "/public/images/experiencias banner 3.jpg",
  ];

  const stats = [
    {
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
      value: "4.9",
      label: "Rating",
    },
    {
      icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5" />,
      value: "25+",
      label: "Experiencias",
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      value: "10+",
      label: "Destinos",
    },
    {
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />,
      value: "99%",
      label: "Satisfacción",
    },
=======
    "/images/experiencias banner.jpg",
    "/images/experiencias banner 2.jpg",
    "/images/experiencias banner 3.jpg",
  ];

  const stats = [
    { icon: <Star className="w-5 h-5" />, value: "4.9", label: "Rating" },
    { icon: <Camera className="w-5 h-5" />, value: "25+", label: "Experiencias" },
    { icon: <MapPin className="w-5 h-5" />, value: "10+", label: "Destinos" },
    { icon: <Heart className="w-5 h-5" />, value: "99%", label: "Satisfacción" },
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
  ];

  useEffect(() => {
    setIsLoaded(true);
    // Auto-rotate background images every 8 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen h-screen max-h-[1200px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Images with Slideshow */}
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
        {/* Gradient Overlays */}
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 sm:from-black/30 sm:via-black/50 sm:to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F20C0C]/10 to-transparent sm:from-[#F20C0C]/20" />
      </div>

      {/* Floating Elements - Responsive */}
      <div className="absolute top-10 left-4 w-12 h-12 sm:top-20 sm:left-10 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-8 w-20 h-20 sm:bottom-32 sm:right-16 sm:w-32 sm:h-32 bg-[#F20C0C]/20 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/4 right-8 w-10 h-10 sm:top-1/3 sm:right-20 sm:w-16 sm:h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500" />

      {/* Animated Experience Icons - Responsive */}
      <div className="absolute top-16 right-16 sm:top-32 sm:right-32 opacity-20">
=======
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-transparent" />
      </div>

      {/* Floating Elements with Enhanced Animations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500" />

      {/* Animated Experience Icons */}
      <div className="absolute top-32 right-32 opacity-20">
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
        <div className="animate-bounce delay-200">
          <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white/30" />
        </div>
      </div>
<<<<<<< HEAD
      <div className="absolute bottom-24 left-8 sm:bottom-40 sm:left-20 opacity-20">
        <div
          className="animate-bounce delay-700"
          style={{ animationDirection: "reverse" }}
        >
          <Compass className="w-4 h-4 sm:w-6 sm:h-6 text-orange-300/40" />
=======
      <div className="absolute bottom-40 left-20 opacity-20">
        <div className="animate-bounce delay-700" style={{ animationDirection: 'reverse' }}>
          <Compass className="w-6 h-6 text-orange-300/40" />
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
        </div>
      </div>
      <div className="absolute top-20 left-16 sm:top-40 sm:left-32 opacity-20">
        <div className="animate-bounce delay-1000">
          <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-white/25" />
        </div>
      </div>
<<<<<<< HEAD
      <div className="absolute bottom-16 right-20 sm:bottom-28 sm:right-40 opacity-20">
        <div
          className="animate-bounce delay-1500"
          style={{ animationDirection: "reverse" }}
        >
          <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-[#F20C1F]/30" />
        </div>
      </div>

      {/* Floating Particles - Responsive */}
=======
      <div className="absolute bottom-28 right-40 opacity-20">
        <div className="animate-bounce delay-1500" style={{ animationDirection: 'reverse' }}>
          <Heart className="w-6 h-6 text-[#F20C1F]/30" />
        </div>
      </div>

      {/* Floating Particles */}
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
<<<<<<< HEAD
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-ping"
=======
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 800}ms`,
<<<<<<< HEAD
              animationDuration: "3s",
=======
              animationDuration: '3s',
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
            }}
          />
        ))}
      </div>

      {/* Content Container - Positioned in center */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mt-20 sm:mt-24 lg:mt-32">
        {/* Breadcrumb */}
        <div
<<<<<<< HEAD
          className={`mb-6 sm:mb-8 transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 sm:px-7 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-xs sm:text-sm hover:bg-white/20 transition-all duration-300">
            <Link to="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 rotate-[-90deg]" />
=======
          className={`mb-6 transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm hover:bg-white/20 transition-all duration-300">
            <Link to="/">Inicio</Link>
            <ChevronDown className="w-4 h-4 mx-2 rotate-[-90deg]" />
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
            <span className="text-white font-medium">Experiencias</span>
          </div>
        </div>

        {/* Main Title */}
        <h1
<<<<<<< HEAD
          className={`text-3xl xs:text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight transform transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="block">Experiencias</span>
=======
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="block animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Experiencias</span>
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
          <span className="block bg-gradient-to-r from-[#F20C0C] via-[#D10000] to-[#A00000] bg-clip-text text-transparent">
            Inolvidables
          </span>
          <span className="block text-2xl xs:text-3xl sm:text-3xl md:text-2xl lg:text-5xl xl:text-6xl font-light text-white/90 mt-1 sm:mt-2">
            & Únicas
          </span>
        </h1>

        {/* Subtitle */}
        <p
<<<<<<< HEAD
          className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 transform transition-all duration-1000 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
=======
          className={`text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed transform transition-all duration-1000 delay-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
        >
          Sumérgete en{" "}
          <span className="text-[#F20C1F] font-semibold">aventuras</span> y{" "}
          <span className="text-[#F20C1F] font-semibold">momentos únicos</span>{" "}
          durante tu estancia.
          <br className="hidden sm:block" />
          <span className="text-white/70 text-sm sm:text-base md:text-lg block mt-1 sm:mt-2">
            Descubre experiencias diseñadas para crear recuerdos eternos
          </span>
        </p>

        {/* Stats - Improved responsive grid */}
        <div
<<<<<<< HEAD
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-10 px-2 transform transition-all duration-1000 delay-900 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
=======
          className={`flex flex-wrap justify-center gap-6 md:gap-8 mb-10 transform transition-all duration-1000 delay-900 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105 sm:hover:scale-110 hover:rotate-1 cursor-pointer min-w-[90px] sm:min-w-[110px]"
            >
<<<<<<< HEAD
              <div className="text-[#F20C1F] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm sm:text-lg transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs group-hover:text-white/90 transition-colors duration-300 whitespace-nowrap">
                  {stat.label}
                </div>
=======
              <div className="text-[#000] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg transition-colors duration-300">{stat.value}</div>
                <div className="text-white/70 text-xs group-hover:text-white/90 transition-colors duration-300">{stat.label}</div>
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* CTA Buttons - Improved responsive layout */}
=======
        {/* CTA Buttons with Enhanced Animations */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1100 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-[#F20C0C] to-[#8A0303] hover:from-[#D10000] hover:to-[#5A0000] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1">
            <span className="flex items-center gap-2">
              Descubrir Experiencias
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 group-hover:rotate-180 transition-transform duration-300" />
            </span>
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:rotate-1 hover:-translate-y-1">
            Ver Paquetes
          </button>
        </div>
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
      </div>

      {/* Image Indicators - Responsive positioning */}
      <div className="absolute bottom-8 right-4 sm:bottom-20 sm:right-8 flex flex-col gap-1 sm:gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
<<<<<<< HEAD
            className={`w-1.5 h-6 sm:w-2 sm:h-8 rounded-full transition-all duration-300 hover:scale-110 hover:w-2 sm:hover:w-3 ${
              index === currentImageIndex
                ? "bg-[#F20C1F] shadow-lg animate-pulse"
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
=======
            className={`w-2 h-8 rounded-full transition-all duration-300 hover:scale-110 hover:w-3 ${index === currentImageIndex ? "bg-orange-400 shadow-lg animate-pulse" : "bg-white/30 hover:bg-white/50"}`}
          />
        ))}
      </div>
>>>>>>> 75414dd8da7ff1ef94d0d6d5efd2a331e882fa10
    </section>
  );
};
