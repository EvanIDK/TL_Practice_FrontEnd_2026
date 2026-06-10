import styles from './ConversionHeader.module.scss';

type ConversionHeaderProps = {
  title: string;
  subtitle: string;
  date: string;
};

export const ConversionHeader = ({ title, subtitle, date }: ConversionHeaderProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.subtitle}>{title}</span>
      <span className={styles.title}>{subtitle}</span>
      <span className={styles.date}>{date}</span>
    </div>
  );
};
