
import { Leaf, Droplet, Heart, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  const icons = [
    <Leaf className="h-10 w-10 text-olive-600" />,
    <Heart className="h-10 w-10 text-olive-600" />,
    <Droplet className="h-10 w-10 text-olive-600" />,
    <Award className="h-10 w-10 text-olive-600" />,
  ];

  return (
    <section id="benefits" className="section-spacing bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-olive-600 bg-olive-50 px-3 py-1 rounded-full">
            {t.features.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-6">{t.features.title}</h2>
          <p className="text-olive-800/80 max-w-2xl mx-auto">{t.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.features.items.map((benefit, index) => (
            <div
              key={index}
              className="bg-olive-50/50 rounded-xl p-8 subtle-border transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.01]"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                {icons[index]}
              </div>
              <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
              <p className="text-olive-800/80">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-olive-100 to-olive-200/50 rounded-2xl overflow-hidden subtle-border">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">{t.features.grovesTitle}</h3>
              <p className="text-olive-800/80 mb-6">{t.features.grovesText}</p>
              <div className="flex gap-4 flex-wrap">
                {t.features.tags.map((tag) => (
                  <div key={tag} className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                alt="Olive groves"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
