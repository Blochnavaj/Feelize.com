import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../assets/LOGO_FEELIZE.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();
  const isOnHomePage = location.pathname === '/';
  const navigate = useNavigate();

  const NavLink = [
    { name: 'About us', id: 'about-us' },
    { name: 'Services', id: 'featured-services' }, // Changed from 'services' to 'featured-services'
    { name: 'Technologies', id: 'Technologies' },
    { name: 'How it Works', id: 'how-it-works' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleForm = () => {
    setShowForm(!showForm);
    setSubmitted(false);
    closeMenu();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '79db56d4-056c-4817-9a43-a8c7e6954b83',
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  // Helper to handle navigation to home and scroll to section
  const handleNavToSection = (id) => (e) => {
    e.preventDefault();
    navigate(`/#${id}`);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
    closeMenu();
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full py-4 flex justify-center fixed z-50 top-0">
        <div className="w-[95%] max-w-7xl bg-white shadow-md rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <h1 className="text-pink-600 text-2xl font-extrabold">Feelize</h1>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 items-center relative">
            {NavLink.map((link) => (
              <li
                key={link.id}
                className="relative group cursor-pointer text-black text-base font-medium"
                onMouseEnter={() => link.hasDropdown && setShowServices(true)}
                onMouseLeave={() => link.hasDropdown && setShowServices(false)}
              >
                {isOnHomePage ? (
                  <ScrollLink
                    to={link.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="hover:text-red-600"
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={`/#${link.id}`}
                    className="hover:text-red-600"
                    onClick={handleNavToSection(link.id)}
                  >
                    {link.name}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <button
              onClick={toggleForm}
              className="text-white px-5 py-2 rounded-md font-medium bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] hover:from-[#c23b87] hover:to-[#0a1685] transition duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-3xl text-red-600 cursor-pointer z-50" onClick={toggleMenu}>
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Dark Background Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-60" onClick={closeMenu}></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 animate-slide-in px-6 py-4 flex flex-col">
            {/* Logo */}
            <div className="mb-6">
                          <h1 className="text-pink-600 text-2xl font-extrabold">Feelize</h1>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-4">
              {NavLink.map((link, idx) => (
                <li key={idx} className="border-b border-gray-200 pb-2">
                  {isOnHomePage ? (
                    <ScrollLink
                      to={link.id}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={closeMenu}
                      className="text-black text-lg font-medium hover:text-red-600 block"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={`/#${link.id}`}
                      onClick={handleNavToSection(link.id)}
                      className="text-black text-lg font-medium hover:text-red-600 block"
                    >
                      {link.name}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>

            {/* Contact Us Button */}
            <div className="mt-4">
              <button
                onClick={toggleForm}
                className="w-3/4 mx-auto px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] hover:from-[#c23b87] hover:to-[#0a1685] transition duration-300 text-base font-medium"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg">
            <button
              onClick={toggleForm}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-red-600">Contact Us</h2>

            {submitted ? (
              <div className="text-green-600 text-center text-lg font-medium">
                ✅ Thank you! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;