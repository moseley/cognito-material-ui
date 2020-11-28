import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import Typography from '@material-ui/core/Typography'

const ProtectedClient = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(() => router.push('/profile'))
  }, [])
  if (!user) return null
  return <Typography variant="h1">Hello {user.username} from client route!</Typography>
}

export default ProtectedClient