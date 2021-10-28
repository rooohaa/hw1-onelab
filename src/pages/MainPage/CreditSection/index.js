import React from 'react'
import { Container, Typography } from '@mui/material'
import { CreditCalculator } from 'components/CreditCalculator'
import { ContentBox, CreditSectionWrap } from './style'
import { AppButton } from 'sc/AppButton'

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

        <div className="advantages">
          <ContentBox>
            <div className="descr">
              <h5>Перевод с карты на любую карту мира</h5>

              <AppButton variant="light">Подробнее</AppButton>
            </div>
            <img src="/images/earth.png" alt="Img" />
          </ContentBox>
          <ContentBox>
            <div className="descr">
              <h5>Оплата платежей online</h5>
              <p>
                Оплата штрафов, коммунальных услуг, услуг сотовых операторов и
                многое другое
              </p>
              <AppButton variant="dark">Произвести платеж</AppButton>
            </div>
            <img className="phone-img" src="/images/phone.png" alt="Img" />
          </ContentBox>
        </div>
      </Container>
    </CreditSectionWrap>
  )
}

export { CreditSection }
