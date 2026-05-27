import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('contact_messages').insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (insertError) throw insertError;

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Fehler beim Senden der Nachricht. Bitte versuche es später erneut.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 gradient-orange opacity-25" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lass uns <span className="text-orange-500">zusammenarbeiten</span>
          </h2>
          <p className="text-xl text-gray-400">
            Habe eine Idee oder ein Projekt? Kontaktiere mich jetzt und wir schaffen etwas Großartiges zusammen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Kontaktmöglichkeiten</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@gridlane.studio"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 rounded-lg hover:border-orange-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Mail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">E-Mail</div>
                    <div className="text-white font-semibold">hello@gridlane.studio</div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Soziale Netzwerke</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 transition-all"
                >
                  <span className="text-orange-400 font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 transition-all"
                >
                  <span className="text-orange-400 font-bold">X</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 transition-all"
                >
                  <span className="text-orange-400 font-bold">in</span>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                Vielen Dank! Ich werde mich schnellstmöglich bei dir melden.
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                {error}
              </div>
            )}

            <input
              type="text"
              name="name"
              placeholder="Dein Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 bg-gray-900/50 border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
            />

            <input
              type="email"
              name="email"
              placeholder="Deine E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 bg-gray-900/50 border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
            />

            <textarea
              name="message"
              placeholder="Deine Nachricht..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-6 py-3 bg-gray-900/50 border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {loading ? 'Wird gesendet...' : 'Nachricht senden'}
              {!loading && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
