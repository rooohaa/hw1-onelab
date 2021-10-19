import styled from 'styled-components'

export const AlertWrap = styled.div`
  border: 1px solid #c2c4d7;
  border-radius: 15px;

  margin: 15px 0;
  padding: 15px 12px;
  background-color: #fbfbfd;

  display: flex;
  align-items: flex-start;
  column-gap: 10px;

  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  p {
    font-size: 12px;
    line-height: 18px;
    color: #acafc9;
    font-weight: 300;
  }
`
