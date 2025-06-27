// src/components/LoadingSpinner.jsx
import React from 'react';
import {assets} from '../assets/assets'

const LoadingSpinner = () => {
 return (
    <div className="fixed inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      {/* Optional College Logo */}
      <img
        src={assets.logo}
        alt="College Logo"
        className="w-20 h-20 mb-4 animate-pulse"
      />

      {/* College Name */}
      <h1 className="text-xl font-bold text-blue-900 mb-2 text-center">
        Late Adv. Ku Shalaka Santosh Khandage Law College
      </h1>

      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-blue-700 border-t-transparent rounded-full animate-spin"></div>

      {/* Subtext */}
      <p className="mt-3 text-sm text-gray-700 font-medium tracking-wide">
        Please wait while we load the content...
      </p>
    </div>
  );
};

export default LoadingSpinner;
