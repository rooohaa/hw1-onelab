import styled from 'styled-components'

export const FormWrapper = styled.div`
  padding: 50px 0;
  width: 417px;
  margin: 0 auto;

  @media screen and (max-width: 576px) {
    width: 90%;
    padding: 30px 0;
  }

  h4 {
    font-weight: bold;

    @media screen and (max-width: 576px) {
      font-size: 30px;
    }
  }

  span.form-heading {
    font-size: 15px;
    line-height: 18px;
    color: #8c91b3;

    display: block;
    text-align: center;

    margin: 25px 0;

    @media screen and (max-width: 576px) {
      font-size: 13px;

      margin: 17px 0;
    }
  }

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    div.form-control {
      width: 100%;
      margin-bottom: 20px;
    }

    button.submit-btn {
      background-color: #ee1e75;
      color: #fff;
      border: none;

      padding: 13px 45px;
      border-radius: 10px;

      margin-top: 30px;

      &:disabled {
        background-color: rgba(238, 30, 117, 0.4);
        cursor: not-allowed;
      }
    }
  }
`
