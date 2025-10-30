
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import GeoSection from './components/GeoSection';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <GeoSection />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
