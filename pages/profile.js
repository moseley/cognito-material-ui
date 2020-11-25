import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/Layout'

const Profile = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(err => setUser(null))
  }, [])
  const title = user ? `${user.username}'s Profile` : 'Profile'
  return (
    <Layout title={title}>
      {user && <Typography>Hello {user.username}!</Typography>}
    </Layout>
  )
}

export default withAuthenticator(Profile)