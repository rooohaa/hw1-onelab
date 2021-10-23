import React from 'react'
import { Container } from '@mui/material'
import { HeaderWrapper } from './style'
import { headerLinks } from './mock'

const AppHeader = () => {
  return (
    <HeaderWrapper>
      <Container maxWidth="lg">
        <div className="header-inner">
          <div className="app-logo">
            <a href="#">
              <img src="/icons/logo.svg" alt="App logo" />
            </a>
          </div>

          <nav>
            <ul>
              {headerLinks.map(({ id, text, path }) => (
                <li key={id}>
                  <a className={id === 1 ? 'active' : ''} href={path}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="other-links">
            <div className="link-wrap">
              <img src="/icons/contact.svg" alt="Phone icon" />
              <a href="#">7575</a>
            </div>
            <div className="link-wrap">
              <img src="/icons/profile.svg" alt="Profile icon" />
              <a href="#">Войти</a>
            </div>
          </div>
        </div>
      </Container>
    </HeaderWrapper>
  )
}

export { AppHeader }
