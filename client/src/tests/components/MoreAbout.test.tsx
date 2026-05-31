import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { MoreAbout } from '../../components/MoreAbout/MoreAbout'

describe('MoreAbout', () => {

  const props = {
    key: '',
    currencyFrom: 'PLN',
    currencyTo: 'JPY',
    titleFrom: 'Polish zloty - PLN - zł',
    textFrom: 'This is the official currency and legal tender of Poland. It is subdivided into 100 grosz-y (gr). It is the most traded currency in Central and Eastern Europe and ranks 21st most-traded in the foreign exchange market.',
    titleTo: 'Japanese yen - JPY - ¥',
    textTo: 'The yen is the official currency of Japan. It is the third-most traded currency in the foreign exchange market, after the United States dollar and the euro. It is also widely used as a third reserve currency after the US dollar and the euro.'
  }

  it('hide content by default', () => {
    render(<MoreAbout {...props} />)

    expect(screen.queryByTestId('more-about-from-content')).not.toBeInTheDocument()
    expect(screen.queryByTestId('more-about-to-content')).not.toBeInTheDocument()
  })

  it('show content when click button', async () => {
    render(<MoreAbout {...props} />)

    const button = screen.getByTestId('more-about-button')
    await userEvent.click(button)

    expect(screen.getByTestId('more-about-from-content')).toBeInTheDocument()
    expect(screen.getByTestId('more-about-to-content')).toBeInTheDocument()
  })

  it('hide content when click button twice', async () => {
    render(<MoreAbout {...props} />)

    const button = screen.getByTestId('more-about-button')
    await userEvent.click(button)
    await userEvent.click(button)

    expect(screen.queryByTestId('more-about-from-content')).not.toBeInTheDocument()
    expect(screen.queryByTestId('more-about-to-content')).not.toBeInTheDocument()
  })

})
