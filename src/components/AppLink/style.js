import styled from 'styled-components'

export const LinkWrap = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;

    &:hover {
      span {
        color: #9d2550;
      }
    }

    span {
      display: block;

      font-size: 14px;
      line-height: 16px;

      color: #303030;

      transition: color 0.3s ease;
    }
  }
`
