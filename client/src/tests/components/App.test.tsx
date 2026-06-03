import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { App } from '../../components/App/App'

describe('App', () => {
    const SelectLenght = 5;

    it('hides the MoreAbout when changing the currency', async () => {
        render(<App />)

        const button = screen.getByTestId('more-about-button')
        await userEvent.click(button)

        expect(screen.getByTestId('more-about-from-content')).toBeInTheDocument()
        expect(screen.getByTestId('more-about-to-content')).toBeInTheDocument()


        const select = screen.getByTestId('currency-select-from-select')
        await userEvent.selectOptions(select, 'CAD')

        expect(screen.queryByTestId('more-about-from-content')).not.toBeInTheDocument()
        expect(screen.queryByTestId('more-about-to-content')).not.toBeInTheDocument()
    })

    it('It does not allow you to select a single currency pair', async () => {
        render(<App />)

        const selectFrom = screen.getByTestId('currency-select-from-select')
        await userEvent.selectOptions(selectFrom, 'CAD')
        const selectTo = screen.getByTestId('currency-select-to-select')
        await userEvent.selectOptions(selectTo, 'CAD')

        expect(screen.queryByTestId('currency-select-from-select')).not.toHaveValue('CAD')
        expect(selectTo).toHaveValue('CAD')
    })

    it('recalculation of conversion when changing the amount/pair', async () => {
        const EXPECTED_CAD_TO_PLN_RESULT = 22.125;
        render(<App />)

        const selectFrom = screen.getByTestId('currency-select-from-select')
        await userEvent.selectOptions(selectFrom, 'CAD')
        const selectTo = screen.getByTestId('currency-select-to-select')
        await userEvent.selectOptions(selectTo, 'PLN')

        const inputFrom = screen.getByTestId('currency-select-from-input')
        await userEvent.clear(inputFrom)
        await userEvent.type(inputFrom, '7.5')

        expect(screen.getByTestId('currency-select-to-input')).toHaveValue(EXPECTED_CAD_TO_PLN_RESULT)
    })

    it('rendering of selections and fields with mock data', async () => {

        render(<App />)

        const selectFrom = screen.getByTestId('currency-select-from-select')
        const options = within(selectFrom).getAllByRole('option')
        expect(options).toHaveLength(SelectLenght)

        const inputFrom = screen.getByTestId('currency-select-from-input')
        expect(inputFrom).toHaveValue(1)
    })
})
