import styled from 'styled-components'

export const Wrapper = styled.section`
  background: #f2f2f2;
  position: relative;

  padding: 48px 0;
  margin-top: 100px;
  margin-bottom: 164px;

  .content-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .adv-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      row-gap: 25px;

      h5 {
        font-size: 24px;
        line-height: 28px;
        color: #1e2a41;
      }

      ul {
        list-style: unset;

        padding-left: 15px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 16px;

        li {
          font-size: 15px;
          line-height: 19px;
          color: #303030;
        }
      }
    }

    .poster-wrap {
      img {
        position: absolute;
        top: 50%;
        right: 20%;
        transform: translateY(-50%);
      }
    }
  }

  .download-links {
    display: flex;
    align-items: center;
    column-gap: 17px;

    a {
      display: flex;
      align-items: center;
      column-gap: 10px;

      background-color: #000;
      padding: 8px 13px;
      border-radius: 8px;
      color: #fff;

      img {
        width: 25px;
        height: 25px;
        object-fit: contain;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        span.subtext {
          font-size: 10px;
        }

        span.text {
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }
`
