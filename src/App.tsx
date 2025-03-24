import { GoogleAuthProvider, User, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase'
import { useState, useEffect } from 'react'
import Login from './components/login/Login'
import RoutesUrl from './routes'

function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(
      auth,
      user => {
        if (user) {
          setUser(user)
        } else {
          setUser(null)
        }
      }
    )
  }, [])


  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()

    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.log(error)
    }
  }
  return (
      user
      ? <RoutesUrl user={user} />
      : <Login handleLogin={handleGoogleLogin} />
  )
}

export default App
