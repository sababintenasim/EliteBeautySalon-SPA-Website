import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Zap, Droplets, Smile, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Precision Haircut",
    desc: "Tailored cuts designed for your facial structure and lifestyle.",
    price: "$120+",
    icon: <Scissors size={32} strokeWidth={1} />
  },
  {
    title: "Keratin Smoothing",
    desc: "Eliminate frizz and add brilliant shine with our premium keratin treatment.",
    price: "$250+",
    icon: <Zap size={32} strokeWidth={1} />
  },
  {
    title: "Balayage & Color",
    desc: "Hand-painted highlights for a seamless, sun-kissed dimension.",
    price: "$200+",
    icon: <Droplets size={32} strokeWidth={1} />
  },
  {
    title: "Bridal Styling",
    desc: "Elegant updos and flawless makeup for your special day.",
    price: "$300+",
    icon: <Smile size={32} strokeWidth={1} />
  },
  {
    title: "Scalp Renewal",
    desc: "A detoxifying spa treatment to nourish and revitalize your scalp.",
    price: "$85+",
    icon: <Sparkles size={32} strokeWidth={1} />
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-brand-black text-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h4
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4"
          >
            What We Do
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading mb-6"
          >
            Salon Services
          </motion.h2>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: "64px" }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="mx-auto h-[1px] bg-white opacity-20"
          ></motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group cursor-pointer">
              <div className="flex flex-col items-center text-center p-8 border border-white/10 hover:border-brand-gold transition-colors duration-500 h-full">
                <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading mb-4">{service.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <div className="text-xl font-heading tracking-wider">{service.price}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
