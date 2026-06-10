import { useState } from 'react';

import { type Currency } from '../models/currency';
import { type PriceChange } from '../models/priceChange';

import currenciesJson from '../mocks/currencies.json';
import priceChangeJson from '../mocks/priceChanges.json';

const currencies: Currency[] = currenciesJson;
const priceChanges: Record<string, Record<string, PriceChange>> = priceChangeJson;

const changeSimilarCurrency = (left: Currency, right: Currency): Currency => {
  if (left.code === right.code) {
    const fallback = currencies.find((currency) => currency.code !== left.code);
    if (fallback) {
      return fallback;
    }
  }
  return right;
};

export const useConverter = () => {
  const [from, setFrom] = useState(currencies[0]);
  const [to, setTo] = useState(currencies[1]);
  const [amount, setAmount] = useState('1');

  const roundUp = 3;

  const rate = priceChanges[from.code][to.code].price;
  const result = (Number(amount) * rate).toFixed(roundUp);

  const handleFromChange = (newFromCode: string) => {
    const newFrom = currencies.find((currency) => currency.code === newFromCode);
    if (newFrom === undefined) {
      return;
    }
    setTo(changeSimilarCurrency(newFrom, to));
    setFrom(newFrom);
  };

  const handleToChange = (newToCode: string) => {
    const newTo = currencies.find((currency) => currency.code === newToCode);
    if (newTo === undefined) {
      return;
    }
    setFrom(changeSimilarCurrency(newTo, from));
    setTo(newTo);
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };
  return { handleFromChange, handleToChange, handleSwap, setAmount, result, from, to, amount, currencies, priceChanges };
};
