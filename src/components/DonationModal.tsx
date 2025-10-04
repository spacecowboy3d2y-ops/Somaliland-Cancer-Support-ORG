import React, { useState } from 'react';

interface DonationModalProps {
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ onClose }) => {
  const [amount, setAmount] = useState('25');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAmountClick = (value: string) => {
    setAmount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation submitted:', new FormData(e.currentTarget as HTMLFormElement));
    setIsSubmitted(true);
  };
  
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center animate-fade-in">
           <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
           <h2 className="text-2xl font-bold text-brand-dark mt-4">Thank You!</h2>
           <p className="text-gray-600 mt-2">Your generous donation is greatly appreciated and will help us support those in need.</p>
           <button 
             onClick={onClose}
             className="mt-6 bg-brand-purple text-white font-bold py-2 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300"
           >
             Close
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Make a Donation</h2>
        <p className="text-gray-600 mb-6">Your support helps us provide critical care and resources.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Select Amount (USD)</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['10', '25', '50', '100'].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleAmountClick(val)}
                  className={`py-3 px-4 rounded-lg font-semibold transition ${amount === val ? 'bg-brand-purple text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  ${val}
                </button>
              ))}
            </div>
             <input
                type="number"
                name="custom_amount"
                placeholder="Custom Amount"
                value={['10', '25', '50', '100'].includes(amount) ? '' : amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-4 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" name="first_name" placeholder="First Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple" />
            <input type="text" name="last_name" placeholder="Last Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple" />
          </div>
          <div className="mb-6">
            <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple" />
          </div>

          <button type="submit" className="w-full bg-brand-purple text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg">
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationModal;
