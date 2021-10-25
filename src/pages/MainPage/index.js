import React from 'react'
import { AppHeader } from '../../components/AppHeader'
import { AppSubheader } from '../../components/AppSubheader'
import { CreditSection } from './CreditSection'
import { ForteCards } from './ForteCards'

const MainPage = () => {
  return (
    <>
      <AppHeader />
      <AppSubheader />
      <ForteCards />
      <CreditSection />
    </>
  )
}

export { MainPage }
