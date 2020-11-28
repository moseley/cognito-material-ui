import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import Link from 'components/Link'
import Layout from 'components/Layout'
import Hero from 'components/Hero'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  code: {
    background: 
      theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
  },
  card: {
    '& :hover': {
      textDecoration: 'none'
    }
  },
  primaryColor: {
    color: theme.palette.primary.main
  },
  secondaryColor: {
    color: theme.palette.secondary.main
  }
}))

const Index = () => {
  const classes = useStyles()
  return (
    <Layout headTitle="Next.js Amazon Cognito w/ Material-UI">
      <>
        <Hero>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome to <Link href="https://nextjs.org">Next.js!</Link>
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
            Get started by editing{' '}
            <code className={classes.code}>pages/index.js</code>
          </Typography>
        </Hero>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} justify="center" alignItems="flex-start">
              <Grid item key="documentation" xs={12} sm={5}>
                <Card variant="outlined" className={classes.card}>
                  <CardActionArea>
                    <Link href="/theme" color="inherit">
                      <CardHeader title="Theme &rarr;"/>
                      <CardContent>
                        <Typography>Update the <span className={classes.primaryColor}>primary</span> and <span className={classes.secondaryColor}>secondary</span> colors to customize your app.</Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item key="learn" xs={12} sm={5}>
                <Card variant="outlined" className={classes.card}>
                  <CardActionArea>
                    <MuiLink href="https://nextjs.org/learn" color="inherit">
                      <CardHeader title="Learn &rarr;" />
                      <CardContent>
                        <Typography>Learn about Next.js in an interactive course with quizzes!</Typography>
                      </CardContent>
                    </MuiLink>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item key="examples" xs={12} sm={5}>
                <Card variant="outlined" className={classes.card}>
                  <CardActionArea>
                    <MuiLink href="https://github.com/vercel/next.js/tree/master/examples" color="inherit">
                      <CardHeader title="Examples &rarr;" />
                      <CardContent>
                        <Typography>Discover and deploy boilerplate example Next.js projects.</Typography>
                      </CardContent>
                    </MuiLink>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item key="deploy" xs={12} sm={5}>
                <Card variant="outlined" className={classes.card}>
                  <CardActionArea>
                    <MuiLink href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" color="inherit">
                      <CardHeader title="Deploy &rarr;" />
                      <CardContent>
                        <Typography>Instantly deploy your Next.js site to a public URL with Vercel.</Typography>
                      </CardContent>
                    </MuiLink>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
        </Container>
      </>
    </Layout>
  )
}

export default Index