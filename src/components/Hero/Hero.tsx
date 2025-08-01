import { SearchForm } from "../SearchForm/SearchForm";
import { motion } from "framer-motion";

// Componente para el efecto blur text con opción de gradiente
const BlurText = ({ text, delay = 0, className = "", gradient = false }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "8px", marginBottom: "4px" }}
          key={index}
          className={
            gradient && word === "perfecto"
              ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400"
              : ""
          }
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-background.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <BlurText
            text="Descubre tu refugio"
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            delay={0.5}
            gradient={true}
          />
          <BlurText
            text="perfecto"
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            delay={0.8}
            gradient={true}
          />
          <BlurText
            text="Experimenta la hospitalidad excepcional en destinos únicos alrededor del mundo"
            className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed"
            delay={1.1}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <SearchForm />
        </motion.div>
      </div>
    </section>
  );
};
