import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { App } from '../../components/App/App'

describe('App', () => {

    it('hides the MoreAbout when changing the currency', async () => {
        render(<App />)

        const buttonMoreAbout = screen.getByRole('button', {name: /about/})
        await userEvent.click(buttonMoreAbout)

        expect(screen.getByTestId('more-about-from-content')).toBeInTheDocument()
        expect(screen.getByTestId('more-about-to-content')).toBeInTheDocument()


        const select = screen.getAllByRole('combobox')[0]
        await userEvent.selectOptions(select, 'AUD')

        expect(screen.queryByTestId('more-about-from-content')).not.toBeInTheDocument()
        expect(screen.queryByTestId('more-about-to-content')).not.toBeInTheDocument()
    })

    it('It does not allow you to select a single currency pair', async () => {
        render(<App />)

        const selectFrom = screen.getAllByRole('combobox')[0]
        await userEvent.selectOptions(selectFrom, 'CAD')
        const selectTo = screen.getAllByRole('combobox')[1]
        await userEvent.selectOptions(selectTo, 'CAD')

        expect(selectFrom).not.toHaveValue('CAD')
        expect(selectTo).toHaveValue('CAD')
    })

    it('recalculation of conversion when changing the amount/pair', async () => {
        const EXPECTED_CAD_TO_PLN_RESULT = 22.125;
        render(<App />)

        const selectFrom = screen.getAllByRole('combobox')[0]
        await userEvent.selectOptions(selectFrom, 'CAD')
        const selectTo = screen.getAllByRole('combobox')[1]
        await userEvent.selectOptions(selectTo, 'PLN')

        const inputFrom = screen.getAllByRole('spinbutton')[0]
        await userEvent.clear(inputFrom)
        await userEvent.type(inputFrom, '7.5')

        expect(screen.getAllByRole('spinbutton')[1]).toHaveValue(EXPECTED_CAD_TO_PLN_RESULT)
    })

    it('rendering of selections and fields with mock data', async () => {
        const SelectLenght = 5;

        render(<App />)

        const selectFrom = screen.getAllByRole('combobox')[0]
        const options = within(selectFrom).getAllByRole('option')
        expect(options).toHaveLength(SelectLenght)

        const inputFrom = screen.getAllByRole('spinbutton')[0]
        expect(inputFrom).toHaveValue(1)
    })
})
