import Chat from '@/components/chat/Chat'
import Login from '@/components/login/Login'
import { auth } from '@/firebase'
import RoutesUrl from '@/routes'
import { GoogleAuthProvider, User, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { doc, setDoc, getFirestore, getDoc, onSnapshot, collection, addDoc, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { useState, useEffect } from 'react'

const db = getFirestore()

export default function Home() {
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
    <div className='App'>
        {user ? (
          <Chat />
        // <> codigo para salvar o chat no firebase
        // <div>Logged in as {user.displayName}</div>
        // <input value={newMessage} onChange={e => setNewMessage(e.target.value)} />
        // <button onClick={sendMessage}>Send Message</button>
        // <button onClick={() => auth.signOut()}>Logout</button>

        // {
        //   messages.map(msg => (
        //     <div key={msg.id}>
        //       <img src={msg.data.photoUrl} />
        //       {msg.data.text}
        //     </div>
        //   ))
        // }
        // </>
        ) : (<Login handleLogin={handleGoogleLogin} />)}
        </div>
    )
  }