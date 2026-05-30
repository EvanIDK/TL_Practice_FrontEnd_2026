import type { ReactElement } from 'react';
import styles from './CurrencySelect.module.scss';

type CurrencySelectProps = {
  amount: number;
  currency: string;
};

export const CurrencySelect = ({ amount, currency }: CurrencySelectProps): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="number" defaultValue={amount} name={`amount-${currency}`} />
      <select
        className={styles.select}
        name={`currency-${currency}`}
        id={`currency-${currency}`}
        defaultValue={currency}
      >
        <option value="USD">USD</option>
        <option value="RUB">RUB</option>
        <option value="JPY">JPY</option>
        <option value="PLN">PLN</option>
      </select>
    </div>
  );
};
