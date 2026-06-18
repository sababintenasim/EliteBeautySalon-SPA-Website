import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', service: '', date: '', time: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="booking" className="section-padding bg-brand-light relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-2xl p-8 md:p-16 border-t-4 border-brand-gold relative z-10"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-heading mb-4">Request an Appointment</h2>
            <p className="text-gray-500 font-light">Fill out the form below and we will confirm your booking shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-700 mb-2">Full Name</label>
                <input
                  type="text" name="name" required value={formData.name} onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-700 mb-2">Service</label>
                <select
                  name="service" required value={formData.service} onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent text-gray-700 transition-colors"
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="Haircut">Precision Haircut</option>
                  <option value="Coloring">Balayage & Color</option>
                  <option value="Keratin">Keratin Treatment</option>
                  <option value="Styling">Bridal Styling</option>
                </select>
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-700 mb-2">Date</label>
                <input
                  type="date" name="date" required value={formData.date} onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent text-gray-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-700 mb-2">Time</label>
                <input
                  type="time" name="time" required value={formData.time} onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent text-gray-500 transition-colors"
                />
              </div>
            </div>

            <div className="pt-6 text-center">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full md:w-auto px-12 py-4 bg-brand-black text-white hover:bg-brand-gold transition-colors duration-300 uppercase tracking-widest text-sm font-semibold disabled:opacity-50"
              >
                {status === 'loading' ? 'Submitting...' : 'Book Now'}
              </button>
            </div>

            {status === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-center mt-4">
                Thank you! Your booking request has been sent.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-center mt-4">
                Oops! Something went wrong. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-brand-gray z-0 block md:hidden"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-brand-gray z-0 hidden md:block"></div>
    </section>
  );
};

export default BookingForm;
