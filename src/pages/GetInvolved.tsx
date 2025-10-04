import React from 'react';
import { Link } from 'react-router-dom';

const GetInvolved: React.FC = () => {
  return (
    <div className="space-y-12">
       <div className="rounded-xl shadow-lg overflow-hidden">
        <img src="https://placehold.co/1200x300/a076a8/f3e8f5?text=Join+Our+Cause" alt="Get Involved Banner" className="w-full h-full object-cover"/>
      </div>
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-16">
      
      <section className="text-center">
        <h1 className="text-3xl font-bold text-brand-dark mb-4">Join Us in Making a Difference</h1>
        <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Your support is vital to our mission. There are many ways you can contribute to the fight against cancer in Somaliland. Whether you have time to give, resources to share, or a voice to raise, every action counts.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Volunteer With Us</h2>
          <p className="text-gray-700 mb-4">
            Volunteers are the backbone of our organization. By donating your time and skills, you can directly impact the lives of patients and their families. We have a variety of roles to suit your interests and availability.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Assist with organizing awareness events.</li>
            <li>Provide administrative support in our office.</li>
            <li>Help with patient outreach programs.</li>
            <li>Contribute your professional skills (e.g., marketing, accounting).</li>
          </ul>
           <Link to="/contact" className="text-brand-purple font-semibold hover:underline">Contact us to learn more about volunteering &rarr;</Link>
        </div>
        <div>
          <img src="https://placehold.co/500x350/f3e8f5/333333?text=Volunteering" alt="Volunteers" className="rounded-lg shadow-md w-full h-auto object-cover"/>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center flex-row-reverse">
         <div className="md:order-2">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Corporate Partnerships</h2>
          <p className="text-gray-700 mb-4">
            Partner with SCSO to demonstrate your company's commitment to social responsibility. We can work together to create mutually beneficial partnerships through event sponsorships, cause marketing campaigns, or employee giving programs.
          </p>
           <Link to="/contact" className="text-brand-purple font-semibold hover:underline">Become a corporate partner today &rarr;</Link>
        </div>
        <div className="md:order-1">
          <img src="https://placehold.co/500x350/f3e8f5/333333?text=Partnership" alt="Partnerships" className="rounded-lg shadow-md w-full h-auto object-cover"/>
        </div>
      </section>

      <section className="text-center bg-brand-light-purple/60 rounded-xl p-10">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Ready to Help?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
          Your donation can provide immediate relief and support to a family in need. Every contribution, no matter the size, makes a meaningful impact.
        </p>
        {/* Note: This button re-uses the logic from Layout/Header, which requires passing a function. 
            For simplicity here, we'll just link to the contact page, but in a full app this might open the modal. */}
        <Link to="/contact" className="bg-brand-purple text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Donate or Contact Us
        </Link>
      </section>

    </div>
    </div>
  );
};

export default GetInvolved;
