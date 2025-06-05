import { useCallback } from 'react';

export const useButtonClick = (message) => {
  return useCallback(() => {
    alert(message);
  }, [message]);
};