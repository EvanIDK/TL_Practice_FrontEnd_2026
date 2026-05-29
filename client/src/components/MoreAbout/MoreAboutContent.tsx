import styles from './MoreAbout.module.scss';

type MoreAboutContentProps = {
  title: string;
  text: string;
};

export const MoreAboutContent = ({ title, text }: MoreAboutContentProps) => {
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
