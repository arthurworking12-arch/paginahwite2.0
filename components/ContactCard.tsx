import React from 'react';

const ContactCard: React.FC = () => {
  return (
    <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col items-center p-8">
        
        {/* Profile Image Container */}
        <div className="relative h-36 w-36 mb-6 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg transform hover:rotate-3 transition-transform duration-300">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
            alt="Profile picture" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent font-title leading-tight">
          Fale com nosso suporte e saiba e tire suas dúvidas.
        </h1>
        
        {/* Contact Button */}
        <a 
          href="https://wa.me/5500000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-4 px-6 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center gap-3 font-bold text-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-white"
        >
          <i className="fa-brands fa-whatsapp text-2xl"></i>
          Fale conosco no WhatsApp
        </a>
        
      </div>
    </div>
  );
};

export default ContactCard;