import './App.css'
import { GoogleAuthProvider, User, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { doc, setDoc, getFirestore, getDoc, onSnapshot, collection, addDoc, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { auth } from './firebase'
import { useState, useEffect } from 'react'
import Chat from './components/chat/Chat'
import Login from './components/login/Login'

const db = getFirestore()

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [messages, setMessages] = useState<{ id: string; data: any }[]>([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timeStamp'))
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(snapshot.docs.map( doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    return unsubscribe
  }, [])

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

  const sendMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      uid: user?.uid,
      photoUrl: user?.photoURL,
      displayName: user?.displayName,
      text: newMessage,
      timestamp: serverTimestamp() 
    })
  }
  
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

export default App
