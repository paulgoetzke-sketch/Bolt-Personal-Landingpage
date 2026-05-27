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

      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

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

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
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

        <div className="grid grid-cols-3 gap-8 pt-16 border-t border-orange-500/10">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-500 text-sm">Websites erstellt</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-gray-500 text-sm">Kundenzufriedenheit</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-500 text-sm">Support verfügbar</div>
          </div>
        </div>
      </div>
    </section>
  );
}
