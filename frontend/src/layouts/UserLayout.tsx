import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { MessageSquare } from 'lucide-react';

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Fixed WhatsApp Button */}
      <a 
        href="https://wa.me/5543999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageSquare size={32} />
      </a>
    </div>
  );
};

export default UserLayout;
