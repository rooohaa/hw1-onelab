import React from 'react'
import { Container } from '@mui/material'
import { ArrowButton, BannerWrap } from './style'
import { AppButton } from 'sc/AppButton'

const BannerSection = () => {
  return (
    <BannerWrap>
      <Container maxWidth="lg">
        <div className="crumbs">
          <span>Forte</span> - Банк
        </div>

        <div className="content-wrap">
          <div className="banner-content">
            <h4>До 3 000 000 ₸</h4>

            <p>Покупки без процентов</p>

            <AppButton variant="light">Подробнее</AppButton>
          </div>

          <div className="img-wrap">
            <img src="/images/banner-img.png" alt="Banner img" />
          </div>
        </div>

        <div className="bullets">
          <div className="bullet active"></div>
          <div className="bullet"></div>
          <div className="bullet"></div>
          <div className="bullet"></div>
        </div>
      </Container>

      <ArrowButton className="left">
        <img src="/icons/arrow-left.svg" alt="Left arrow" />
      </ArrowButton>

      <ArrowButton className="right">
        <img src="/icons/arrow-right.svg" alt="Right arrow" />
      </ArrowButton>
    </BannerWrap>
  )
}

export { BannerSection }
