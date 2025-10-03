import React from 'react';
import { Link } from 'react-router-dom';

const FeatureSection: React.FC<{
  imageUrl: string;
  title: string;
  children: React.ReactNode;
  imageAlt: string;
  reverse?: boolean;
}> = ({ imageUrl, title, children, imageAlt, reverse = false }) => (
  <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="md:w-1/2">
      <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-xl w-full h-auto object-cover" />
    </div>
    <div className="md:w-1/2">
      <h3 className="text-3xl font-bold text-brand-dark mb-4">{title}</h3>
      <div className="w-20 h-1 bg-brand-purple mb-4"></div>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  </div>
);

const ActionCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; linkTo: string; linkText: string }> = ({ title, children, icon, linkTo, linkText }) => (
    <div className="bg-white rounded-lg shadow-md p-8 text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2">
        <div className="text-brand-purple mb-4">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-brand-dark mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{children}</p>
        <Link to={linkTo} className="text-brand-purple font-semibold hover:underline mt-auto">
          {linkText} &rarr;
        </Link>
    </div>
);


const Home: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* New Hero Section */}
      <section className="relative bg-brand-light-purple rounded-xl shadow-lg text-white h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <img src="https://placehold.co/1200x800/A076A8/333333?text=+" alt="Community Support" className="absolute top-0 left-0 w-full h-full object-cover opacity-30"/>
        <div className="relative z-10 p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-shadow-lg">
            Together, We Are Stronger Than Cancer
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-100 mb-12">
            Providing unwavering support, raising critical awareness, and fostering hope for a cancer-free future in Somaliland.
          </p>
          <Link 
            to="/about" 
            className="bg-white text-brand-purple font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
          >
            Learn More About Our Mission
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Welcome to SCSO</h2>
        <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
        <p className="text-gray-700 leading-relaxed text-lg">
          Somaliland Cancer Support Organization (SCSO) is the first non-profit charity in Somaliland dedicated to supporting cancer patients and their families. We strive to assist vulnerable individuals battling the disease by providing medical aid, social support, and promoting prevention through community-wide awareness campaigns.
        </p>
      </section>

      {/* Our Mission in Action */}
      <section className="space-y-16">
        <FeatureSection
            imageUrl="https://placehold.co/600x400/f3e8f5/333333?text=Patient+Care"
            imageAlt="Patient and family receiving support"
            title="Patient & Family Support"
        >
            At the heart of our work is direct support for those who need it most. We provide vulnerable families with essential resources including food, medicine, and clothing, along with vital emotional and social support to navigate the challenges of a cancer diagnosis.
        </FeatureSection>

        <FeatureSection
            imageUrl="https://placehold.co/600x400/f3e8f5/333333?text=Awareness"
            imageAlt="Community awareness campaign"
            title="Awareness & Prevention"
            reverse={true}
        >
            Education is our most powerful tool for prevention. We run extensive health education workshops and awareness campaigns in schools, universities, and communities across Somaliland to promote early detection and healthy lifestyles.
        </FeatureSection>
        
        <FeatureSection
            imageUrl="https://placehold.co/600x400/f3e8f5/333333?text=Research"
            imageAlt="Scientists working in a lab"
            title="Research & Collaboration"
        >
            We are committed to advancing cancer care by supporting local research initiatives. By organizing seminars and collaborating with scientific institutions, we aim to contribute to a deeper understanding of cancer and improve treatment outcomes in our region.
        </FeatureSection>
      </section>

      {/* Impact Section */}
      <section className="bg-brand-dark text-white rounded-xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact by the Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                  <p className="text-5xl font-extrabold text-brand-light-purple">500+</p>
                  <p className="font-semibold mt-2 opacity-80">Families Supported</p>
              </div>
              <div>
                  <p className="text-5xl font-extrabold text-brand-light-purple">50+</p>
                  <p className="font-semibold mt-2 opacity-80">Awareness Campaigns</p>
              </div>
              <div>
                  <p className="text-5xl font-extrabold text-brand-light-purple">1,000+</p>
                  <p className="font-semibold mt-2 opacity-80">Community Members Reached</p>
              </div>
          </div>
      </section>

      {/* How You Can Help Section */}
      <section>
        <h2 className="text-3xl font-bold text-brand-dark text-center mb-4">How You Can Help</h2>
        <div className="w-24 h-1 bg-brand-purple mx-auto mb-10"></div>
        <div className="grid md:grid-cols-3 gap-8">
            <ActionCard 
                title="Donate"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>}
                linkTo="/contact"
                linkText="Give Today"
            >
                Your financial support provides immediate relief and critical resources to patients and their families. Every donation makes a difference.
            </ActionCard>
            <ActionCard 
                title="Volunteer"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>}
                linkTo="/contact"
                linkText="Join Our Team"
            >
                Lend your time and talent to our cause. Volunteers are the heart of our organization, helping with events, outreach, and patient support.
            </ActionCard>
            <ActionCard 
                title="Partner"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor"><path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" /></svg>}
                linkTo="/contact"
                linkText="Collaborate With Us"
            >
                Corporate partnerships are vital for sustainable impact. Join us to demonstrate your commitment to social responsibility and help us expand our reach.
            </ActionCard>
        </div>
      </section>

    </div>
  );
};

export default Home;