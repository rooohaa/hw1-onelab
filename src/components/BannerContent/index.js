import React from 'react'
import { AppButton } from 'sc/AppButton'
import { ContentWrap } from './style'

const BannerContent = ({ id, title, description }) => {
  return (
    <ContentWrap>
      <h4>{title}</h4>

      <p>{description}</p>

      <AppButton variant="light">Подробнее</AppButton>
    </ContentWrap>
  )
}

export { BannerContent }
