import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    const update = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setPos({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', update, { passive: true });
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return pos;
}
