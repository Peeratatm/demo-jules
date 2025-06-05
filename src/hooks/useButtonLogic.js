import { useCallback } from 'react';

export const useButtonLogic = () => {
  const handleClick = useCallback(() => {
    alert('Button clicked!');
  }, []);

  return { handleClick };
};