import styled from 'styled-components'

export const CurrencyRowWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  width: 100%;

  padding: 16px 10px;

  &.colored {
    background-color: #f2f2f2;
  }

  div {
    display: flex;
    align-items: center;
    column-gap: 23px;

    img {
      width: 18px;
      height: 18px;
      object-fit: contain;
    }
  }

  span {
    color: #303030;
    font-size: 17px;
    line-height: 22px;

    &.cur-name {
      font-weight: 500;
    }
  }
`
