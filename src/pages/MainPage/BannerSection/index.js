import React, { useState } from 'react'
import { Container } from '@mui/material'
import { BannerContent } from 'components/BannerContent'
import { ArrowButton, BannerWrap, BulletButton } from './style'
import { data, bullets } from './mock'

const BannerSection = () => {
  const [activeTab, setActiveTab] = useState(1)

  const activeContent = data.find((el) => el.id === activeTab)

  return (
    <BannerWrap>
      <Container maxWidth="lg">
        <div className="crumbs">
          <span>Forte</span> - Банк
        </div>

        <div className="content-wrap">
          <BannerContent {...activeContent} />
          <div className="img-wrap">
            <img src="/images/banner-img.png" alt="Banner img" />
          </div>
        </div>

        <div className="bullets">
          {bullets.map(({ index }) => (
            <BulletButton
              key={index}
              className={activeTab === index ? 'active' : ''}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
      </Container>

      <ArrowButton
        className="left"
        onClick={() => setActiveTab(activeTab - 1)}
        disabled={activeTab === 1}
      >
        <img src="/icons/arrow-left.svg" alt="Left arrow" />
      </ArrowButton>

      <ArrowButton
        className="right"
        onClick={() => setActiveTab(activeTab + 1)}
        disabled={activeTab === 4}
      >
        <img src="/icons/arrow-right.svg" alt="Right arrow" />
      </ArrowButton>
    </BannerWrap>
  )
}

export { BannerSection }
