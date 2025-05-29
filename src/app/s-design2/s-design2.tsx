import React from 'react';
import styles from './s-design2.module.css';

interface SDesgin2Props {
  count: number;
  setCount: (value: number) => void;
}

const SDesgin2 = ({ count, setCount }: SDesgin2Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.count}>{count}</p>
      <input
        className={styles.slider}
        type="range"
        name="volume"
        min="0"
        max="100"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
    </div>
  );
};
export default SDesgin2;
