import Head from 'next/head'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import AppBar from './AppBar'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ':root': {
      '--amplify-font-family': theme.typography.fontFamily,
      // '--amplify-text-xxs': theme.typography.caption.fontSize,
      // '--amplify-text-xs': theme.typography.body2.fontSize,
      // '--amplify-text-sm': theme.typography.body2.fontSize,
      // '--amplify-text-md': theme.typography.body1.fontSize,
      // '--amplify-text-lg': theme.typography.h6.fontSize,
      // '--amplify-text-xl': theme.typography.h5.fontSize,
      // '--amplify-text-xxl': theme.typography.h4.fontSize,
      '--amplify-primary-color': theme.palette.primary.main,
      // '--amplify-primary-contrast': theme.palette.primary.contrastText,
      '--amplify-primary-tint': theme.palette.primary.light,
      '--amplify-primary-shade': theme.palette.primary.dark,
      // '--amplify-secondary-color': theme.palette.text.primary,
      // '--amplify-secondary-contrast': theme.palette.secondary.contrastText,
      // '--amplify-secondary-tint': theme.palette.secondary.light,
      // '--amplify-secondary-shade': theme.palette.secondary.dark,
      '--amplify-tertiary-color': theme.palette.secondary.main,
      // '--amplify-tertiary-contrast': 'var(–amplify-white)',
      // '--amplify-tertiary-tint': '#7da1ff',
      // '--amplify-tertiary-shade': '#537BE5',
      // '--amplify-grey': theme.palette.grey[600],
      // '--amplify-light-grey': theme.palette.grey[400],
      // '--amplify-white': theme.palette.common.white,
      // '--amplify-red': theme.palette.error.main,
    },
  },
  offset: theme.mixins.toolbar,
  logo: {
    height: '.9em'
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(4),
    },
  },
}))

const Layout = ({title, headTitle, children}) => {
  const classes = useStyles()
  const siteName = 'Next.js Project'
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : `${title} | ${siteName}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar siteName={siteName} />
      <div className={classes.offset} />
      <Container>
        <Box my={4}>
          {title && (
            <Typography variant="h4" component="h1" gutterBottom>
              {title}
            </Typography>
          )}
          {children}
        </Box>
      </Container>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/moseley/cognito-material-ui">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'. Powered by '}
            <img src="/vercel.svg" className={classes.logo} />
          </Typography>
        </Box>
      </Container>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  headTitle: PropTypes.string,
  children: PropTypes.element
}

export default Layout