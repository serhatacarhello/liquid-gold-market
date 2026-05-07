
import { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const [hoverWhatsapp, setHoverWhatsapp] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);
  const { t } = useLanguage();

  const emailAddress = 'contact@oliviaoil.com';
  const whatsappNumber = '+1234567890';

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'm interested in ordering your natural olive oil.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const openEmail = () => {
    const subject = encodeURIComponent('Olive Oil Order Inquiry');
    const body = encodeURIComponent("Hello,\n\nI'm interested in ordering your natural olive oil.\n\nBest regards,");
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-spacing bg-olive-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-olive-600 bg-white px-3 py-1 rounded-full">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-6">{t.contact.title}</h2>
          <p className="text-olive-800/80 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl cursor-pointer subtle-border"
            onMouseEnter={() => setHoverWhatsapp(true)}
            onMouseLeave={() => setHoverWhatsapp(false)}
            onClick={openWhatsApp}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 transform transition-transform duration-700 ${hoverWhatsapp ? 'scale-100' : 'scale-105'}`}></div>
            <div className={`absolute inset-0 bg-white transition-opacity duration-500 ${hoverWhatsapp ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 ${hoverWhatsapp ? 'bg-white/20 text-white' : 'bg-green-50 text-green-600'}`}>
                <MessageSquare size={28} />
              </div>
              <h3 className={`text-xl font-medium mb-3 transition-colors duration-500 ${hoverWhatsapp ? 'text-white' : 'text-olive-800'}`}>{t.contact.whatsapp}</h3>
              <p className={`transition-colors duration-500 ${hoverWhatsapp ? 'text-white/90' : 'text-olive-800/80'}`}>{t.contact.whatsappDesc}</p>
              <div className={`mt-6 px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 ${hoverWhatsapp ? 'bg-white text-green-600 shadow-lg shadow-green-600/30' : 'bg-green-50 text-green-700'}`}>
                {t.contact.whatsappCta}
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl cursor-pointer subtle-border"
            onMouseEnter={() => setHoverEmail(true)}
            onMouseLeave={() => setHoverEmail(false)}
            onClick={openEmail}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-olive-600 to-olive-700 transform transition-transform duration-700 ${hoverEmail ? 'scale-100' : 'scale-105'}`}></div>
            <div className={`absolute inset-0 bg-white transition-opacity duration-500 ${hoverEmail ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 ${hoverEmail ? 'bg-white/20 text-white' : 'bg-olive-50 text-olive-600'}`}>
                <Mail size={28} />
              </div>
              <h3 className={`text-xl font-medium mb-3 transition-colors duration-500 ${hoverEmail ? 'text-white' : 'text-olive-800'}`}>{t.contact.email}</h3>
              <p className={`transition-colors duration-500 ${hoverEmail ? 'text-white/90' : 'text-olive-800/80'}`}>{t.contact.emailDesc}</p>
              <div className={`mt-6 px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 ${hoverEmail ? 'bg-white text-olive-700 shadow-lg shadow-olive-700/30' : 'bg-olive-50 text-olive-700'}`}>
                {t.contact.emailCta}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
