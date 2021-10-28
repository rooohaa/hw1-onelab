import React from 'react'
import { InputWrapper } from './style'

const CurrencyInput = ({
  amount,
  currencies,
  selectedCurrency,
  onCurrencySelect,
  readOnly,
  onChange,
}) => {
  return (
    <InputWrapper>
      <input
        value={amount}
        onChange={(e) => onChange(e.target.value)}
        type="number"
        readOnly={readOnly}
        placeholder={!readOnly ? 'Введите значение' : 'Результат'}
      />

      <ul className="currencies">
        {currencies.map(({ id, iconPath, name }) => (
          <li key={id}>
            <button
              onClick={() => {
                onCurrencySelect(name)
              }}
            >
              <img
                className={selectedCurrency === name ? 'active' : ''}
                src={iconPath}
                alt={iconPath}
              />
            </button>
          </li>
        ))}
      </ul>
    </InputWrapper>
  )
}

export { CurrencyInput }
