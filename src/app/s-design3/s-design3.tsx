import { useEffect } from 'react';
import styles from './s-design3.module.css';
interface SDesign3Props {
  count: number;
  increment: () => void;
  decrement: () => void;
}
const SDesign3 = ({ count, increment, decrement }: SDesign3Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') increment();
      if (e.key === 'ArrowDown') decrement();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Use your keyboard arrow keys to increase or decrease count.
      </p>
      <p className={styles.count}>{count}</p>
    </div>
  );
};
export default SDesign3;
