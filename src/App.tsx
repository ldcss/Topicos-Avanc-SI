import { GoogleAuthProvider, User, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { getFirestore, onSnapshot, collection, orderBy, query } from 'firebase/firestore'
import { auth } from './firebase'
import { useState, useEffect } from 'react'
import Login from './components/login/Login'
import RoutesUrl from './routes'

const db = getFirestore()

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
      const result = await signInWithPopup(auth, provider)
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
