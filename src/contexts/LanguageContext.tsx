import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Lang, TranslationKeys } from '@/lib/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SEO: Record<Lang, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: 'Olivanda Luxe | Premium Natural Olive Oil from Ancient Lycia',
    description: 'Cold-pressed extra virgin olive oil from family-owned groves in ancient Lycia. Pure, natural, sustainably harvested. Order direct via WhatsApp or email.',
    ogLocale: 'en_US',
  },
  tr: {
    title: 'Olivanda Luxe | Antik Likya’dan Premium Doğal Zeytinyağı',
    description: 'Antik Likya topraklarındaki aile zeytinliklerinden soğuk sıkım sızma zeytinyağı. Saf, doğal ve sürdürülebilir. WhatsApp veya e-posta ile sipariş verin.',
    ogLocale: 'tr_TR',
  },
};

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.querySelector(selector) as HTMLMetaElement | null;
  if (el) el.setAttribute(attr, value);
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    const params = new URLSearchParams(window.location.search);
    const q = params.get('lang');
    if (q === 'tr' || q === 'en') return q;
    const stored = localStorage.getItem('lang');
    if (stored === 'tr' || stored === 'en') return stored as Lang;
    return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
  });

  useEffect(() => {
    const seo = SEO[lang];
    document.documentElement.lang = lang;
    document.title = seo.title;
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:locale"]', 'content', seo.ogLocale);
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
