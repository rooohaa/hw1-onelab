import React from 'react'
import { AppHeader } from '../../components/AppHeader'
import { AppSubheader } from '../../components/AppSubheader'
import { AppFooter } from 'components/AppFooter'
import { BannerSection } from './BannerSection'
import { CreditSection } from './CreditSection'
import { ForteCards } from './ForteCards'

const MainPage = () => {
  return (
    <>
      <AppHeader />
      <AppSubheader />
      <BannerSection />
      <ForteCards />
      <CreditSection />
      <AppFooter />
    </>
  )
}

export { MainPage }
