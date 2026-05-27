import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-orange-900/20 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-white">Grid</span>
          <span className="text-orange-500">lane</span>
        </div>

        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300 font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300 font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300 font-medium"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium"
          >
            Kontakt
          </button>
        </div>

        <button
          className="md:hidden text-orange-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-orange-900/20 p-4 space-y-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="block w-full text-left text-gray-400 hover:text-orange-500 py-2 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left text-gray-400 hover:text-orange-500 py-2 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="block w-full text-left text-gray-400 hover:text-orange-500 py-2 transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Kontakt
          </button>
        </div>
      )}
    </nav>
  );
}
