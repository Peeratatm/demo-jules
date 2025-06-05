import { useState } from 'react';

export const useButtonLogic = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    console.log('Button clicked!');
    setClicked(!clicked);
  };

  return { clicked, handleClick };
};