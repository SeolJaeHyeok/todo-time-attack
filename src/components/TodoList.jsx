import { useState } from 'react';
import TodoItem from './TodoItem';
/**
 * 투두 리스트 컴포넌트 완성하기
 * 1. 투두 리스트 추가 기능 구현
 * 2. 투두 리스트 삭제 기능 구현
 * 3. 투두 리스트 완료 기능 구현
 * 4. 컴포넌트 분리
 *
 *
 *
 * 5. local storage에 데이터 저장하기
 */
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setInput('');
    console.log(todos);
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <form className='mb-6' onSubmit={handleAddTodo}>
        <div className='flex gap-2'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          />
          <button
            type='submit'
            onClick={() => {
              // 여기에 추가 로직 작성
            }}
            className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none'
          >
            추가
          </button>
        </div>
      </form>
      <div className='space-y-2'>
        <TodoItem />
      </div>
    </div>
  );
}

export default TodoList;
