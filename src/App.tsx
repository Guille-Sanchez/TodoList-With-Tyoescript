import { useState } from 'react'
import Todos from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'Todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'Todo 3',
    completed: false
  }
]

function App (): JSX.Element {
  const [todos] = useState(mockTodos)
  return (
    <>
      <h1>todo mvc</h1>
      <Todos todos={todos} />
    </>
  )
}

export default App
