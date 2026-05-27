import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 gradient-orange opacity-40" />

      <div className="blob blob-1 top-20 -left-20 w-96 h-96 bg-gradient-to-br from-orange-500 to-orange-600" />
      <div className="blob blob-2 top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-orange-400 to-orange-500" />
      <div className="blob blob-3 -bottom-10 left-1/4 w-72 h-72 bg-gradient-to-br from-orange-600 to-orange-700" />
      <div className="blob blob-4 bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-orange-500 to-orange-600" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
          <Sparkles size={16} className="text-orange-500" />
          <span className="text-orange-400 text-sm font-medium">AI-powered Web Design</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Web Design
          <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            trifft KI
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Ich kreiere atemberaubende Websites mit moderner KI-Technologie. Deine Vision, perfekt umgesetzt.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="group px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3"
          >
            Meine Projekte
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-orange-500/50 text-orange-400 rounded-lg font-semibold hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-300"
          >
            Jetzt Kontakt aufnehmen
          </button>
        </div>
      </div>
    </section>
  );
}
