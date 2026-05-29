import MoreAboutButton from './MoreAboutButton';
import MoreAboutContent from './MoreAboutContent';
import styles from './MoreAbout.module.scss';

function MoreAbout(props: {
  currencyFrom: string;
  currencyTo: string;
  titleFrom: string;
  textFrom: string;
  titleTo: string;
  textTo: string;
}) {
  return (
    <div className={styles['more-about']}>
      <MoreAboutButton currencyFrom={props.currencyFrom} currencyTo={props.currencyTo} />
      <MoreAboutContent title={props.titleFrom} text={props.textFrom} />
      <MoreAboutContent title={props.titleTo} text={props.textTo} />
    </div>
  );
}

export default MoreAbout;
