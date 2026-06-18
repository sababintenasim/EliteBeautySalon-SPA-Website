import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-brand-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-heading mb-8">
              Redefining <br className="hidden md:block" />
              <span className="italic text-gray-500">Luxury</span> Beauty
            </h2>
            <div className="w-16 h-[1px] bg-black mb-8"></div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2010, Elite Beauty has established itself as the premier destination for luxury hair and beauty treatments. Our minimalist approach focuses on enhancing your natural beauty in a serene, sophisticated environment.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Our team of internationally trained stylists and therapists use only the finest, carefully curated products to deliver exceptional results tailored to your unique style.
            </p>
            <div className="mb-4">
              <img src="https://i.pinimg.com/1200x/96/9a/5b/969a5be3d3e1d3e81adf88502f44ba22.jpg" alt="Founder Signature" className="h-12 opacity-60" />
              <p className="text-xs uppercase tracking-widest mt-2 text-gray-500">Elena Rossi, Founder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img
                src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=800&auto=format&fit=crop"
                alt="Salon Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 border border-brand-gold z-0 hidden md:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
