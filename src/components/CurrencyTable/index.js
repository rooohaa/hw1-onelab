import React, { useState, useEffect } from 'react'
import { CurrencyTableRow } from 'components/CurrencyTableRow'
import { TableWrapper } from './style'
import { normalizeTableData } from 'utils/normalizeTableData'

const CurrencyTable = () => {
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    fetchCurrencies()
  }, [])

  const fetchCurrencies = async () => {
    let urls = [
      `https://free.currconv.com/api/v7/convert?q=USD_KZT,EUR_KZT&compact=ultra&apiKey=${process.env.REACT_APP_API_KEY}`,
      `https://free.currconv.com/api/v7/convert?q=RUB_KZT,GBP_KZT&compact=ultra&apiKey=${process.env.REACT_APP_API_KEY}`,
    ]

    let requests = urls.map((url) => fetch(url))

    try {
      const responses = await Promise.all(requests)
      const data = await Promise.all(responses.map((r) => r.json()))

      const normalizedData = normalizeTableData({ ...data[0], ...data[1] })
      setCurrencies(normalizedData)
    } catch (e) {}
  }

  return (
    <TableWrapper>
      <div className="table-cols">
        <div>Курс</div>
        <div>Покупка</div>
        <div>Продажа</div>
      </div>

      <div className="table-rows">
        {currencies.length > 0 ? (
          currencies.map(({ id, name, purValue, saleValue }, idx) => (
            <CurrencyTableRow
              key={id}
              currencyName={name.split('_')[0]}
              purchaseValue={purValue}
              saleValue={saleValue}
              colored={idx % 2 === 0}
            />
          ))
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </TableWrapper>
  )
}

export { CurrencyTable }
