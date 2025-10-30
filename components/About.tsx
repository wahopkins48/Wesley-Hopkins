
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
          Human Insight in an Algorithmic Age
        </h2>
        <div className="w-20 h-1 bg-brand-silver mx-auto mt-4 mb-8"></div>
        <p className="text-lg text-brand-light leading-relaxed mb-6">
          My journey into digital communication began not with code, but with language. With a Master of Arts in Rhetoric and a Bachelor of Science in Professional Writing, my foundation is in understanding how to craft persuasive, clear, and impactful messages for specific audiences.
        </p>
        <p className="text-lg text-brand-light leading-relaxed mb-6">
          A minor in Human-Computer Interactions and User Experience taught me to bridge the gap between human intent and digital interfaces. This unique blend of arts and sciences is the core of my philosophy: I don't believe AI replaces human creativity—it amplifies it.
        </p>
        <p className="text-lg text-brand-silver font-semibold leading-relaxed">
          My work is about making brands not just searchable, but truly understandable to both people and the AI that serves them.
        </p>
      </div>
    </section>
  );
};

export default About;
