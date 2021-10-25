import React from 'react'
import { Container, Typography } from '@mui/material'
import { CreditCalculator } from 'components/CreditCalculator'
import { CreditSectionWrap } from './style'

const CreditSection = () => {
  return (
    <CreditSectionWrap>
      <Container maxWidth="lg">
        <Typography variant="h5" align="left" gutterBottom>
          Кредиты на любые цели
        </Typography>

        <Typography paragraph align="left" gutterBottom>
          Предварительный расчет не является публичной офертой
        </Typography>

        <CreditCalculator />
      </Container>
    </CreditSectionWrap>
  )
}

export { CreditSection }
