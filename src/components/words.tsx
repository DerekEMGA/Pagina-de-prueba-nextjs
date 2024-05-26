import React, { useState, useEffect } from 'react';
import styles from '../styles/word.module.css'; 

const words = ["Palabra 1", "Palabra 2", "Palabra 3"];

const WordAnimation: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wordcontainer}>
        {words.map((word, index) => (
          <span
            key={index}
            className={`${styles.word} ${index === currentWordIndex ? styles.visible : ''}`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default WordAnimation;
