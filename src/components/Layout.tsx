import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import DonationModal from './DonationModal';
import RibbonBackground from '../assets/RibbonBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none -z-10">
        <RibbonBackground />
      </div>
      <Header onDonateClick={() => setIsModalOpen(true)} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
      {isModalOpen && <DonationModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Layout;
