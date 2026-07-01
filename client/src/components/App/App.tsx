import styles from './App.module.scss';

import { ConversionHeader } from '../ConversionHeader/ConversionHeader';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';
import { MoreAbout } from '../MoreAbout/MoreAbout';

import { useConverter } from '../../hooks/useConverter';

const fallBackTitle = 'No title';
const fallBackText = 'No description';

export const App = () => {
  const { handleFromChange, handleToChange, handleSwap, setAmount, result, from, to, amount, currencies, priceChanges } =
    useConverter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ConversionHeader title={`${amount} ${from.name} is`} subtitle={`${result} ${to.name}`} date={priceChanges[from.code][to.code].dateTime}/>
        <div className={styles.selects}>
          <CurrencySelect
            amount={amount}
            currency={from.code}
            testId={'currency-select-from'}
            currenciesList={currencies}
            onAmountChange={(value) => setAmount(value)}
            onCurrencyChange={handleFromChange}
          />
          <button className={styles.swap} onClick={handleSwap}>
            swap
          </button>
          <CurrencySelect
            amount={result}
            currency={to.code}
            testId={'currency-select-to'}
            currenciesList={currencies}
            onAmountChange={(value) => setAmount(value)}
            onCurrencyChange={handleToChange}
          />
        </div>
        <MoreAbout
          key={`${from.code}${to.code}`} //key нужен здесь для пересоздания moreabout при смене валют в селекте. В селекте поменяли валюту - key изменился, соответственно moreabout создасться заново и isVisible снова false.
          currencyFrom={from.code}
          currencyTo={to.code}
          titleFrom={from.name ?? fallBackTitle}
          textFrom={from.description ?? fallBackText}
          titleTo={to.name ?? fallBackTitle}
          textTo={to.description ?? fallBackText}
        />
      </div>
    </div>
  );
};
