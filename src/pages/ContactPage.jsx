import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_pl0wnlo', // replace with your actual service ID
      'template_yjmrp1a', 
      form,
      'sY_7yAVxTbD-4ManU'
    ).then((result) => {
      console.log(result.text);
      setSubmitted(true);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <MainLayout>
      <div className="relative p-6 max-w-5xl mx-auto mt-10 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <div className="relative z-10 p-8">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Thank You!</h2>
              <p className="text-lg text-gray-600">
                Your message has been sent successfully. I will review and get in touch with you soon.
              </p>
              <Link to="/">
                <button className='border border-gray-400 rounded-md my-6 p-[4px] bg-gradient-to-r from-custom-green-light to-custom-green text-white font-semibold transition duration-300 shadow-lg transform hover:scale-105'>
                  Home?
                </button>
              </Link>
            </div>
          ) : (
            <>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Me</h2>
              <p className="mb-8 text-gray-600">I'd love to hear from you! Please fill out the form below to get in touch.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="6"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-3 px-6 border-2 border-white shadow-sm text-lg font-medium rounded-lg text-white bg-custom-green hover:bg-custom-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default ContactPage;