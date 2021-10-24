import React from 'react'
import { AppHeader } from '../../components/AppHeader'
import { AppSubheader } from '../../components/AppSubheader'
import { ForteCards } from './ForteCards'

const MainPage = () => {
  return (
    <>
      <AppHeader />
      <AppSubheader />
      <ForteCards />
    </>
  )
}

export { MainPage }
