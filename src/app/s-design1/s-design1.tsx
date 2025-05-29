import styles from './s-design1.module.css';

interface SDesgin1Props {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const SDesgin1: React.FC<SDesgin1Props> = ({ count, increment, decrement }) => {
  return (
    <div className={styles.container}>
      <button className={styles.svgButton} onClick={increment}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="25px"
          height="25px"
        >
          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z" />
        </svg>
      </button>
      <p className={styles.count}>{count}</p>
      <button className={styles.svgButton} onClick={decrement}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <rect x="0" y="0" width="1024" height="1024" rx="8" fill="none" />
          <path d="M512 0c283 0 512 229 512 512s-229 512-512 512S0 795 0 512S229 0 512 0zm0 961c247 0 448-202 448-449S759 64 512 64S64 265 64 512s201 449 448 449zm-35-417H288c-18 0-32-14-32-32s14-32 32-32h448c18 0 32 14 32 32s-14 32-32 32H477z" />
        </svg>
      </button>
    </div>
  );
};
export default SDesgin1;
