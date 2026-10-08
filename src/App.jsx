import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState } from 'react'

import './App.css'

function App() {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, SetConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  console.log("currencyInfo:", currencyInfo)
console.log("options:", options)

  const swap = () => {
    setFrom(to)
    setTo(from)
    SetConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    SetConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}>
        <div className="w-full">
          <div className="w-full max-w-xl mx-auto border border-gray-60 rounded-xl p-8 backdrop-blur-sm bg-white/30 shadow-2xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}>
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
