import React from 'react';
import Ball from './components/Ball';

const Home: React.FC = () => {
  console.log("login");
  
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-100">
      <Ball />
    </div>
  );
};

export default Home;
