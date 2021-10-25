import styled from 'styled-components'

export const CalculatorWrapper = styled.div`
  background: #f2f2f2;
  border-radius: 4px;
  padding: 32px;
  width: 100%;

  .calc-grid {
    display: flex;
    align-items: flex-start;

    .slider-block {
      width: 70%;
      padding-right: 35px;
      border-right: 1px solid #e0e0e0;
    }
  }

  .slider-wrapper {
    display: flex;
    align-items: center;
    column-gap: 16px;

    margin-top: 13px;
    margin-bottom: 24px;

    .d-flex {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 8px;

      .slider-range {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 12px;
          line-height: 18px;
          color: #737373;
        }
      }
    }

    p.credit-val {
      font-size: 21px;
      font-weight: 400;
      line-height: 26px;
      color: #303030;
    }
  }

  p.calc-text {
    font-size: 16px;
    line-height: 24px;
    color: #303030;

    &.sm {
      font-size: 14px;
      font-weight: 300;
      line-height: 21px;
    }
  }

  .switch-wrap {
    display: flex;
    align-items: center;
    column-gap: 16px;

    margin-bottom: 20px;
  }

  .message {
    color: #737373;
    font-size: 14px;
    line-height: 19px;
    font-weight: 300;
  }

  .credit-result {
    padding-left: 35px;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 24px;

    .calc-text.sm {
      margin-bottom: 8px;
    }

    .month-amount {
      color: #9d2550;

      font-size: 30px;
      font-weight: 500;
      line-height: 36px;
    }

    .p-rate {
      font-size: 24px;
      line-height: 28px;
      color: #303030;
    }
  }
`
