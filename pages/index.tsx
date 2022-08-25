import { Link, Typography } from '@mui/material'
import { NextPage } from 'next'
import NextLink from 'next/link'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import Sectin01FirstScreen from '../sections/Sectin01FirstScreen'

const HomePage = () => {
  return (
    <>
      <Header />
      <Sectin01FirstScreen />
      <Footer />
    </>
  )
}

export default HomePage
