import { HiOutlineMail, HiOutlineLink } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary" 
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>

          <div className="mt-8 text-center border-t border-gray-200 dark:border-gray-600 pt-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Or connect with me directly:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              {/* Email Link */}
              <a 
                href="mailto:ferdianyosua@gmail.com" 
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <HiOutlineMail size={20} />
                <span>ferdianyosua@gmail.com</span>
              </a>
              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/yosua-ferdian-a1a929116/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <FaLinkedin size={20} />
                <span>Yosua Ferian</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}