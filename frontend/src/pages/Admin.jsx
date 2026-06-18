import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) fetchBookings();
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('adminToken', data.token);
        setToken(data.token);
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (err) {
      alert('Error logging in');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/admin/bookings', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setBookings(data);
      } else if (res.status === 401) {
        handleLogout();
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const deleteBooking = async (id) => {
    if (!window.confirm('Delete this booking?')) return;
    try {
      await fetch(`http://localhost:5000/api/admin/bookings/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchBookings();
    } catch (err) {
      console.error(err);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-light">
        <form onSubmit={handleLogin} className="bg-white p-10 rounded shadow-xl max-w-sm w-full">
          <h2 className="text-2xl font-heading mb-6 text-center">Admin Login</h2>
          <input 
            type="text" placeholder="Username" required value={username} onChange={e => setUsername(e.target.value)}
            className="w-full border-b border-gray-300 py-2 mb-4 focus:outline-none focus:border-brand-gold"
          />
          <input 
            type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)}
            className="w-full border-b border-gray-300 py-2 mb-8 focus:outline-none focus:border-brand-gold"
          />
          <button type="submit" className="w-full bg-brand-black text-white py-3 uppercase tracking-widest hover:bg-brand-gold transition-colors">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-heading">Admin Dashboard</h1>
          <button onClick={handleLogout} className="border border-brand-black px-6 py-2 uppercase text-sm tracking-widest hover:bg-brand-black hover:text-white transition-colors">
            Logout
          </button>
        </div>

        <div className="bg-white p-8 shadow-lg">
          <h2 className="text-xl font-heading mb-6">Booking Requests</h2>
          {loading ? <p>Loading...</p> : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-brand-gold">
                    <th className="py-4 px-4 uppercase text-sm tracking-wider text-gray-500">Name</th>
                    <th className="py-4 px-4 uppercase text-sm tracking-wider text-gray-500">Phone</th>
                    <th className="py-4 px-4 uppercase text-sm tracking-wider text-gray-500">Service</th>
                    <th className="py-4 px-4 uppercase text-sm tracking-wider text-gray-500">Date</th>
                    <th className="py-4 px-4 uppercase text-sm tracking-wider text-gray-500">Time</th>
                    <th className="py-4 px-4 uppercase text-sm tracking-wider text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(b => (
                    <tr key={b._id} className="border-b border-gray-200">
                      <td className="py-4 px-4">{b.name}</td>
                      <td className="py-4 px-4">{b.phone}</td>
                      <td className="py-4 px-4">{b.service}</td>
                      <td className="py-4 px-4">{b.date}</td>
                      <td className="py-4 px-4">{b.time}</td>
                      <td className="py-4 px-4">
                        <button onClick={() => deleteBooking(b._id)} className="text-red-500 hover:text-red-700 uppercase text-xs font-bold tracking-wider">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {bookings.length === 0 && (
                    <tr>
                      <td colSpan="6" className="py-6 text-center text-gray-500">No bookings found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
