import { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    const todo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false
    }

    setTodos([...todos, todo])
    setNewTodo('')
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="할 일을 입력하세요"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            추가
          </button>
        </div>
      </form>

      <div className="space-y-2">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => {
              setTodos(todos.map(t =>
                t.id === todo.id ? { ...t, completed: !t.completed } : t
              ))
            }}
            onDelete={() => {
              setTodos(todos.filter(t => t.id !== todo.id))
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList 