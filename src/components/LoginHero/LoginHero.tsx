export const LoginHero = () => {
  return (
    <section className="relative h-[30vh] flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Iniciar Sesión</h1>
        <p className="text-lg text-white/80">Accede a tu cuenta para gestionar tus reservas.</p>
      </div>
    </section>
  )
}
