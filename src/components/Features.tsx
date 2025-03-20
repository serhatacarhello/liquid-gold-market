
import { Leaf, Droplet, Heart, Award } from 'lucide-react';

const Features = () => {
  const benefits = [
    {
      icon: <Leaf className="h-10 w-10 text-olive-600" />,
      title: 'Organic & Natural',
      description: 'Sourced from organically grown olives, free from pesticides and chemical fertilizers.'
    },
    {
      icon: <Heart className="h-10 w-10 text-olive-600" />,
      title: 'Heart Healthy',
      description: 'Rich in monounsaturated fats that support heart health and reduce inflammation.'
    },
    {
      icon: <Droplet className="h-10 w-10 text-olive-600" />,
      title: 'Pure Extraction',
      description: 'Cold-pressed to preserve natural antioxidants, vitamins, and the authentic flavor profile.'
    },
    {
      icon: <Award className="h-10 w-10 text-olive-600" />,
      title: 'Premium Quality',
      description: 'Harvested and bottled with meticulous attention to detail to ensure exceptional quality.'
    }
  ];
  
  return (
    <section id="benefits" className="section-spacing bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-olive-600 bg-olive-50 px-3 py-1 rounded-full">
            Why Choose Our Olive Oil
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-6">
            The Benefits of Pure Olive Oil
          </h2>
          <p className="text-olive-800/80 max-w-2xl mx-auto">
            Our olive oil isn't just a culinary delight—it's a wellness essential that brings multiple health benefits.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-olive-50/50 rounded-xl p-8 subtle-border transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.01]"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
              <p className="text-olive-800/80">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-olive-100 to-olive-200/50 rounded-2xl overflow-hidden subtle-border">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">
                From Our Groves To Your Table
              </h3>
              <p className="text-olive-800/80 mb-6">
                Our family has been cultivating olives for generations, preserving traditional methods while embracing sustainable farming practices. Each bottle tells the story of our heritage and commitment to quality.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  Sustainable Farming
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  Traditional Methods
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  Family Heritage
                </div>
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
