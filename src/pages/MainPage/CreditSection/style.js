import styled from 'styled-components'

export const CreditSectionWrap = styled.section`
  padding-bottom: 64px;

  h5 {
    color: #1e2a41;
  }

  p {
    color: #303030;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
  }

  .advantages {
    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 24px;
  }
`

export const ContentBox = styled.div`
  width: 100%;
  height: 280px;

  background: #f2f2f2;
  border-radius: 4px;
  padding: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .descr {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h5 {
      font-size: 22px;
      line-height: 26px;
      color: #1e2a41;
    }

    p {
      font-size: 14px;
      line-height: 19px;
      color: #303030;
      font-weight: 300;
    }
  }

  img.phone-img {
    transform: translateY(17px) translateX(-20px);
  }
`
