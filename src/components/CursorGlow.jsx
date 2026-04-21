import { useEffect } from 'react';

const CursorGlow = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.id = 'cursor-glow';
    cursor.className = 'fixed w-32 h-32 bg-primary/30 rounded-full pointer-events-none z-40 blur-xl mix-blend-multiply opacity-0 transition-all duration-300 mix-blend-difference';
    document.body.appendChild(cursor);

    const cursorInner = document.createElement('div');
    cursorInner.id = 'cursor-inner';
    cursorInner.className = 'fixed w-8 h-8 bg-primary rounded-full pointer-events-none z-50 border-2 border-primary/50';
    document.body.appendChild(cursorInner);

    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor.style.opacity = '1';
      
      cursorInner.style.left = `${x}px`;
      cursorInner.style.top = `${y}px`;
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorInner.style.opacity = '0';
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorInner);
    };
  }, []);

  return null;
};

export default CursorGlow;