export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-orange-500/10 bg-black py-12 px-6">
      <div className="absolute inset-0 gradient-orange opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-white">Paul</span>
              <span className="text-orange-500 ml-2">Götzke</span>
            </div>
            <p className="text-gray-500">
              AI-powered Web Designer. Kreiere atemberaubende Websites mit moderner Technologie.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="#hero" className="hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-orange-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a
                  href="mailto:hello@paulgotzke.de"
                  className="hover:text-orange-500 transition-colors break-all"
                >
                  hello@paulgotzke.de
                </a>
              </li>
              <li className="text-gray-600">Verfügbar für Projekte</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-500/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} Paul Götzke. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
