import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../styles/theme'
// import "../public/static/fonts/stylesheet.css"
// import "../styles/style.css"
import createEmotionCache from '../utils/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

// interface MyAppProps extends AppProps {
//   emotionCache?: EmotionCache
// }

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Change title in _app.tsx</title>
        <meta name="viewport" content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}