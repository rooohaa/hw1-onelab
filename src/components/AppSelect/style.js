import styled from 'styled-components'

export const SelectWrap = styled.div`
  position: relative;

  .select-value {
    display: flex;
    align-items: center;
    column-gap: 12px;
    cursor: pointer;

    .select-label {
      font-size: 14px;
      line-height: 19px;
      color: #303030;
    }

    img.select-icon {
      width: 18px;
      height: 18px;
      object-fit: contain;
    }

    img {
      user-select: none;
      transition: transform 0.2s ease-out;

      &.active {
        transform: rotate(180deg);
      }
    }
  }
`

export const SelectOptions = styled.ul`
  position: absolute;
  top: 150%;
  right: 0;
  left: 0;
  width: 100%;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 3px;

  flex-direction: column;
  align-items: flex-start;

  display: none;
  animation: open 0.2s ease;

  &.active {
    display: flex;
  }

  @keyframes open {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const SelectOption = styled.li`
  font-size: 14px;
  line-height: 19px;
  color: #303030;
  padding: 5px;
  transition: background-color 0.2s ease;
  width: 100%;
  cursor: pointer;

  text-overflow: ellipsis;
  overflow: hidden;

  white-space: nowrap;

  &:hover {
    background-color: #eeeeee;
  }

  &.active {
    background-color: #eeeeee;
  }
`
