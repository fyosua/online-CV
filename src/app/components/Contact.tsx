'use client'; // Add this at the top, as we are using state and effects

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            setStatus('success');
            setStatusMessage('Message sent successfully!');
            form.current?.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            setStatus('error');
            setStatusMessage('Failed to send message. Please try again.');
          }
        );
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name" // This name must match the variable in your EmailJS template
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email" // This name must match the variable in your EmailJS template
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message" // This name must match the variable in your EmailJS template
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {status !== 'idle' && (
            <div className={`mt-4 text-center p-2 rounded-lg ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {statusMessage}
            </div>
          )}

          <div className="mt-8 text-center border-t border-gray-200 dark:border-gray-600 pt-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Or connect with me directly:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <a href="mailto:ferdianyosua@gmail.com" className="flex items-center justify-center gap-2 text-primary font-medium hover:underline">
                <HiOutlineMail size={20} />
                <span>ferdianyosua@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/yosua-ferdian-a1a929116/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-primary font-medium hover:underline">
                <FaLinkedin size={20} />
                <span>Yosua Ferdian</span>
              </a>
              <a href="https://wa.me/6281290216083" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-primary font-medium hover:underline">
                <FaWhatsapp size={20} />
                <span>+62 812 9021 6083</span>
              </a>
              <a href="https://wa.me/601127817121" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-primary font-medium hover:underline">
                <FaWhatsapp size={20} />
                <span>+60 11 2781 7121</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}