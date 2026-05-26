import styles from './MoreAbout.module.scss';

function MoreAboutButton(props: {
  currencyFrom: string;
  currencyTo: string;
}) {
  return (
    <a className={styles['more-about__button']} href="#">
      {props.currencyFrom}/{props.currencyTo}: about
    </a>
  );
}

export default MoreAboutButton;