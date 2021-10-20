import styled from 'styled-components'

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  column-gap: 7px;

  font-size: 13px;
  color: #8c91b3;
  font-weight: lighter;

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }

  div.dot {
    width: 5px;
    height: 5px;
    background-color: #8c91b3;

    border-radius: 50%;
  }
`
