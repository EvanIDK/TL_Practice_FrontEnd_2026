import styles from './MoreAbout.module.scss';

function MoreAboutButton(props: { currencyFrom: string; currencyTo: string }) {
  return (
    <a className={styles.button} href="#">
      {props.currencyFrom}/{props.currencyTo}: about
    </a>
  );
}

export default MoreAboutButton;
