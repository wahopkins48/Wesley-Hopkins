
import React, { useState } from 'react';
import Button from './ui/Button';

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Thank you for your message! I will get back to you shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Let's Build Together</h2>
          <p className="mt-4 text-lg text-brand-gray">
            Have a project in mind or just want to discuss the future of search? I'm always open to new conversations.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white">Get in Touch</h3>
            <p className="text-brand-gray">
              Fill out the form for a work inquiry, or use the links below to connect directly.
            </p>
            <div className="space-y-4">
               <div>
                 <h4 className="font-bold text-brand-silver">Email</h4>
                 <a href="mailto:wesley@crawled.blog" className="text-brand-light hover:underline">wesley@crawled.blog</a>
               </div>
               <div>
                 <h4 className="font-bold text-brand-silver">Schedule a Call</h4>
                 <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:underline">Book a time on Calendly</a>
               </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" placeholder="Your Name" required className="w-full bg-brand-dark border border-gray-700 text-white p-3 rounded-md focus:ring-2 focus:ring-brand-silver focus:outline-none transition-all" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full bg-brand-dark border border-gray-700 text-white p-3 rounded-md focus:ring-2 focus:ring-brand-silver focus:outline-none transition-all" />
            <textarea name="message" placeholder="Your Message" rows={5} required className="w-full bg-brand-dark border border-gray-700 text-white p-3 rounded-md focus:ring-2 focus:ring-brand-silver focus:outline-none transition-all"></textarea>
            <Button type="submit" fullWidth>Send Work Inquiry</Button>
            {status && <p className="text-sm text-green-400 mt-4 text-center">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
