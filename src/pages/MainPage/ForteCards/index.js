import React, { useState } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { ForteCard } from 'components/ForteCard'
import { ForteCardsSection } from './style'
import { cards, tabs } from './mock'

const ForteCards = () => {
  const [activeCard, setActiveCard] = useState('')

  return (
    <ForteCardsSection>
      <Container maxWidth="lg">
        <Typography variant="h5" align="left" gutterBottom>
          Forte карты
        </Typography>

        <Grid container spacing={2} justifyContent="space-between">
          {cards.map(({ id, name, description, imgPath, cashBack }) => (
            <Grid key={id} item xs={3}>
              <ForteCard
                name={name}
                description={description}
                imgPath={imgPath}
                cashBack={cashBack}
                isActive={activeCard === name}
              />
            </Grid>
          ))}
        </Grid>

        <div className="tabs-wrap">
          {tabs.map(({ id, tabAction }) => (
            <div
              key={id}
              onClick={() => setActiveCard(tabAction)}
              className={`tab-wrap ${activeCard === tabAction ? 'active' : ''}`}
            >
              <div className="tab-btn"></div>
            </div>
          ))}
        </div>
      </Container>
    </ForteCardsSection>
  )
}

export { ForteCards }
