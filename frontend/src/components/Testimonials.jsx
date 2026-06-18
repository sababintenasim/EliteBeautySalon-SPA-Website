import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The best salon experience I've ever had in NYC. The attention to detail and level of care is unmatched.",
    name: "Sarah Jenkins",
    role: "Regular Client",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "Elena completely transformed my hair! The color is so natural and healthy. I'll never go anywhere else.",
    name: "Emily Chen",
    role: "First-time Client",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "A true luxury experience. From the beautiful minimalist decor to the expert stylists, Elite Beauty is a gem.",
    name: "Jessica Taylor",
    role: "Bridal Client",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-brand-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">Reviews</h4>
          <h2 className="text-4xl md:text-5xl font-heading mb-6">Client Love</h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-8 md:px-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200">
            <Quote size={120} strokeWidth={1} />
          </div>

          <div className="relative z-10 min-h-[300px] flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-heading leading-relaxed mb-8 text-gray-800">
                  "{testimonials[current].text}"
                </p>
                <img
                  src={testimonials[current].img}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover mb-4 shadow-md"
                />
                <h5 className="uppercase tracking-widest text-sm font-semibold">{testimonials[current].name}</h5>
                <span className="text-gray-400 text-xs uppercase tracking-wider">{testimonials[current].role}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            <button onClick={prev} className="p-3 border border-gray-300 rounded-full hover:border-brand-gold hover:text-brand-gold transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="p-3 border border-gray-300 rounded-full hover:border-brand-gold hover:text-brand-gold transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
