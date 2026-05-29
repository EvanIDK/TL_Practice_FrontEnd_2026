import { MoreAboutButton } from './MoreAboutButton';
import { MoreAboutContent } from './MoreAboutContent';
import styles from './MoreAbout.module.scss';

type MoreAboutProps = {
  currencyFrom: string;
  currencyTo: string;
  titleFrom: string;
  textFrom: string;
  titleTo: string;
  textTo: string;
};

export const MoreAbout = ({ currencyFrom, currencyTo, titleFrom, textFrom, titleTo, textTo }: MoreAboutProps) => {
  return (
    <div className={styles.wrapper}>
      <MoreAboutButton currencyFrom={currencyFrom} currencyTo={currencyTo} />
      <MoreAboutContent title={titleFrom} text={textFrom} />
      <MoreAboutContent title={titleTo} text={textTo} />
    </div>
  );
};
