import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../styles/theme'
import { useRouter } from "next/router"
import createEmotionCache from '../utils/createEmotionCache'
import { useState, useEffect } from "react"
import NProgress from "nprogress"
import Header from '../sections/Header'
import Footer from '../sections/Footer'

const clientSideEmotionCache = createEmotionCache()


export default function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache, }) {

//  const { Component, pageProps, emotionCache = clientSideEmotionCache, } = props

//  const { article, breadcrumbLinks } = pageProps

const { header, footer } = pageProps

console.log({pageProps})
const router = useRouter()
  

  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start())
    router.events.on("routeChangeComplete", () => NProgress.done())
    router.events.on("routeChangeError", () => NProgress.done())

    return function () {
      router.events.off("routeChangeStart", () => NProgress.start())
      router.events.off("routeChangeComplete", () => NProgress.done())
      router.events.off("routeChangeError", () => NProgress.done())
    }
  }, [router.events])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Change title in _app.tsx</title>
        <meta name="viewport" content='initial-scale=1, width=device-width' />
      </Head>
      <Header data={header?.data} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer data={footer?.data}/>
    </CacheProvider>
  )
}

