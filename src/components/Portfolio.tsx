import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  link?: string;
}

const portfolioItems: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Startup',
    category: 'Landing Page',
    tags: ['React', 'Conversion', 'UI/UX'],
  },
  {
    id: 2,
    title: 'Tech Agency Website',
    category: 'Business Website',
    tags: ['Full Stack', 'Design', 'Animation'],
  },
  {
    id: 3,
    title: 'Digital Portfolio',
    category: 'Portfolio Site',
    tags: ['Showcase', 'Modern', 'Interactive'],
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'Application',
    tags: ['UI/UX', 'Complex', 'Responsive'],
  },
  {
    id: 5,
    title: 'Creative Studio',
    category: 'Portfolio Site',
    tags: ['Visual', 'Modern', 'Engaging'],
  },
  {
    id: 6,
    title: 'Consulting Firm',
    category: 'Corporate Website',
    tags: ['Professional', 'Trust', 'SEO'],
  },
];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 gradient-orange opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mein <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Eine Auswahl meiner besten Arbeiten und erfolgreichsten Projekte für verschiedene Industrien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-orange-500/20 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 cursor-pointer h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40" />

              <div className="relative z-20 h-full flex flex-col justify-end p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded border border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={`h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300 ${
                    hoveredId === project.id ? 'w-full' : 'w-12'
                  }`}
                />
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-30 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                >
                  <ExternalLink size={18} className="text-white" />
                </a>
              ) : (
                <div className="absolute top-4 right-4 z-30 w-10 h-10 bg-orange-500/30 rounded-lg flex items-center justify-center border border-orange-500/50">
                  <ExternalLink size={18} className="text-orange-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interessiert an einem ähnlichen Projekt? Lass mich deine Vision in Wirklichkeit verwandeln.
          </p>
          <button className="group px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 inline-flex items-center gap-2">
            Projekt anfordern
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
