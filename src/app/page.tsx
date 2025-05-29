'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import SDesgin1 from './s-design1/s-design1';

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
        <h1 className={styles.title}>Counter App</h1>
        {variant === 'A' ? (
          <SDesgin1 count={count} increment={increment} decrement={decrement} />
        ) : (
          <CounterB count={count} increment={increment} decrement={decrement} />
        )}
        <button id="resetButton" className={styles.button} onClick={reset}>
          Reset
        </button>
        <div>
          <button onClick={() => setVariant('A')}>Use Counter A</button>
          <button onClick={() => setVariant('B')}>Use Counter B</button>
        </div>
      </div>
    </main>
  );
}
