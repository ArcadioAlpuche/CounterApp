'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import SDesgin1 from './s-design1/s-design1';
import SDesgin2 from './s-design2/s-design2';

type CounterVariant = 'A' | 'B';

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [variant, setVariant] = useState<CounterVariant>('A');

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Counter App {variant}</h1>
        {variant === 'A' ? (
          <SDesgin1 count={count} increment={increment} decrement={decrement} />
        ) : (
          <SDesgin2 count={count} setCount={setCount} />
        )}
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
        </div>
      </div>
    </main>
  );
}
