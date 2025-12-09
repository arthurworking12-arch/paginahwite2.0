import React from 'react';
import ContactCard from './components/ContactCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 text-white font-body">
      <ContactCard />
    </div>
  );
};

export default App;