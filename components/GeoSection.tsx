
import React from 'react';

const GeoSection: React.FC = () => {
  return (
    <section id="geo" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
            The Shift from SEO to GEO
          </h2>
          <p className="mt-4 text-brand-silver text-lg">
            From Indexing to Interpretation
          </p>
        </div>
        <div className="md:col-span-3 text-brand-light/90 text-base md:text-lg space-y-6 leading-relaxed">
          <p>
            The web isn’t just being indexed anymore—it’s being <span className="text-brand-silver">interpreted</span>. AI systems now read pages the way humans do: looking for clarity, structure, and intent. They don’t just count keywords; they evaluate meaning, context, and how well every element communicates authority.
          </p>
          <p>
            That’s where <span className="font-bold text-white">Generative Engine Optimization (GEO)</span> comes in. GEO prepares your content for discovery in the new search layer where answers come from AI summaries, not just ten blue links. It ensures your brand is visible and trusted when generative systems decide what to include.
          </p>
          <p>
            Just as SEO made websites readable to crawlers, GEO makes them <span className="text-brand-silver">understandable to AI</span>. And because those models evolve constantly, staying ahead isn’t optional—it’s survival.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GeoSection;
