import { useState } from 'react';
import './boxes.css'

export default function Boxes({
    displayTag, 
    inputDisabled = false,
    amount,
    onAmountChange,  // Method
    onCurrencyChange, // Method
    currencyOptions = [],
    selectCurrency = 'usd'
}) {
    return (
    <>
        <div className='input-container'>
            <div className='input-wrapper'>
                <label htmlFor="box">{displayTag}</label>
                <input type="text" 
                id='box'
                placeholder='Amount'
                value={amount}
                disabled = {inputDisabled}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='currency-wrapper'>
                <label className='currency-tag'>Currency Type</label>
                <select 
                    id="currency"
                    value = {selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => 
                    <option key={currency} value={currency}>{currency.toUpperCase()}</option> 
                )}
                </select>
            </div>
        </div>
    </>
    );
}