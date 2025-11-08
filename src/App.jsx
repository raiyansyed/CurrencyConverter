import { useState } from 'react'
import { Boxes } from './components/index'
import useCurrencyConverter from './hooks/currencyConverter'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyConverter(from);
  
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Currency Converter</h1>
          <p className="text-white/80">Convert currencies with real-time rates</p>
        </div>
        
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <Boxes 
              displayTag='From' 
              inputDisabled={false} 
              amount={amount}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
            />
            
            <div className="relative h-0 flex justify-center -my-4 z-10">
              <button
                type='button'
                onClick={swap}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
                title="Swap currencies"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>
            
            <Boxes 
              displayTag='To' 
              inputDisabled={true}
              amount={convertedAmount == 0 ? 0 : convertedAmount.toFixed(2)}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
            />
            
            <button 
              type='submit'
              disabled={amount === 0}
              className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
        
        <div className="text-center mt-6 text-white/60 text-sm">
          Exchange rates updated regularly
        </div>
      </div>
    </div>
  )
}

export default App
