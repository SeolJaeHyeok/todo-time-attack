function TodoItem({ todo, onUpdate, onDelete }) {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
      <div className='flex items-center gap-3'>
        <input
          type='checkbox'
          checked={todo.isDone}
          onChange={() => onUpdate(todo.id)}
          className='w-5 h-5 border-2 border-gray-300 rounded-md'
        />
        <span className={todo.isDone ? 'line-through text-gray-400' : ''}>{todo.content}</span>
      </div>
      <button onClick={() => onDelete(todo.id)} className='px-3 py-1 text-sm text-red-600 hover:bg-red-100 rounded-lg'>
        삭제
      </button>
    </div>
  );
}

export default TodoItem;
