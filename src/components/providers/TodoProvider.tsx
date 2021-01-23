import React, { useEffect, useState, useContext } from 'react'
import firebase from 'firebase/app'
import firebaseApp from '../../firebase'
import { AuthContext } from './AuthProvider'

interface ITodo {
  content: string
  completed: boolean
  id: string
}
export const TodoContext = React.createContext<ITodo[]>([])

export const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [todo, setTodo] = useState<ITodo[]>([])
  const { uid } = useContext(AuthContext) || {}

  useEffect(() => {
    const unsubscribeFromFirestore = firebaseApp
      .firestore()
      .collection('users')
      .doc(`${uid}`)
      .collection('todos')
      .onSnapshot((snapshot) => {
        const todos = snapshot.docs.map(
          (doc): ITodo => {
            return {
              id: doc.id,
              ...(doc.data() as { completed: boolean; content: string }),
            }
          },
        )

        setTodo(todos)
      })

    return () => unsubscribeFromFirestore()
  }, [uid])

  return <TodoContext.Provider value={todo}>{children}</TodoContext.Provider>
}
