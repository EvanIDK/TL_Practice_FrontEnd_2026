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
    <div className={styles.wrapper} data-testid="more-about">
      <MoreAboutButton from={currencyFrom} to={currencyTo} testId={"more-about"}/>
      <MoreAboutContent title={titleFrom} text={textFrom} testId={"more-about-from"}/>
      <MoreAboutContent title={titleTo} text={textTo} testId={"more-about-to"}/>
    </div>
  );
};
