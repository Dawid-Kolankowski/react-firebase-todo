import React, { useContext } from 'react'
import CreateTodoInput from './CreateTodoInput'
import { TodoProvider } from './providers/TodoProvider'
import TodoTable from './TodoTable'

const Home: React.FC = () => {
  return (
    <>
      <TodoProvider>
        <CreateTodoInput />
        <TodoTable />
      </TodoProvider>
    </>
  )
}

export default Home
