import styles from './s-design1.module.css';

interface SDesgin1Props {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const SDesgin1 = ({ count, increment, decrement }: SDesgin1Props) => {
  return (
    <div className={styles.container}>
      <button className={styles.svgButton} onClick={increment}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z"
          />
        </svg>
      </button>
      <p className={styles.count}>{count}</p>
      <button className={styles.svgButton} onClick={decrement}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#333"
        >
          <rect x="0" y="0" width="1024" height="1024" rx="8" fill="none" />
          <path d="M512 0c283 0 512 229 512 512s-229 512-512 512S0 795 0 512S229 0 512 0zm0 961c247 0 448-202 448-449S759 64 512 64S64 265 64 512s201 449 448 449zm-35-417H288c-18 0-32-14-32-32s14-32 32-32h448c18 0 32 14 32 32s-14 32-32 32H477z" />
        </svg>
      </button>
    </div>
  );
};
export default SDesgin1;
