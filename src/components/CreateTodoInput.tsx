import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useInput } from './hooks/useInput'
import firebaseApp from '../firebase'

const CreateTodoInput = () => {
  const { value: todo, onChange: onChangeTodo, setValue: setTodo } = useInput(
    '',
  )
  const notify = (message: string) => toast.error(message)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const content = todo
    const { uid } = firebaseApp.auth().currentUser || {}

    const document: { content: string; completed: boolean } = {
      content,
      completed: false,
    }

    firebaseApp
      .firestore()
      .doc(`users/${uid}`)
      .collection('todos')
      .add(document)
      .catch((error) => {
        notify(error.message)
      })

    setTodo('')
  }

  return (
    <form className="todo content-wrapper" onSubmit={handleSubmit}>
      <ToastContainer />
      <button
        className="todo__action__button"
        type="submit"
        aria-label="add todo"
      />
      <input
        className="todo__input"
        type="text"
        name="todo"
        placeholder="Create a new todo..."
        value={todo}
        onChange={onChangeTodo}
      />
    </form>
  )
}

export default CreateTodoInput
