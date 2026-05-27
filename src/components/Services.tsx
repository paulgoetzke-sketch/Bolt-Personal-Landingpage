import { Zap, Globe, Palette, Rocket } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Landing Pages',
    description: 'Hochkonvertierende Landing Pages, die Besucher in Kunden verwandeln. Optimiert für jede Nische.',
  },
  {
    icon: Palette,
    title: 'Business Websites',
    description: 'Professionelle Unternehmenswebsites, die deine Marke perfekt präsentieren und authentisch wirken.',
  },
  {
    icon: Zap,
    title: 'AI-powered Design',
    description: 'Intelligente Design-Prozesse mit künstlicher Intelligenz für schnellere und bessere Ergebnisse.',
  },
  {
    icon: Rocket,
    title: 'Portfolio-Seiten',
    description: 'Beeindruckende Portfolio-Websites, um deine besten Arbeiten optimal zu präsentieren.',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 gradient-orange opacity-30" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meine <span className="text-orange-500">Leistungen</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Von modernen Landing Pages bis zu umfassenden Businesslösungen – ich biete alles aus einer Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-orange-500/20 rounded-2xl hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                    <Icon className="text-orange-500" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>

                  <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:w-full transition-all duration-300" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent rounded-2xl transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
