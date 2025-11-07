import { useEffect, useState } from 'react'
import { Boxes } from './components/index'
import './App.css'
import currencyConverter from './hooks/currencyConverter'

function App() {
  useEffect(() => {

  })
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currency, setCurrency] = useState('usd')
  const currencyInfo = currencyConverter(from);
  
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div id='border'>
        <div id='inputs'>
          <form 
          onSubmit={
            (e) => {
              e.preventDefault()
              convert()
            }

          }>
              <Boxes 
              displayTag='From' 
              inputDisabled={false} 
              amount={amount}
              currencyOptions = {options}
              selectCurrency = {from}
              onCurrencyChange = {(currency) => setFrom(currency)} // Method
              onAmountChange ={(amount) => setAmount(amount)}  // Method
            />
            <div style={{position: 'relative', height: '15px'}}>
              <button
                id='swap-button'
                type='button'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <Boxes 
              displayTag='To' 
              inputDisabled={true}
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
            />
            <button id='convert-button'
            type='submit'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
