import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigationHotkeys = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      const hotkeys = {
        '1': '/',
        '2': '/projects', 
        '3': '/contacts'
      };

      if (hotkeys[e.key]) {
        navigate(hotkeys[e.key]);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);
};