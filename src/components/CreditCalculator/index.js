import React, { useState } from 'react'
import { Slider, Switch } from '@mui/material'
import { AppButton } from 'sc/AppButton'
import { CalculatorWrapper } from './style'

const MIN_CREDIT_VALUE = 10000
const MIN_CREDIT_TERM = 6

const CreditCalculator = () => {
  const [creditValue, setCreditValue] = useState(MIN_CREDIT_VALUE)
  const [creditTerm, setCreditTerm] = useState(MIN_CREDIT_TERM)
  const [discount, setDiscount] = useState(false)

  const rate = discount ? 18.99 : 20.99

  const calculateAnnuityPayment = () => {
    const interestRate = rate / (100 * 12)

    const factor =
      (interestRate * (1 + interestRate) ** creditTerm) /
        (1 + interestRate) ** creditTerm -
      1

    return creditValue * factor
  }

  const res = calculateAnnuityPayment()

  console.log(res)

  return (
    <CalculatorWrapper>
      <div className="calc-grid">
        <div className="slider-block">
          <p className="calc-text">Сколько вам нужно?</p>

          <div className="slider-wrapper">
            <div className="d-flex">
              <Slider
                color="secondary"
                size="small"
                value={creditValue}
                step={110_000}
                onChange={(e) => setCreditValue(e.target.value)}
                min={10000}
                max={10_000_000}
              />
              <div className="slider-range">
                <span>10 000 ₸</span>
                <span>10 000 000 ₸</span>
              </div>
            </div>
            <p className="credit-val">{creditValue.toLocaleString()} ₸</p>
          </div>

          <p className="calc-text">Срок кредитования</p>

          <div className="slider-wrapper">
            <div className="d-flex">
              <Slider
                color="secondary"
                size="small"
                value={creditTerm}
                step={2}
                onChange={(e) => setCreditTerm(e.target.value)}
                min={6}
                max={60}
              />
              <div className="slider-range">
                <span>6 месяцев</span>
                <span>5 лет</span>
              </div>
            </div>
            <p className="credit-val">{creditTerm} месяцев</p>
          </div>

          <div className="switch-wrap">
            <Switch
              color="secondary"
              checked={discount}
              onChange={(e) => setDiscount(e.target.checked)}
            />
            <p className="calc-text">Я получаю запрплату по карте ForteBank</p>
          </div>

          <p className="message">
            Для точного расчета необходимо оставить заявку
          </p>
        </div>

        <div className="credit-result">
          <div>
            <p className="calc-text sm">Ежемесячный платеж</p>
            <span className="month-amount">
              {calculateAnnuityPayment().toLocaleString()} ₸
            </span>
          </div>

          <div>
            <p className="calc-text sm">Ставка вознаграждения</p>
            <span className="p-rate">{rate}%</span>
          </div>

          <AppButton>Оформить кредит</AppButton>
        </div>
      </div>
    </CalculatorWrapper>
  )
}

export { CreditCalculator }
