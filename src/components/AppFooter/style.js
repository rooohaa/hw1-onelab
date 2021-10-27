import styled from 'styled-components'

export const LinkItem = styled.a`
  font-size: 14px;
  line-height: 21px;
  color: #303030;

  transition: color 0.2s ease-out;

  &.email-link {
    color: #0f2b91;
    font-weight: 500;
  }

  &:hover {
    color: #9d2550;
  }
`

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 23px;
  height: 23px;

  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
`

export const FooterWrap = styled.footer`
  padding: 32px 0;
  background-color: #f8f8f8;

  .links-wrap {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    padding-bottom: 32px;
    border-bottom: 1px solid #e0e0e0;
  }

  .links-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 15px;

    span {
      font-size: 16px;
      font-weight: 500;
      color: #303030;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      row-gap: 12px;
    }
  }

  .footer-feedback {
    padding-top: 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .actions-wrap {
      display: flex;
      align-items: flex-start;
      column-gap: 80px;

      .feedback-btn {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 8px;

        button {
          color: #0e2b91;
          font-size: 15px;
          font-weight: 500;
          line-height: 21px;

          border: none;
          background-color: inherit;
        }

        p {
          color: #303030;
          font-size: 13px;
          line-height: 19px;
        }
      }

      .social-links {
        display: flex;
        align-items: center;
        column-gap: 30px;
      }
    }
  }
`

export const ToggleBtn = styled.button`
  background: #303030;
  border-radius: 4px;
  border: none;

  color: #fff;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;

  padding: 10px 15px;

  display: flex;
  align-items: center;
  column-gap: 10px;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`
