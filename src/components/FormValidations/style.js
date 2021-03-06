import styled from 'styled-components'

export const ValidationsWrap = styled.div`
  width: 100%;

  h5 {
    font-size: 14px;
    color: #333;
    line-height: 17px;
    font-weight: normal;

    @media screen and (max-width: 576px) {
      font-size: 13px;
    }
  }

  ul.validations-list {
    padding: 13px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 13px;
  }
`
