import React from 'react'
import { CurrencyTable } from 'components/CurrencyTable'
import { Container, Typography } from '@mui/material'
import { CurrencySectionWrap } from './style'
import { CurrencyConverter } from 'components/CurrencyConverter'

const CurrencySection = () => {
  return (
    <CurrencySectionWrap>
      <Container maxWidth="lg">
        <Typography variant="h5" align="left" gutterBottom>
          Курсы безналичной конвертации валют
        </Typography>

        <Typography paragraph align="left" gutterBottom>
          Курс актуален на {new Date().toLocaleDateString()}
        </Typography>

        <div className="wrap">
          <CurrencyTable />
          <CurrencyConverter />
        </div>
      </Container>
    </CurrencySectionWrap>
  )
}

export { CurrencySection }
