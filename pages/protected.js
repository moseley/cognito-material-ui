import { withSSRContext } from 'aws-amplify'
import Typography from '@material-ui/core/Typography'
import Layout from 'components/Layout'

const Protected = ({ authenticated, username }) => {
  if (!authenticated) {
    return (
      <Layout title="Sorry">
        <Typography>Not authenticated</Typography>
      </Layout>
    )
  }
  return (
    <Layout title="Protected">
      <Typography>Hello {username} from SSR route!</Typography>
    </Layout>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  const { Auth } = withSSRContext({ req })
  try {
    const user = await Auth.currentAuthenticatedUser()
    // console.log('user: ', user)
    return {
      props: {
        authenticated: true, 
        username: user.username,
        email: user.attributes.email,
        emailVerified: user.attributes.email_verified
      }
    }
  } catch (err) {
    res.writeHead(302, { Location: '/profile' })
    res.end()
  }
  return {
    props: {}
  }
}

export default Protected