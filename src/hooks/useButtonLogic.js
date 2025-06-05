import { useState } from 'react';

export const useButtonLogic = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log('Button was clicked!');
  };

  return { clicked, handleClick };
};