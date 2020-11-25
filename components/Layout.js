import Head from 'next/head'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Bar from './Bar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    ':root': {
      '--amplify-font-family': "'Amazon Ember', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
      '--amplify-text-xxs':	'0.75rem',
      '--amplify-text-xs': '0.81rem',
      '--amplify-text-sm': '0.875rem',
      '--amplify-text-md': '1rem',
      '--amplify-text-lg': '1.5rem',
      '--amplify-text-xl': '2rem',
      '--amplify-text-xxl': '2.5rem',
      '--amplify-primary-color': '#ff9900',
      '--amplify-primary-contrast': 'var(–amplify-white)',
      '--amplify-primary-tint': '#ffac31',
      '--amplify-primary-shade': '#e88b01',
      '--amplify-secondary-color': '#152939',
      '--amplify-secondary-contrast': 'var(–amplify-white)',
      '--amplify-secondary-tint': '#31465f',
      '--amplify-secondary-shade': '#1F2A37',
      '--amplify-tertiary-color': '#5d8aff',
      '--amplify-tertiary-contrast': 'var(–amplify-white)',
      '--amplify-tertiary-tint': '#7da1ff',
      '--amplify-tertiary-shade': '#537BE5',
      '--amplify-grey': '#828282',
      '--amplify-light-grey': '#c4c4c4',
      '--amplify-white': '#ffffff',
      '--amplify-red': '#dd3f5b'
    } 
  },
}));

const Layout = ({title, headTitle, children}) => {
  const classes = useStyles()
  const siteName = 'Next.js Amazon Cognito w/ Material-UI'
  return (
    <div className={classes.root}>
      <Head>
        <title>{headTitle ? headTitle : `${title} | ${siteName}`}</title>
      </Head>
      <Bar siteName={siteName} />
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
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  headTitle: PropTypes.string,
  children: PropTypes.element
}

export default Layout