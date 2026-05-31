  import { MoreAboutButton } from './MoreAboutButton';
  import { MoreAboutContent } from './MoreAboutContent';
  import styles from './MoreAbout.module.scss';
  import { useState } from 'react';


  type MoreAboutProps = {
    key: string;
    currencyFrom: string;
    currencyTo: string;
    titleFrom: string;
    textFrom: string;
    titleTo: string;
    textTo: string;
  };

  export const MoreAbout = ({ currencyFrom, currencyTo, titleFrom, textFrom, titleTo, textTo }: MoreAboutProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ChangeVisible = () => {
      setIsVisible(isVisible => !isVisible)
    };
    return (
      
      <div className={styles.wrapper} data-testid="more-about">
        <MoreAboutButton currencyFrom={currencyFrom} currencyTo={currencyTo} onButtonClick={ChangeVisible} testId={"more-about"}/>
        {isVisible && (
          <>  
            <MoreAboutContent title={titleFrom} text={textFrom} testId={"more-about-from"}/>
            <MoreAboutContent title={titleTo} text={textTo} testId={"more-about-to"}/>
          </>
        )}
      </div>
    );
  };
