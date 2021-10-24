import { AppButton } from 'sc/AppButton'
import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;
  padding: 5px 0;

  &.active {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-top: 4px solid #9d2550;
  }

  img {
    width: 290px;
    height: 180px;
    object-fit: cover;
  }

  span.card-name {
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;

    color: #303030;

    display: block;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;

    max-width: 70%;
    color: #303030;
  }

  ${AppButton} {
    margin-top: 20px;
  }
`
