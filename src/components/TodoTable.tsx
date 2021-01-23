import React, { useContext } from 'react'
import { TodoContext } from './providers/TodoProvider'
import firebaseApp from '../firebase'
import TodoItem from './TodoItem'
import { AuthContext } from './providers/AuthProvider'

const TodoTable = () => {
  const todos = useContext(TodoContext)
  const count = todos.filter((obj) => obj.completed === false).length
  const { uid } = useContext(AuthContext) || {}

  const handleGroupDelete = () => {
    todos.forEach((obj) => {
      if (obj.completed === true) {
        firebaseApp
          .firestore()
          .doc(`users/${uid}`)
          .collection('todos')
          .doc(`${obj.id}`)
          .delete()
      }
    })
  }

  return (
    <div className=" todo__container  content-wrapper">
      <ul className="todo__list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            completed={todo.completed}
          />
        ))}
      </ul>
      <div className="todo__stats">
        <p>{`${count} ${count === 1 ? 'item left' : 'items left'}`}</p>
        <button
          type="button"
          className="todo__delete"
          onClick={() => handleGroupDelete()}
        >
          Clear completed
        </button>
      </div>
    </div>
  )
}

export default TodoTable
