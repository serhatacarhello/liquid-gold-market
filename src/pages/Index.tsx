
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import Features from '@/components/Features';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Function to handle fade-in sections on scroll
    const handleScrollAnimation = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        
        if (sectionTop < triggerPoint) {
          section.classList.add('is-visible');
        }
      });
    };
    
    // Initial check for elements in view
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="fade-in-section">
          <ProductSection />
        </div>
        <div className="fade-in-section">
          <Features />
        </div>
        <div className="fade-in-section">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
