import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Heart } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-6">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-heading mb-3">Eco-Friendly Products</h3>
            <p className="text-gray-500 font-light leading-relaxed max-w-xs">
              We exclusively use sustainable, cruelty-free, and organic products that are gentle on your hair and the earth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-brand-gold text-white flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-heading mb-3">Expert Stylists</h3>
            <p className="text-gray-500 font-light leading-relaxed max-w-xs">
              Our award-winning team undergoes continuous training to bring you the latest techniques and trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-6">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-heading mb-3">Premium Care</h3>
            <p className="text-gray-500 font-light leading-relaxed max-w-xs">
              Every appointment is treated as a bespoke experience tailored to your personal comfort and style goals.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
