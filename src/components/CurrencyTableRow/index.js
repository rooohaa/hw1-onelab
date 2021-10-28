import React from 'react'
import { CurrencyRowWrap } from './style'

const currenciesIconsMap = {
  USD: '/icons/currencies/dollar.svg',
  EUR: '/icons/currencies/euro.svg',
  RUB: '/icons/currencies/ruble.svg',
  KZT: '/icons/currencies/tenge.svg',
  GDP: '/icons/currencies/pound.svg',
}

const CurrencyTableRow = ({
  currencyName,
  purchaseValue,
  saleValue,
  colored,
}) => {
  return (
    <CurrencyRowWrap className={colored ? 'colored' : ''}>
      <div>
        <img src={currenciesIconsMap[currencyName]} alt={currencyName} />
        <span className="cur-name">{currencyName}</span>
      </div>
      <span>{purchaseValue}</span>
      <span>{saleValue}</span>
    </CurrencyRowWrap>
  )
}

export { CurrencyTableRow }
