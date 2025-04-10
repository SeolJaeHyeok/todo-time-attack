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

import React, { useState } from 'react';

function TodoList() {
  const [todolist, setTodolist] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddList = (e) => {
    e.preventDefault();

    const todoItem = {
      text: newTodo,
      check: false,
    };

    setTodolist([...todolist, todoItem]);
    setNewTodo('');
  };

  const handleDelete = (index) => {
    setTodolist(todolist.filter((todoItem) => todoItem.index !== index));
  };

  

  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <form className='mb-6' onSubmit={handleAddList}>
        <div className='flex gap-2'>
          <input
            value={newTodo}
            onChange={handleInput}
            className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          />
          <button
            type='submit'
            className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none'
          >
            추가
          </button>
        </div>
      </form>

      <div className='space-y-2'>
        <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
          <div className='flex items-center gap-3'>
            <input
              type='checkbox'
              onChange={() => {
                console.log('여기에 완료 로직 작성');
              }}
              className='w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-blue-500 checked:border-blue-500 focus:outline-none'
            />
            <span>투두 1</span>
          </div>
          <button
            onClick={() => {
              handleDelete;
            }}
            className='px-3 py-1 text-sm text-red-600 hover:bg-red-100 rounded-lg focus:outline-none'
          >
            삭제
          </button>
        </div>
      </div>

      <ul className='space-y-2'>
        {todolist.map((item, index) => (
          <li key={index} className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
            <div className='flex items-center gap-3'>{item.text}</div>
            <button
              onClick={handleDelete}
              className='px-3 py-1 text-sm text-red-600 hover:bg-red-100 rounded-lg focus:outline-none'
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
