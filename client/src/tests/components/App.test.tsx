import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { App } from '../../components/App/App';
import { type Currency } from '../../models/currency';
import currenciesJson from '../../mocks/currencies.json';

const currencies: Currency[] = currenciesJson;

describe('App', () => {
  it('hides the MoreAbout when changing the currency', async () => {
    render(<App />);
    const selectFrom = screen.getAllByRole('combobox')[0];
    await userEvent.selectOptions(selectFrom, currencies[0].code);
    const selectTo = screen.getAllByRole('combobox')[1];
    await userEvent.selectOptions(selectTo, currencies[1].code);

    const buttonMoreAbout = screen.getByRole('button', { name: /about/ });
    await userEvent.click(buttonMoreAbout);

    expect(screen.getByText(currencies[0].description)).toBeInTheDocument();
    expect(screen.getByText(currencies[1].description)).toBeInTheDocument();

    const select = screen.getAllByRole('combobox')[0];
    await userEvent.selectOptions(select, currencies[1].code);

    expect(screen.queryByText(currencies[0].description)).not.toBeInTheDocument();
    expect(screen.queryByText(currencies[1].description)).not.toBeInTheDocument();
  });

  it('It does not allow you to select a single currency pair', async () => {
    render(<App />);

    const selectFrom = screen.getAllByRole('combobox')[0];
    const selectTo = screen.getAllByRole('combobox')[1];
    await userEvent.selectOptions(selectFrom, currencies[0].code);
    await userEvent.selectOptions(selectTo, currencies[0].code);

    expect(selectFrom).not.toHaveValue(currencies[0].code);
    expect(selectTo).toHaveValue(currencies[0].code);

    await userEvent.selectOptions(selectTo, currencies[0].code);
    await userEvent.selectOptions(selectFrom, currencies[0].code);

    expect(selectTo).not.toHaveValue(currencies[0].code);
    expect(selectFrom).toHaveValue(currencies[0].code);
  });

  it('recalculation of conversion when changing the amount/pair', async () => {
    const EXPECTED_CAD_TO_PLN_RESULT = 22.125;
    render(<App />);

    const selectFrom = screen.getAllByRole('combobox')[0];
    await userEvent.selectOptions(selectFrom, 'CAD');
    const selectTo = screen.getAllByRole('combobox')[1];
    await userEvent.selectOptions(selectTo, 'PLN');

    const inputFrom = screen.getAllByRole('spinbutton')[0];
    await userEvent.clear(inputFrom);
    await userEvent.type(inputFrom, '7.5');

    expect(screen.getAllByRole('spinbutton')[1]).toHaveValue(EXPECTED_CAD_TO_PLN_RESULT);
  });

  it('rendering of selections and fields with mock data', async () => {
    const SelectLenght = 5;

    render(<App />);

    const selectFrom = screen.getAllByRole('combobox')[0];
    const options = within(selectFrom).getAllByRole('option');
    expect(options).toHaveLength(SelectLenght);

    const inputFrom = screen.getAllByRole('spinbutton')[0];
    expect(inputFrom).toHaveValue(1);
  });
});
