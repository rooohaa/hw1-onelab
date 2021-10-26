import styled from 'styled-components'

export const ArrowButton = styled.button`
  width: 36px;
  height: 36px;

  border: none;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  border-radius: 50%;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: rgba(255, 255, 255, 0.5);
  }
`

export const BulletButton = styled.div`
  background: #ffffff;
  border-radius: 4px;
  width: 44px;
  height: 3px;
  cursor: pointer;

  &.active {
    background-color: #1e2a41;
  }
`

export const BannerWrap = styled.section`
  width: 100%;
  height: 400px;
  padding: 32px 0;

  position: relative;
  background: url('/images/banner-bg.png') center/cover no-repeat;

  div.crumbs {
    font-size: 12px;
    line-height: 17px;
    color: #fff;

    span {
      text-decoration: underline;
    }
  }

  .content-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .img-wrap {
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      transform: scale(1.3);
    }
  }

  .bullets {
    display: flex;
    align-items: center;
    column-gap: 11px;
  }

  ${ArrowButton} {
    &.right {
      right: 4%;
    }

    &.left {
      left: 4%;
    }
  }
`
