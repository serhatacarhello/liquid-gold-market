
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-olive-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-serif font-medium">Olivia</a>
            <p className="mt-2 text-olive-200 max-w-xs">
              Premium natural olive oil, crafted with passion and tradition.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-medium mb-3 text-olive-100">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-olive-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="#product" className="text-olive-200 hover:text-white transition-colors">Product</a></li>
                <li><a href="#benefits" className="text-olive-200 hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#contact" className="text-olive-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-olive-100">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-olive-200 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-olive-200 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-olive-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-olive-300 text-sm">
            &copy; {currentYear} Olivia Olive Oil. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-olive-300 text-sm">
              Designed with care for olive oil enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
