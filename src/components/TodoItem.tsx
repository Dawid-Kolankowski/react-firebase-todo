import React, { useContext } from 'react'
import crossIcon from '../images/icon-cross.svg'
import checkIcon from '../images/icon-check.svg'
import firebaseApp from '../firebase'
import { AuthContext } from './providers/AuthProvider'

interface IProps {
  content: string
  id: string
  completed: boolean
}

const TodoItem = ({ content, id, completed }: IProps) => {
  const { uid } = useContext(AuthContext) || {}

  const handleDelete = () => {
    firebaseApp
      .firestore()
      .doc(`users/${uid}`)
      .collection('todos')
      .doc(`${id}`)
      .delete()
  }

  const handleComplete = () => {
    firebaseApp
      .firestore()
      .doc(`users/${uid}`)
      .collection('todos')
      .doc(`${id}`)
      .update({ completed: !completed })
  }

  return (
    <li className="todo__list__item">
      <button
        className={`todo__completed ${
          completed ? 'todo__completed--active' : ''
        }`}
        type="submit"
        aria-label="add todo"
        onClick={() => handleComplete()}
      >
        <img src={checkIcon} alt="check" />
      </button>

      <div className={`todo__text ${completed ? 'text-crossed' : ''}`}>
        {content}
      </div>

      <button
        type="button"
        className="todo__delete"
        onClick={() => handleDelete()}
      >
        <img src={crossIcon} alt="check" className="hidden" />
      </button>
    </li>
  )
}

export default TodoItem
