import type { ReactElement } from 'react';
import styles from './CurrencySelect.module.scss';

import { type Currency } from '../../models/currency';

type CurrencySelectProps = {
  amount: string;
  currency: string;
  testId: string;
  currenciesList: Currency[];
  onAmountChange: (value: string) => void;
  onCurrencyChange: (value: string) => void;
};

export const CurrencySelect = ({
  amount,
  currency,
  testId,
  currenciesList,
  onAmountChange,
  onCurrencyChange
}: CurrencySelectProps): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <input
        data-testid={`${testId}-input`}
        className={styles.input}
        type="number"
        value={amount}
        onChange={(event) => onAmountChange(event.target.value)}
      />
      <select
        data-testid={`${testId}-select`}
        className={styles.select}
        value={currency}
        onChange={(event) => onCurrencyChange(event.target.value)}
      >
        {currenciesList.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code}
          </option>
        ))}
      </select>
    </div>
  );
};
