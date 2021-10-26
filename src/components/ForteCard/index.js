import React from 'react'
import { Typography } from '@mui/material'
import { AppButton } from 'sc/AppButton'
import { CardWrapper } from './style'

const ForteCard = ({
  imgPath,
  name,
  description,
  cashBack,
  isActive,
  onCardClick,
}) => {
  return (
    <CardWrapper
      className={isActive ? 'active' : ''}
      onClick={() => onCardClick(name)}
    >
      <img src={imgPath} alt={name} />
      <span className="card-name">{name}</span>
      <Typography paragraph align="center" gutterBottom>
        Выпуск карты бесплатно
      </Typography>
      <Typography paragraph align="center" gutterBottom>
        {description}
      </Typography>
      <Typography paragraph align="center" gutterBottom>
        CashBack до {cashBack}%
      </Typography>
      <AppButton>Заказать карту</AppButton>
    </CardWrapper>
  )
}

export { ForteCard }
