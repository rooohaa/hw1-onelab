import React from 'react'
import { Container } from '@mui/material'
import { Wrapper } from './style'

const MobileAppSection = () => {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <div className="content-wrap">
          <div className="adv-list">
            <h5>Попробуйте мобильное приложение Forte</h5>
            <ul>
              <li>Оплата платежей</li>
              <li>Денежные переводы</li>
              <li>Управление лимитами</li>
            </ul>
            <div className="download-links">
              <a href="#">
                <img src="/icons/apple.svg" alt="Icon" />
                <div>
                  <span className="subtext">Загрузите в</span>
                  <span className="text">App Store</span>
                </div>
              </a>
              <a href="#">
                <img src="/icons/google-play.svg" alt="Icon" />
                <div>
                  <span className="subtext">Доступно в</span>
                  <span className="text">Google play</span>
                </div>
              </a>
            </div>
          </div>
          <div className="poster-wrap">
            <img src="/images/mobile-app.png" alt="Mobile app" />
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export { MobileAppSection }
