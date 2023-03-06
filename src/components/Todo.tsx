import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  RemoveTodo: (id: string) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, RemoveTodo }) => {
  return (
    <div>
      <input
        className='toggle'
        type="checkbox"
        checked={completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={(e) => {
          e.preventDefault()
          RemoveTodo(id)
        }}
      >

      </button>
    </div>
  )
}
