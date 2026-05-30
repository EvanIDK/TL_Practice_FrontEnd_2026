import styles from './App.module.scss';

import { ConversionHeader } from './components/ConversionHeader/ConversionHeader';
import { CurrencySelect } from './components/CurrencySelect/CurrencySelect';
import { MoreAbout } from './components/MoreAbout/MoreAbout';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ConversionHeader />
        <div className={styles.selects}>
          <CurrencySelect amount={1} currency="PLN" />
          <CurrencySelect amount={1} currency="JPY" />
        </div>
        <MoreAbout
          currencyFrom="PLN"
          currencyTo="JPY"
          titleFrom="Polish zloty - PLN - zł"
          textFrom="This is the official currency and legal tender of Poland. It is subdivided into 100 grosz-y (gr). It is the most traded currency in Central and Eastern Europe and ranks 21st most-traded in the foreign exchange market."
          titleTo="Japanese yen - JPY - ¥"
          textTo="The yen is the official currency of Japan. It is the third-most traded currency in the foreign exchange market, after the United States dollar and the euro. It is also widely used as a third reserve currency after the US dollar and the euro."
        />
      </div>
    </div>
  );
}
