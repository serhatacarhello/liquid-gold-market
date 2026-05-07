
import { Instagram, Facebook, Twitter, MapPin, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 bg-olive-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0 max-w-sm">
            <a href="#home" className="text-2xl font-serif font-medium">Olivanda Luxe</a>
            <p className="mt-2 text-olive-200">{t.footer.tagline}</p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-olive-200 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-olive-200 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-olive-200 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h4 className="font-medium mb-3 text-olive-100">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-olive-200 hover:text-white transition-colors">{t.nav.home}</a></li>
                <li><a href="#product" className="text-olive-200 hover:text-white transition-colors">{t.nav.product}</a></li>
                <li><a href="#benefits" className="text-olive-200 hover:text-white transition-colors">{t.nav.benefits}</a></li>
                <li><a href="#contact" className="text-olive-200 hover:text-white transition-colors">{t.nav.contact}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-olive-100">{t.footer.heritage}</h4>
              <ul className="space-y-2">
                {t.footer.heritageLinks.map((link) => (
                  <li key={link}><a href="#" className="text-olive-200 hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-olive-100">{t.footer.contact}</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-olive-300 mt-0.5 shrink-0" />
                  <span className="text-olive-200">{t.footer.address}<br />{t.footer.region}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-olive-300 shrink-0" />
                  <a href="mailto:info@olivandaluxe.com" className="text-olive-200 hover:text-white transition-colors">info@olivandaluxe.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-olive-700/50">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <p className="text-olive-300 text-sm">&copy; {currentYear} Olivanda Luxe. {t.footer.rights}</p>
            <div className="flex flex-col md:flex-row gap-4 items-center text-center md:text-right">
              <a href="#" className="text-olive-300 text-sm hover:text-white transition-colors">{t.footer.privacy}</a>
              <span className="hidden md:inline text-olive-500">|</span>
              <a href="#" className="text-olive-300 text-sm hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>

          <div className="mt-6 bg-olive-700/30 rounded-lg p-4 text-sm text-olive-200">
            <div className="flex items-start gap-2">
              <ExternalLink size={16} className="mt-0.5 shrink-0" />
              <p>{t.footer.heritageNote}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
