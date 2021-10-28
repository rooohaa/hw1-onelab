import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;

  padding: 8px 0;

  border-bottom: 1px solid #737373;

  input {
    border: none;
    background-color: inherit;
    outline: none;

    font-size: 17px;
    line-height: 21 px;
    color: #303030;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 25px;

    button {
      width: 18px;
      height: 18px;
      border: none;
      background-color: inherit;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: invert(46%) sepia(20%) saturate(9%) hue-rotate(314deg)
          brightness(92%) contrast(88%);

        &.active {
          filter: invert(0%) sepia(0%) saturate(7481%) hue-rotate(301deg)
            brightness(100%) contrast(100%);
        }
      }
    }
  }
`
