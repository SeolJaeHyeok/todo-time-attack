import { useState } from 'react';

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
  const [inputTodo, setInputTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onChangeTodo = (e) => {
    const input = e.target.value;
    setInputTodo(input);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { status: false, content: inputTodo, time: Date.now() }]);
    setInputTodo('');
  };

  const handleDoneTodo = (e) => {
    const todoId = e.target.value;
    console.log(todoId);
    const todo = todos.find((item) => {
      console.log(item);
      return item.time === todoId;
    });
    console.log(todo);

    if (!todo.status) {
      console.log('할 일 완료', todo.content);
    }
  };

  const handleDelTodo = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <form className='mb-6'>
        <div className='flex gap-2'>
          <input
            onChange={onChangeTodo}
            value={inputTodo}
            className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          />
          <button
            type='submit'
            onClick={handleAddTodo}
            className='px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none'
          >
            추가
          </button>
        </div>
      </form>

      <div className='space-y-2'>
        {todos.map((todo) => {
          return (
            <div className='flex items-center justify-between p-4 rounded-lg bg-gray-50'>
              <div className='flex items-center gap-3'>
                <input
                  type='checkbox'
                  onChange={handleDoneTodo}
                  value={todo.time}
                  className='w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-blue-500 checked:border-blue-500 focus:outline-none'
                />
                <span>{todo.content}</span>
              </div>
              <button
                onClick={handleDelTodo}
                className='px-3 py-1 text-sm text-red-600 rounded-lg hover:bg-red-100 focus:outline-none'
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
