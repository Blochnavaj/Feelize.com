 import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const ContactFormModal = ({ isOpen, onClose, selectedPlan }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "79db56d4-056c-4817-9a43-a8c7e6954b83",
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
        subject: `Interest in ${selectedPlan} Plan`,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();

      // Auto-close after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg relative shadow-lg">
        {/* ❌ Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-red-500"
        >
          <FiX />
        </button>

        <h2 className="text-xl font-bold mb-4">
          Contact Us for <span className="text-purple-700">{selectedPlan}</span>
        </h2>

        {submitted ? (
          <p className="text-green-600 font-medium text-center">
            ✅ Thank you! We'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="79db56d4-056c-4817-9a43-a8c7e6954b83" />
            <input type="hidden" name="subject" value={`Interest in ${selectedPlan} Plan`} />

            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <input
                name="name"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full border rounded px-3 py-2"
                placeholder="Tell us more about your project..."
              ></textarea>
            </div>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded"
              >
                Submit
              </button>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-800"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactFormModal;
