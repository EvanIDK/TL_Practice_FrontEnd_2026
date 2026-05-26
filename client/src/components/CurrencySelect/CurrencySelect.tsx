import styles from './CurrencySelect.module.scss';

function CurrencySelect(props: {amount: number; currency: string})
{
    return (
        <div className={styles['currency-select']}>        
            <input className={styles['currency-select__input']} type="number" defaultValue={props.amount} name={`amount-${props.currency}`}/>
                <select className={styles['currency-select__select']} name={`currency-${props.currency}`} id={`currency-${props.currency}`} defaultValue={props.currency}>
                <option value="USD">USD</option>
                <option value="RUB">RUB</option>
                <option value="JPY">JPY</option>
                <option value="PLN">PLN</option>
            </select>
        </div>
    )
}

export default CurrencySelect;