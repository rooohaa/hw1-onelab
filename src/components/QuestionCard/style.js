import styled from 'styled-components'

export const QuestionCardBox = styled.div`
  background: #f2f2f2;
  border-radius: 4px;

  width: 390px;
  height: 350px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;

  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #303030;
  }

  p {
    color: #303030;
    font-size: 14px;
    line-height: 21px;
    font-weight: 300;
  }
`
