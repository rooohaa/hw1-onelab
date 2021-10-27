import React from 'react'
import { Container } from '@mui/material'
import { FooterWrap, IconLink, LinkItem, ToggleBtn } from './style'
import { links } from './mock'

const AppFooter = () => {
  return (
    <FooterWrap>
      <Container maxWidth="lg">
        <div className="links-wrap">
          {links.map(({ id, title, sublinks }) => (
            <div className="links-block" key={id}>
              <span>{title}</span>
              <ul>
                {sublinks.map(({ id, text, email }) => (
                  <li key={id}>
                    <LinkItem className={email ? 'email-link' : ''} href="#">
                      {text}
                    </LinkItem>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-feedback">
          <div className="actions-wrap">
            <div className="feedback-btn">
              <button>Оставить обратную связь</button>
              <p>Все права защищены &copy; forte 2020</p>
            </div>

            <div className="social-links">
              <IconLink href="https://www.instagram.com" target="_blank">
                <img src="/icons/instagram-brands.svg" alt="Instagram" />
              </IconLink>
              <IconLink href="https://www.facebook.com" target="_blank">
                <img src="/icons/facebook-f-brands.svg" alt="Facebook" />
              </IconLink>
              <IconLink href="https://www.youtube.com" target="_blank">
                <img src="/icons/youtube-brands.svg" alt="Instagram" />
              </IconLink>
              <IconLink href="https://www.tiktok.com" target="_blank">
                <img src="/icons/tiktok-brands.svg" alt="Tiktok" />
              </IconLink>
            </div>
          </div>
          <ToggleBtn className="toggle-btn">
            <span>Версия для слабовидящих:</span>
            <img src="/icons/eye-regular.svg" alt="" />
          </ToggleBtn>
        </div>
      </Container>
    </FooterWrap>
  )
}

export { AppFooter }
