import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'theme'
// import 'configureAmplify'
import Amplify from 'aws-amplify'
import config from 'src/aws-exports'

const isLocalhost = () => {
  if (typeof window !== 'undefined') {
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "[::1]" ||
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
    ) {
      return true
    }
  }
  return false
}
let updatedConfig;

if (config.oauth.redirectSignIn.includes(',')) {
  const [localSignIn, deployedSignIn] = config.oauth.redirectSignIn.split(',')
  const [localSignOut, deployedSignOut] = config.oauth.redirectSignOut.split(',')
  
  updatedConfig = {
    ...config,
    oauth: {
      ...config.oauth,
      redirectSignIn: isLocalhost ? localSignIn : deployedSignIn,
      redirectSignOut: isLocalhost ? localSignOut : deployedSignOut
    }
  }
} else {
  updatedConfig = config;
}

Amplify.configure({
  ...updatedConfig,
  ssr: true
})

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Next.js app bootstrapped with AWS Amplify + MUI" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
