
import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const image = imageRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;

    if (image && heading && subheading) {
      setTimeout(() => { image.style.opacity = '1'; image.style.transform = 'translateY(0)'; }, 100);
      setTimeout(() => { heading.style.opacity = '1'; heading.style.transform = 'translateY(0)'; }, 300);
      setTimeout(() => { subheading.style.opacity = '1'; subheading.style.transform = 'translateY(0)'; }, 500);
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-olive-50 to-cream opacity-70" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cream to-transparent -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        <div className="flex flex-col lg:w-1/2 space-y-6">
          <span className="text-sm font-medium tracking-wider uppercase text-olive-600 bg-olive-50 px-3 py-1 rounded-full w-fit">
            {t.hero.badge}
          </span>

          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight opacity-0 transform translate-y-4 transition-all duration-700"
          >
            {t.hero.title1} <span className="text-gradient">{t.hero.titleAccent}</span> {t.hero.title2}
          </h1>

          <p
            ref={subheadingRef}
            className="text-lg text-olive-800/80 max-w-xl opacity-0 transform translate-y-4 transition-all duration-700 delay-100"
          >
            {t.hero.subtitle}
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a href="#product" className="btn-hover text-white px-6 py-3 rounded-full font-medium bg-olive-700 hover:bg-olive-800 shadow-lg shadow-olive-700/20 transition-all duration-300">
              {t.hero.explore}
            </a>
            <a href="#benefits" className="text-olive-800 font-medium hover:text-olive-600 transition-colors">
              {t.hero.learnMore}
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-olive-200 to-olive-400 opacity-50 blur-2xl animate-rotate-slow"></div>
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
              alt="Premium olive oil"
              className="rounded-2xl shadow-2xl max-w-full w-full max-h-[500px] object-cover opacity-0 transform translate-y-4 transition-all duration-700 z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
