import React from 'react'
import { LinkWrap } from './style'

const AppLink = ({ text, iconPath, linkPath }) => {
  return (
    <LinkWrap>
      <a href={linkPath}>
        <img src={iconPath} alt={text} />
        <span>{text}</span>
      </a>
    </LinkWrap>
  )
}

export { AppLink }
