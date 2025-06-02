'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import SDesgin1 from './s-design1/s-design1';
import SDesgin2 from './s-design2/s-design2';
import SDesgin3 from './s-design3/s-design3';

type CounterVariant = 'A' | 'B' | 'C';

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [variant, setVariant] = useState<CounterVariant>('A');
  const [isAnimating, setIsAnimating] = useState(false);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  const handleVariantDisplay = (variant: CounterVariant) => {
    switch (variant) {
      case 'A':
        return (
          <SDesgin1 count={count} increment={increment} decrement={decrement} />
        );
      case 'B':
        return <SDesgin2 count={count} setCount={setCount} />;
      case 'C':
        return (
          <SDesgin3 count={count} increment={increment} decrement={decrement} />
        );
      default:
        return (
          <SDesgin1 count={count} increment={increment} decrement={decrement} />
        );
    }
  };

  return (
    <main className={styles.main}>
      <div
        className={`${styles.container} ${variant === 'C' ? styles.altShape : ''}`}
      >
        <h1 className={styles.title}>Counter App {variant}</h1>
        {handleVariantDisplay(variant)}
        <button id="resetButton" className={styles.button} onClick={reset}>
          Reset
        </button>
        <div className={styles.variantButtons}>
          <button
            className={`${styles.button} ${variant === 'A' ? styles.selected : ''}`}
            onClick={() => setVariant('A')}
          >
            Counter A
          </button>
          <button
            className={`${styles.button} ${variant === 'B' ? styles.selected : ''}`}
            onClick={() => setVariant('B')}
          >
            Counter B
          </button>
          <button
            className={`${styles.button} ${variant === 'C' ? styles.selected : ''}`}
            onClick={() => setVariant('C')}
          >
            Counter C
          </button>
        </div>
      </div>
    </main>
  );
}
