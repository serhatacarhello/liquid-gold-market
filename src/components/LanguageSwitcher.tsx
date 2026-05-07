import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = ({ className = '' }: { className?: string }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-1 text-xs font-medium ${className}`}>
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded transition-colors ${lang === 'en' ? 'bg-olive-700 text-white' : 'text-olive-800 hover:text-olive-600'}`}
        aria-label="English"
      >
        EN
      </button>
      <span className="text-olive-400">/</span>
      <button
        onClick={() => setLang('tr')}
        className={`px-2 py-1 rounded transition-colors ${lang === 'tr' ? 'bg-olive-700 text-white' : 'text-olive-800 hover:text-olive-600'}`}
        aria-label="Türkçe"
      >
        TR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
