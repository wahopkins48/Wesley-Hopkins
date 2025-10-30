
import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark z-0">
        <img
          src="https://picsum.photos/seed/tech/1920/1080"
          alt="Abstract background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
      </div>
      <div className="relative z-10 p-8 max-w-4xl mx-auto animate-fade-in-up">
        <h2 className="text-brand-silver font-sans font-semibold tracking-widest text-sm md:text-base uppercase">
          Digital Visibility Architect
        </h2>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Wesley Hopkins — Tuning signals for the generative search era.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-brand-gray text-base md:text-lg">
          Blending SEO, GEO, AI, and UX to help brands thrive in an algorithm-driven world. Human insight meets algorithmic precision.
        </p>
        <div className="mt-10">
          <Button href="#contact">Hire Me</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
