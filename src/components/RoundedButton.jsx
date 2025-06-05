import React from 'react';

const RoundedButton = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 focus:outline-none"
    >
      {text}
    </button>
  );
};

export default RoundedButton;