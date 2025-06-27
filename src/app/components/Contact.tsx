export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
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
          <div className="mt-8 text-center">
            <p className="text-gray-600">or email me directly at:</p>
            <a href="mailto:ferdianyosua@gmail.com" className="text-primary font-medium">
              ferdianyosua@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}