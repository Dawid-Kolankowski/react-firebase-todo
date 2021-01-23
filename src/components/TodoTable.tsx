import React, { useContext } from 'react'
import { TodoContext } from './providers/TodoProvider'
import TodoItem from './TodoItem'

const TodoTable = () => {
  const todos = useContext(TodoContext)

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
    </div>
  )
}

export default TodoTable
