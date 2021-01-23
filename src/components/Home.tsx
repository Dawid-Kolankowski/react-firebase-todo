import React from 'react'
import CreateTodoInput from './CreateTodoInput'
import { TodoProvider } from './providers/TodoProvider'
import TodoTable from './TodoTable'
import firebaseApp from '../firebase'

const Home: React.FC = () => {
  const onSignOut = () => {
    firebaseApp.auth().signOut()
  }

  return (
    <>
      <TodoProvider>
        <CreateTodoInput />
        <TodoTable />
      </TodoProvider>
      <button type="button" className="signout" onClick={onSignOut}>
        Sign Out
      </button>
    </>
  )
}

export default Home
