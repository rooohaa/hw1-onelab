import styled from 'styled-components'

export const ConverterBox = styled.div`
  padding: 24px 64px;
  width: 590px;
  height: 210px;

  position: relative;
  background-color: #f5f5f5;

  span {
    color: #1e2a41;
    font-size: 19px;
    font-weight: 500;
    line-height: 26px;

    display: block;
    margin-bottom: 20px;
  }

  .inputs-wrap {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  .btn-wrap {
    width: 87px;
    height: 87px;

    padding: 13px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%) translateX(-50%);

    background-color: #f5f5f5;
    border-radius: 50%;
  }
`

export const ConvertButton = styled.button`
  background-color: #1e2a41;
  width: 61px;
  height: 61px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  .left {
    margin-bottom: 2px;
    transform: rotate(180deg) translateX(-16px);
  }

  .right {
    transform: translateX(-13px);
  }
`
