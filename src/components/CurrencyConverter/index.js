import React, { useState } from 'react'
import { CurrencyInput } from 'components/CurrencyInput'
import { currencies } from './mock'
import { ConvertButton, ConverterBox } from './style'

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState('KZT')
  const [toCurrency, setToCurrency] = useState('USD')
  const [amount, setAmount] = useState('')
  const [result, setResult] = useState('')

  const handleConvert = async () => {
    if (fromCurrency === toCurrency) {
      alert('Выберите разные валюты.')
      return
    }

    const currencyKey = `${fromCurrency}_${toCurrency}`

    try {
      const res = await fetch(
        `https://free.currconv.com/api/v7/convert?q=${currencyKey}&compact=ultra&apiKey=${process.env.REACT_APP_API_KEY}`
      )

      const data = await res.json()
      const factor = data[currencyKey]
      const convertedResult = Math.round(parseInt(amount) * factor)

      setResult(convertedResult)
    } catch (e) {}
  }

  return (
    <ConverterBox>
      <span>Конвертация валюты</span>

      <div className="inputs-wrap">
        <CurrencyInput
          amount={amount}
          onChange={(value) => setAmount(value)}
          currencies={currencies}
          onCurrencySelect={(currency) => setFromCurrency(currency)}
          selectedCurrency={fromCurrency}
        />
        <CurrencyInput
          amount={result}
          currencies={currencies}
          onCurrencySelect={(currency) => setToCurrency(currency)}
          selectedCurrency={toCurrency}
          readOnly
        />
      </div>

      <div className="btn-wrap">
        <ConvertButton onClick={handleConvert}>
          <div>
            <img
              className="left"
              src="/icons/convert-arrow.svg"
              alt="Convert Btn"
            />
            <img
              className="right"
              src="/icons/convert-arrow.svg"
              alt="Convert Btn"
            />
          </div>
        </ConvertButton>
      </div>
    </ConverterBox>
  )
}

export { CurrencyConverter }
