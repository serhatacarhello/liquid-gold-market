
import { useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type Size = '500ml' | '1L';

const ProductSection = () => {
  const [selectedSize, setSelectedSize] = useState<Size>('500ml');
  const { t } = useLanguage();

  const sizes = [
    { value: '500ml' as Size, name: '500ml', price: '€19.95' },
    { value: '1L' as Size, name: t.product.size1L, price: '€32.95' },
  ];

  const getPrice = () => (selectedSize === '500ml' ? '€19.95' : '€32.95');

  return (
    <section id="product" className="section-spacing bg-gradient-to-b from-cream to-olive-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-olive-600 bg-olive-50 px-3 py-1 rounded-full">{t.product.badge}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-6">{t.product.title}</h2>
          <p className="text-olive-800/80 max-w-2xl mx-auto">{t.product.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-olive-200 to-olive-400 opacity-30 blur-xl"></div>
              <div className="img-reveal rounded-2xl overflow-hidden shadow-xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                  alt="Olive oil bottle"
                  className="w-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute top-4 right-4 price-badge text-white z-20">{getPrice()}</div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-2">{t.product.name}</h3>
              <p className="text-olive-800/80">{t.product.desc}</p>
            </div>

            <div>
              <h4 className="font-medium mb-4">{t.product.selectSize}</h4>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <button
                    key={size.value}
                    className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedSize === size.value
                        ? 'bg-olive-700 text-white shadow-lg shadow-olive-700/20'
                        : 'bg-white border border-olive-200 text-olive-800 hover:border-olive-300'
                    }`}
                    onClick={() => setSelectedSize(size.value)}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-lg font-medium">{t.product.price}: {getPrice()}</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium mb-2">{t.product.features}</h4>
              <ul className="space-y-2">
                {t.product.featuresList.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="text-olive-600 shrink-0 mt-1" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm text-olive-700/80 italic">{t.product.note}</p>
            </div>

            <div className="pt-4">
              <a href="#contact" className="inline-block btn-hover text-white px-6 py-3 rounded-full font-medium bg-olive-700 hover:bg-olive-800 shadow-lg shadow-olive-700/20 transition-all duration-300">
                {t.product.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
