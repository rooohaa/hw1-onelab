import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background-color: #f8f8f8;

  .header-inner {
    width: 100%;

    display: flex;
    padding: 15px 0;
    align-items: center;
    justify-content: space-between;
  }

  .logo-wrap {
    display: flex;
    align-items: center;
    column-gap: 30px;
  }

  .app-logo {
    a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 100%;
      width: 100%;
    }
  }

  nav > ul {
    display: flex;
    align-items: center;
    column-gap: 30px;

    a {
      position: relative;

      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #303030;

      transition: color 0.3s ease;

      &:hover {
        color: #9d2550;
      }

      &.active {
        color: #9d2550;

        &::after {
          content: '';
          position: absolute;
          background-color: #9d2550;

          right: 0;
          left: 0;
          bottom: -98%;
          width: 100%;

          height: 2px;
        }
      }
    }
  }

  .other-links {
    display: flex;
    align-items: center;
    column-gap: 50px;

    .link-wrap {
      display: flex;
      align-items: center;
      column-gap: 7px;

      a {
        font-size: 14px;
        line-height: 17px;
        color: #303030;
      }
    }
  }
`
