import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="relative h-64 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Contact MarineServices</h1>
          <p className="text-xl text-blue-100">Get in touch with our team</p>
        </div>
      </div>
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Contact Us</h1>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">support@marineservices.com</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Typically replies within 1 hour</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri, 9am-5pm EST</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">Office</h3>
              <p className="text-gray-600 dark:text-gray-300">123 Marine Way</p>
              <p className="text-gray-600 dark:text-gray-300">Miami, FL 33101</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Common Questions</h2>
          <div className="space-y-4">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">How quickly will I get a response?</h3>
              <p className="text-gray-600 dark:text-gray-300">We aim to respond to all inquiries within 1 business day.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">What information should I include?</h3>
              <p className="text-gray-600 dark:text-gray-300">Please include your contact details and a clear description of your inquiry.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">Can I visit your office?</h3>
              <p className="text-gray-600 dark:text-gray-300">Yes, our office is open during business hours. Please call ahead to schedule an appointment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
