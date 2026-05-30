import styles from './MoreAbout.module.scss';

type MoreAboutButtonProps = {
  currencyFrom: string;
  currencyTo: string;
  testId: string
};

export const MoreAboutButton = ({ currencyFrom, currencyTo, testId }: MoreAboutButtonProps) => {
  return (
    <button className={styles.button} data-testid={`${testId}-button`}>
      {currencyFrom}/{currencyTo}: about
    </button>
  );
};
