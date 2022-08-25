import { Link, Typography } from '@mui/material'
import { NextPage } from 'next'
import NextLink from 'next/link'
import Layout from '../components/Layout'
import Header from '../sections/Header'
import Footer from '../sections/Footer'


const HomePage = () => {
  return (
    <>
      <Header />


      <Layout title="Главная | Next.js + TypeScript Example">
        <Typography component="h1" variant='h1'>Главная страница</Typography>
       
      </Layout>
      <Footer />
    </>
  )
}

export default HomePage
