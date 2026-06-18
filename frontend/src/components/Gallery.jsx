import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&auto=format&fit=crop",
  "https://i.pinimg.com/1200x/8c/9f/a7/8c9fa7dbc6e87d9a2d83c5bf0acf7874.jpg",
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop"
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`overflow-hidden relative group ${idx === 0 || idx === 3 ? 'row-span-2 aspect-[2/3]' : 'aspect-square'
              }`}
          >
            <img
              src={img}
              alt={`Gallery image ${idx}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white text-sm uppercase tracking-widest border border-white px-4 py-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center py-16 bg-brand-light">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-brand-black hover:text-brand-gold uppercase tracking-[0.2em] font-semibold transition-colors duration-300">
          Follow us on Instagram @Elite Beauty
        </a>
      </div>
    </section>
  );
};

export default Gallery;
