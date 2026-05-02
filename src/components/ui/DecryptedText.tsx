import { useEffect, useState } from 'react';

interface DecryptedTextProps {
  text: string;
  delay?: number;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const DecryptedText = ({ text, delay = 0 }: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }

              if (letter === ' ') {
                return ' ';
              }

              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(''),
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);

      if (interval) {
        clearInterval(interval);
      }
    };
  }, [text, delay]);

  return <span className="font-mono">{displayText || '\u00A0'}</span>;
};

export default DecryptedText;
