import styles from './MoreAbout.module.scss';

type MoreAboutButtonProps = {
  currencyFrom: string;
  currencyTo: string;
};

export const MoreAboutButton = ({ currencyFrom, currencyTo }: MoreAboutButtonProps) => {
  return (
    <a className={styles.button} href="#">
      {currencyFrom}/{currencyTo}: about
    </a>
  );
};
