import { SearchForm } from "../SearchForm/SearchForm";

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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Explore your place
            <br />
            to stay
          </h1>
        </div>

        {/* Search Form */}
        <SearchForm />

        {/* Description Text */}
        <div className="mt-16 max-w-md ml-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white text-xl font-semibold mb-3">
              We provide a variety of the best lodging accommodations for those
              of you who need it.
            </h3>
            <p className="text-white/80 text-sm">
              Don't worry about the quality of the service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
