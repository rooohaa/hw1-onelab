import React, { useState, useEffect } from 'react'
import { CurrencyTableRow } from 'components/CurrencyTableRow'
import { TableWrapper } from './style'

const data = [
  { id: 1, name: 'USD', purValue: '410000', saleValue: '100000' },
  { id: 2, name: 'EUR', purValue: '410000', saleValue: '100000' },
  { id: 3, name: 'RUB', purValue: '410000', saleValue: '100000' },
  { id: 4, name: 'KZT', purValue: '410000', saleValue: '100000' },
]

const CurrencyTable = () => {
  return (
    <TableWrapper>
      <div className="table-cols">
        <div>Курс</div>
        <div>Покупка</div>
        <div>Продажа</div>
      </div>

      <div className="table-rows">
        {data.map(({ id, name, purValue, saleValue }, idx) => (
          <CurrencyTableRow
            key={id}
            currencyName={name}
            purchaseValue={purValue}
            saleValue={saleValue}
            colored={idx % 2 === 0}
          />
        ))}
      </div>
    </TableWrapper>
  )
}

export { CurrencyTable }
