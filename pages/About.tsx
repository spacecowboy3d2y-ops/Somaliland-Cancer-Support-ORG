
import React, { useState } from 'react';

const CheckmarkItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        <span className="text-gray-700">{children}</span>
    </li>
);

const FAQItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
            >
                <span className="text-lg font-medium text-brand-dark">{question}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="pb-4 px-2 text-gray-600">
                    {children}
                </div>
            )}
        </div>
    );
};

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-16">
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark mb-4">Who We Are</h1>
          <div className="w-24 h-1 bg-brand-purple mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Somaliland Cancer Support Organization (SCSO) is the first non-profit charity organization in Somaliland dedicated to cancer support.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are committed to supporting cancer patients with medical needs, social support, raising awareness, promoting prevention, and contributing to research programs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Recognizing the rising number of cancer cases in Somaliland with lack of specialized healthcare facilities, we strive to assist vulnerable individuals battling the disease and to provide much-needed aid to families affected by cancer. Through our work, we aim to bridge the gap in cancer care, ensuring better access to information, early detection, and advocacy for improved healthcare services in Somaliland.
          </p>
        </div>
        <div>
            <img src="https://placehold.co/500x400/f3e8f5/333333?text=Our+Community" alt="SCSO Team" className="rounded-lg shadow-md w-full h-auto object-cover"/>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Vision</h2>
        <div className="w-24 h-1 bg-brand-purple mb-6"></div>
         <p className="text-gray-700 leading-relaxed mb-6 italic text-xl">
          To create a future where every individual in Somaliland has equitable access to cancer care, awareness, and prevention resources, ensuring no one faces the battle against cancer alone.
        </p>
        <ul className="space-y-3">
            <CheckmarkItem>To support medically cancer patients.</CheckmarkItem>
            <CheckmarkItem>Prevent and raise awareness about cancer in Somaliland.</CheckmarkItem>
            <CheckmarkItem>Collaborate with partners to provide support.</CheckmarkItem>
            <CheckmarkItem>Empower and advocate for those affected.</CheckmarkItem>
            <CheckmarkItem>Promote professional development and scientific research in the field of cancer.</CheckmarkItem>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Mission</h2>
        <div className="w-24 h-1 bg-brand-purple mb-6"></div>
        <p className="text-gray-700 leading-relaxed">
          We aspire to establish a robust healthcare system that prioritizes early detection, advanced research, and comprehensive support, fostering hope and strength within our communities. Our mission is to reduce the burden of cancer through education, patient support services, and advocacy for systemic healthcare improvements.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Commitment</h2>
        <div className="w-24 h-1 bg-brand-purple mb-6"></div>
        <p className="text-gray-700 leading-relaxed">
         As the first charity organization dedicated to cancer support in Somaliland, we focus on improving lives through awareness, prevention, advocacy, and research. The absence of specialized cancer hospitals forces many patients to seek costly treatment abroad, placing an immense financial burden on families, particularly those with limited resources. We are committed to alleviating this burden by providing direct financial aid, logistical support, and access to local resources whenever possible.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-brand-dark mb-4 text-center">Frequently Asked Questions</h2>
        <div className="w-24 h-1 bg-brand-purple mb-8 mx-auto"></div>
        <div className="max-w-3xl mx-auto">
            <FAQItem question="How can I donate?">
                <p>You can donate through our secure online portal by clicking the "Donate" button in the header. We also accept donations via ZAAD (063-8812723) and E-Dahab (746560). Thank you for your support!</p>
            </FAQItem>
            <FAQItem question="Where does my donation go?">
                <p>Your donation directly supports our programs, including providing medical supplies and financial aid to patients, funding our awareness campaigns, and supporting local research initiatives to improve cancer care in Somaliland.</p>
            </FAQItem>
            <FAQItem question="What services do you offer to patients and their families?">
                <p>We provide a range of services, including financial assistance for treatment, access to medication, nutritional support (food and clothing), and emotional and social support groups for both patients and their families.</p>
            </FAQItem>
            <FAQItem question="How can I volunteer with SCSO?">
                <p>We are always looking for passionate volunteers! You can help with community outreach, event organization, administrative tasks, and more. Please visit our "Get Involved" page or contact us directly to learn about current opportunities.</p>
            </FAQItem>
        </div>
      </section>
    </div>
  );
};

export default About;
