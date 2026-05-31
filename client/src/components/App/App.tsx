import { useState } from 'react';

import styles from './App.module.scss';

import { ConversionHeader } from '../ConversionHeader/ConversionHeader';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';
import { MoreAbout } from '../MoreAbout/MoreAbout';

import { type Currency } from '../../models/currency';
import { type PriceChange} from '../../models/priceChange';

import currenciesJson from '../../mocks/currencies.json';
import priceChangeJson from '../../mocks/priceChanges.json';

const currencies: Currency[] = currenciesJson;
const priceChanges: Record<string, Record<string, PriceChange>> = priceChangeJson;

export const App = () => {
  const [from, setFrom] = useState('PLN');
  const [to, setTo] = useState('JPY');
  const [amount, setAmount] = useState('1');

  const roundUp = 3;

  const fallBackTitle = 'No title';
  const fallBackText = 'No description'

  const rate = priceChanges[from][to].price;
  const result = (Number(amount) * rate).toFixed(roundUp);

  const currencyfrom = currencies.find(currencies => currencies.code === from);
  const currencyto = currencies.find(currencies => currencies.code === to);

  const handleFromChange = (newFrom: string) => {
    if(newFrom === to) {
      const fallback = currencies.find((currency) => currency.code !== newFrom);
      if (fallback) {
        setTo(fallback.code)
      }
    }
    setFrom(newFrom)
  }

  const handleToChange = (newTo: string) => {
    if(newTo === from) {
      const fallback = currencies.find((currency) => currency.code !== newTo);
      if (fallback) {
        setFrom(fallback.code)
      }
    }
    setTo(newTo)
  }

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ConversionHeader 
          title={`${amount} ${currencyfrom?.name} is`}
          subtitle={`${result} ${currencyto?.name}`}
        />
        <div className={styles.selects}>
          <CurrencySelect 
            amount={amount} 
            currency={from}
            testId={'currency-select-from'}
            currenciesList={currencies}
            onAmountChange={(value) => setAmount(value)} 
            onCurrencyChange={handleFromChange}
          />
          <button className={styles.swap} onClick={handleSwap}>swap</button>
          <CurrencySelect 
            amount={result} 
            currency={to} 
            testId={'currency-select-to'}
            currenciesList={currencies}
            onAmountChange={(value) => setAmount(value)} 
            onCurrencyChange={handleToChange}
          />
        </div>
        <MoreAbout
          key={`${from}${to}`} //key нужен здесь для пересоздания moreabout при смене валют в селекте. В селекте поменяли валюту - key изменился, соответственно moreabout создасться заново и isVisible снова false. 
          currencyFrom={from}
          currencyTo={to}
          titleFrom={currencyfrom?.name ?? fallBackTitle}
          textFrom={currencyfrom?.description ?? fallBackText}
          titleTo={currencyto?.name ?? fallBackTitle}
          textTo={currencyto?.description ?? fallBackText}
        />
      </div>
    </div>
  );
}
