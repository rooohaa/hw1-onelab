import React, { useState, useEffect } from 'react'
import { TableWrapper } from './style'

const CurrencyTable = () => {
  // useEffect(() => {
  //   fetchCurrencies()
  // }, [])

  // const fetchCurrencies = async () => {
  //   try {
  //     const res = await fetch(
  //       `http://api.exchangeratesapi.io/v1/convert?access_key=${process.env.REACT_APP_API_KEY}&from=KZTto=USD&amount=5000000`
  //     )
  //     const data = await res.json()

  //     console.log(data)
  //   } catch (e) {}
  // }

  return (
    <TableWrapper>
      <p>123</p>
    </TableWrapper>
  )
}

export { CurrencyTable }
