import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MoreAboutButton } from '../../components/MoreAbout/MoreAboutButton';

describe('MoreAboutButton', () => {
  const props = {
    currencyFrom: 'PLN',
    currencyTo: 'JPY',
    testId: 'more-about',
    onButtonClick: () => {}
  };

  it('render MoreAbout button', () => {
    render(<MoreAboutButton {...props} />);

    expect(screen.getByTestId(`${props.testId}-button`)).toBeInTheDocument();
  });

  it('show correct text for button', () => {
    render(<MoreAboutButton {...props} />);

    expect(screen.getByTestId(`${props.testId}-button`)).toHaveTextContent(
      `${props.currencyFrom}/${props.currencyTo}: about`
    );
  });
});
