import styles from './MoreAbout.module.scss';

type MoreAboutButtonProps = {
  currencyFrom: string;
  currencyTo: string;
  testId: string;
  onButtonClick: () => void;
};

export const MoreAboutButton = ({ currencyFrom, currencyTo, testId, onButtonClick }: MoreAboutButtonProps) => {
  return (
    <button className={styles.button} data-testid={`${testId}-button`} onClick={onButtonClick}>
      {currencyFrom}/{currencyTo}: about
    </button>
  );
};
