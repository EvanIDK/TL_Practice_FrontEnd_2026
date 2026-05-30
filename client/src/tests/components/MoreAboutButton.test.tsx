import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MoreAboutButton } from '../../components/MoreAbout/MoreAboutButton'

describe('MoreAboutButton', () => {
    const props = {
        from: 'PLN',
        to: 'JPY',
        testId: 'more-about'
    }
    it('render MoreAbout button', () => {
        render(<MoreAboutButton {...props} />)

        expect(screen.getByTestId(`${props.testId}-button`)).toBeInTheDocument()
    })

    it('show correct text for button', () => {
    render(<MoreAboutButton {...props} />)

    expect(screen.getByTestId(`${props.testId}-button`)).toHaveTextContent(`${props.from}/${props.to}: about`)
    })
})