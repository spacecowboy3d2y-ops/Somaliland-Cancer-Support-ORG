import React from 'react';
import Logo from '../assets/Logo';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start md:col-span-1">
             <Logo className="h-16 w-auto mb-4" isWhite />
             <p className="text-sm text-gray-300">Somaliland Cancer Support Organization (SCSO)</p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-brand-light-purple">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-2">Jigjiga Yare, Hargeisa, Somaliland</p>
            <p className="text-sm text-gray-300 mb-2">Email: <a href="mailto:Scso.Official@gmail.com" className="hover:underline">Scso.Official@gmail.com</a></p>
            <p className="text-sm text-gray-300">Phone: +252 63-8760934</p>
          </div>
           <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-brand-light-purple">Donation Numbers</h3>
            <p className="text-sm text-gray-300 mb-2">ZAAD: 063-8812723</p>
            <p className="text-sm text-gray-300">E-Dahab: 746560</p>
          </div>
          <div className="md:col-span-1">
             <h3 className="text-lg font-semibold mb-4 text-brand-light-purple">Follow Us</h3>
             <div className="flex space-x-4">
                <SocialIcon href="#">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </SocialIcon>
                <SocialIcon href="#">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.067.087.606 1.885 2.364 3.264 4.449 3.303-1.771 1.387-3.999 2.212-6.423 2.212-.417 0-.829-.024-1.234-.072 2.286 1.46 5.007 2.312 7.942 2.312 9.471 0 14.655-7.843 14.655-14.655 0-.224-.005-.447-.015-.669.995-.717 1.861-1.611 2.55-2.651z"/></svg>
                </SocialIcon>
                 <SocialIcon href="#">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/></svg>
                </SocialIcon>
             </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Somaliland Cancer Support Organization. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
