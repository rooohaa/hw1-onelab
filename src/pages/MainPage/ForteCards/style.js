import styled from 'styled-components'

export const ForteCardsSection = styled.section`
  padding: 64px 0;

  h5 {
    color: #1e2a41;
  }

  h6 {
    color: #1e2a41;
  }

  .tabs-wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    column-gap: 20px;

    margin-top: 48px;

    .tab-wrap {
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      width: 18px;
      height: 18px;

      border-radius: 50%;

      &.active {
        border: 1px solid #303030;
      }

      .tab-btn {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #1e2a41;
      }
    }
  }
`
