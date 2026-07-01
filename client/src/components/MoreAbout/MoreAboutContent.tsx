import styles from './MoreAbout.module.scss';

type MoreAboutContentProps = {
  title: string;
  text: string;
  testId: string;
};

export const MoreAboutContent = ({ title, text, testId }: MoreAboutContentProps) => {
  return (
    <div className={styles.content} data-testid={`${testId}-content`}>
      <h3 className={styles.title} data-testid={`${testId}-title`}>
        {title}
      </h3>
      <p className={styles.text} data-testid={`${testId}-text`}>
        {text}
      </p>
    </div>
  );
};
