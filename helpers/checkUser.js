import { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'

const checkUser = () => {
  const [user, setUser] = useState(null)
  const [custom, setCustom] = useState(null)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const signedInUser = await Auth.currentAuthenticatedUser()
        setUser(signedInUser)
      } catch (err) { setUser(null) }
    }
    checkAuth()
    const unsubscribe = Hub.listen('auth', ({ payload: {event, data} }) => {
      switch (event) {
        case 'signIn': 
          setUser(data)
          break
        case 'signOut':
          setUser(null)
          break
        case 'customOAuthState':
          setCustom(data)
          break
        default:
          break
      }
    })
    return () => unsubscribe()
  }, [])

  return user
}

export default checkUser