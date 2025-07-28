export const AboutUsHero = () => {
  return (
    <section className="relative h-[40vh] flex items-center justify-center text-center">
      {/* Background Image - Using a placeholder for now, can be updated */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Sobre Nosotros
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Conoce la historia y los valores que nos hacen únicos.
        </p>
      </div>
    </section>
  );
};
