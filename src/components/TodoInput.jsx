import { useRef, useState } from 'react';

function TodoInput({ onCreate }) {
  const inputRef = useRef();
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onCreate(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <div className='flex gap-2'>
        <input
          ref={inputRef}
          className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
          추가
        </button>
      </div>
    </form>
  );
}

export default TodoInput;
