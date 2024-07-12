import React from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function Hidden() {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  useEffect(() => {
    // Clear authentication when the component unmounts
    return () => {
      localStorage.removeItem('authenticated');
    };
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
          <h1 className="text-4xl font-bold text-pink-500 mb-4 transition-transform transform hover:scale-105">
            Happy Anniversary!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            You are now logged in and can view this special message.
          </p>
          <div className="relative">
            <div className="animate-float absolute -bottom-14 -left-6 text-5xl text-pink-300">&#10084;</div>
            <div className="animate-float animation-delay-2000 absolute -top-10 -right-1 text-4xl text-pink-300">&#10084;</div>
            <div className="animate-float animation-delay-4000 absolute -bottom-3 -left-4 text-6xl text-pink-300">&#10084;</div>
            <div className="animate-float animation-delay-6000 absolute -bottom-12 -right-6 text-5xl text-pink-300">&#10084;</div>
          </div>
          <div className="text-pink-500 text-lg mt-4 transition-transform transform hover:scale-110 duration-1000">
            <p>To the love of my life,</p>
            <p className="mt-2">You make every moment special and magical. </p>
            <p className='mt-2'>I dont see any moment in my future without you. </p>
            <p className='mt-2'>Thank you for letting me love you, its the best decision i've made. </p>
            
            <p className='mt-2'>When I see your smile, my heart melts for you always.</p>
            <p className="mt-2">Here's to many more wonderful months and years together!</p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-4">
          To Roshni
        </div>
        <div className="text-center text-gray-500 text-sm mt-4">
          07/20/2024
        </div>
      </div>
    </>
  );
}

export default Hidden;