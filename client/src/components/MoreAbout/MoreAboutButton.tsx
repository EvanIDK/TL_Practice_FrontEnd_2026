import styles from './MoreAbout.module.scss';

type MoreAboutButtonProps = {
  from: string;
  to: string;
  testId: string
};

export const MoreAboutButton = ({ from, to, testId }: MoreAboutButtonProps) => {
  return (
    <button className={styles.button} data-testid={`${testId}-button`}>
      {from}/{to}: about
    </button>
  );
};
