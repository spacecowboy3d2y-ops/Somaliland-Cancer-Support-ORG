
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Contact Info */}
        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-bold text-brand-dark mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-brand-purple mb-6"></div>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you. Please reach out with any questions, or if you need support.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-brand-purple mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Jigjiga Yare, Hargeisa, Somaliland</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-brand-purple mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">00 252 63-8760934</p>
                <p className="text-gray-600">00 252 63-8981511</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-brand-purple mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <a href="mailto:Scso.Official@gmail.com" className="text-brand-purple hover:underline">Scso.Official@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="w-full h-80 md:h-full">
            <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125134.7896434407!2d44.00486803274293!3d9.559385563606707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628bbce5d72f24d%3A0x4989e2475475940!2sHargeisa%2C%20Somalia!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
