function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
        />
        <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="px-3 py-1 text-sm text-red-600 hover:bg-red-100 rounded-lg focus:outline-none"
      >
        삭제
      </button>
    </div>
  )
}

export default TodoItem 