import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MoreAboutContent } from '../../components/MoreAbout/MoreAboutContent'

describe('MoreAboutContent', () => {

  it('show correct title and text for "from" content', () => {
    const props = {
      title: 'Polish zloty - PLN - zł',
      text: 'This is the official currency...',
      testId: 'more-about-from',
    }

    render(<MoreAboutContent {...props} />)

    expect(screen.getByTestId(`${props.testId}-title`)).toHaveTextContent(props.title)
    expect(screen.getByTestId(`${props.testId}-text`)).toHaveTextContent(props.text)
  })

  it('show correct title and text for "to" content', () => {
    const props = {
      title: 'Japanese yen - JPY - ¥',
      text: 'The yen is the official currency...',
      testId: 'more-about-to',
    }

    render(<MoreAboutContent {...props} />)

    expect(screen.getByTestId(`${props.testId}-title`)).toHaveTextContent(props.title)
    expect(screen.getByTestId(`${props.testId}-text`)).toHaveTextContent(props.text)
  })

})