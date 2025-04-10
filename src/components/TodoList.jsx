function TodoList() {
  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <form className='mb-6'>
        <div className='flex gap-2'>
          <input className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' />
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
              className='w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-blue-500 checked:border-blue-500 focus:outline-none'
            />
            <span>투두 1</span>
          </div>
          <button className='px-3 py-1 text-sm text-red-600 hover:bg-red-100 rounded-lg focus:outline-none'>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
