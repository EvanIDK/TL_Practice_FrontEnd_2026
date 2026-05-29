import styles from './ConversionHeader.module.scss';

function ConversionHeader() {
  return (
    <div className={styles['conversion-header']}>
      <span className={styles.subtitle}>1 Polish zloty is</span>
      <span className={styles.title}>0.99 Japanese yen</span>
      <span className={styles.date}>Fri, 05 Apr 2026 10:35 UTC</span>
    </div>
  );
}

export default ConversionHeader;
