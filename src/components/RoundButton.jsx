import React from 'react';

const RoundButton = ({ onClick, children }) => {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundButton;