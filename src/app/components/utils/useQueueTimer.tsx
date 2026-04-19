import { useState, useEffect } from 'react';

export function useQueueTimer(maxSeconds: number = 3599) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev >= maxSeconds ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [maxSeconds]);

  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');

  return `${mins}:${secs}`;
}