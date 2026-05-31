import styles from './ConversionHeader.module.scss';

type ConversionHeaderProps = {
  title: string;
  subtitle: string;
}

export const ConversionHeader = ({
  title,
  subtitle,
  }: ConversionHeaderProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.subtitle}>{title}</span>
      <span className={styles.title}>{subtitle}</span>
      <span className={styles.date}>Fri, 05 Apr 2026 10:35 UTC</span>
    </div>
  );
};
