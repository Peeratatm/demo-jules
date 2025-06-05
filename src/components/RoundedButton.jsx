import React from 'react';

const RoundedButton = ({ onClick, children }) => {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full transition-all hover:scale-105 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundedButton;