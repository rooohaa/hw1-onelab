import styled from 'styled-components'

export const ContentWrap = styled.div`
  animation: fade 0.3s ease;
  h4 {
    font-size: 48px;
    line-height: 57px;
    color: #fff;

    margin-bottom: 20px;
  }

  p {
    font-size: 15px;
    line-height: 21px;
    color: #fff;
    font-weight: 300;

    margin-bottom: 50px;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
