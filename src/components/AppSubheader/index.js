import React from 'react'
import { Container } from '@mui/material'
import { AppLink } from '../AppLink'
import { SubheaderWrapper } from './style'
import { links } from './mock'

const AppSubheader = () => {
  return (
    <SubheaderWrapper>
      <Container maxWidth="sm">
        <div className="links-wrap">
          {links.map(({ id, text, iconPath, linkPath }) => (
            <AppLink
              key={id}
              text={text}
              iconPath={iconPath}
              linkPath={linkPath}
            />
          ))}
        </div>
      </Container>
    </SubheaderWrapper>
  )
}

export { AppSubheader }
