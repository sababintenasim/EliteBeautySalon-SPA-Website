import React from 'react';
import { Globe, Camera, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-heading font-bold uppercase tracking-widest mb-6">Elite Beauty</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              A luxury salon experience focusing on premium hair care, minimalist aesthetics, and personalized beauty treatments.
            </p>
            <div className="flex space-x-4 text-brand-gold">
              <a href="#" className="hover:text-white transition-colors"><Camera size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-sm font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2 text-white">
                  <MapPin size={16} /> <span>Address</span>
                </div>
                <span className="pl-6 block">123 Luxury Avenue</span>
                <span className="pl-6 block">New York, NY 10001</span>
              </li>
              <li className="flex flex-col space-y-1 mt-4">
                <div className="flex items-center space-x-2 text-white">
                  <Phone size={16} /> <span>Phone</span>
                </div>
                <span className="pl-6 block hover:text-brand-gold cursor-pointer">+1 (555) 123-4567</span>
              </li>
              <li className="flex flex-col space-y-1 mt-4">
                <div className="flex items-center space-x-2 text-white">
                  <Mail size={16} /> <span>Email</span>
                </div>
                <span className="pl-6 block hover:text-brand-gold cursor-pointer">hello@Elite Beautysalon.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-sm font-semibold mb-6">Hours</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday</span> <span>Closed</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Tue - Fri</span> <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span> <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sunday</span> <span>10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-sm font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 font-light mb-4">Subscribe for exclusive offers and styling tips.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-gray-600 px-0 py-2 w-full focus:outline-none focus:border-brand-gold"
              />
              <button className="text-brand-gold uppercase tracking-widest text-xs font-semibold hover:text-white transition-colors ml-4 border-b border-transparent">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-white/10 text-gray-500 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Elite Beauty Luxury Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
