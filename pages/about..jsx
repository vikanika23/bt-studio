import { Link, Typography } from '@mui/material'
import NextLink from 'next/link'
import Layout from '../components/Layout'


export default function AboutPage() {
  return (
    <Layout title="О нас | Next.js + TypeScript Example">
      <Typography variant='h1'>О нас</Typography>
      <Typography>
        <NextLink href="/" passHref>
          <Link>На главную</Link>
        </NextLink>
      </Typography>
    </Layout>
  )
}