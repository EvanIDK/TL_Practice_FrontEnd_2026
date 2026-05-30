import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MoreAboutContent } from '../../components/MoreAbout/MoreAboutContent'

describe('MoreAboutContent', () => {

  it('show correct title and text for "from" content', () => {
    const title = 'Polish zloty - PLN - zł'
    const  text = 'This is the official currency and legal tender of Poland. It is subdivided into 100 grosz-y (gr). It is the most traded currency in Central and Eastern Europe and ranks 21st most-traded in the foreign exchange market.'
    const  testId = 'more-about-from'

    render(<MoreAboutContent title={title} text={text} testId={testId} />)

    expect(screen.getByTestId(`${testId}-title`)).toHaveTextContent(title)
    expect(screen.getByTestId(`${testId}-text`)).toHaveTextContent(text)
  })

  it('show correct title and text for "to" content', () => {
    const title = 'Japanese yen - JPY - ¥'
    const  text = 'The yen is the official currency of Japan. It is the third-most traded currency in the foreign exchange market, after the United States dollar and the euro. It is also widely used as a third reserve currency after the US dollar and the euro.'
    const  testId = 'more-about-to'

    render(<MoreAboutContent title={title} text={text} testId={testId} />)

    expect(screen.getByTestId(`${testId}-title`)).toHaveTextContent(title)
    expect(screen.getByTestId(`${testId}-text`)).toHaveTextContent(text)
  })

})
