
import React from 'react';
import { SERVICES, EXPERTISE_LIST } from '../constants';
import Button from './ui/Button';
import { CheckCircle } from 'lucide-react';

const ServiceCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
  <div className="bg-black p-8 rounded-lg border border-gray-800/50 hover:border-brand-silver/50 transition-all duration-300 flex flex-col h-full">
    <h3 className="font-serif text-2xl font-bold text-white">{title}</h3>
    <p className="mt-4 text-brand-gray flex-grow">{description}</p>
    <div className="mt-6">
       <Button href="#contact" variant="secondary" size="sm">Work With Me</Button>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Services</h2>
          <p className="mt-4 text-lg text-brand-gray">
            A holistic suite of services designed to build, protect, and amplify your digital presence in the generative era.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>

        <div className="mt-24 text-center">
            <h3 className="font-serif text-3xl font-bold text-white">Core Competencies</h3>
            <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
              A complete toolkit for digital visibility. I handle everything that gets businesses found on the web.
            </p>
            <div className="mt-12 text-left grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 max-w-6xl mx-auto">
                {EXPERTISE_LIST.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-silver flex-shrink-0 mt-1" />
                        <span className="text-brand-light/90">{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
