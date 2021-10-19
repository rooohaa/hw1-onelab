import styled from 'styled-components'

export const FormWrapper = styled.div`
  padding: 50px 0;
  width: 417px;
  margin: 0 auto;

  h4 {
    font-weight: bold;
  }

  span.form-heading {
    font-size: 15px;
    line-height: 18px;
    color: #8c91b3;

    display: block;
    text-align: center;

    margin: 25px 0;
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
    }
  }
`
