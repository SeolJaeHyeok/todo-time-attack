import { useCallback, useReducer, useRef } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const ACTIONS = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.CREATE:
      return [...state, payload];

    case ACTIONS.UPDATE:
      return state.map((todo) => (todo.id === payload.id ? { ...todo, isDone: !todo.isDone } : todo));

    case ACTIONS.DELETE:
      return state.filter((todo) => todo.id !== payload.id);

    default:
      return state;
  }
};

function TodoList() {
  const idRef = useRef(0);
  const [todos, dispatch] = useReducer(reducer, []);

  const handleCreate = useCallback((content) => {
    dispatch({
      type: ACTIONS.CREATE,
      payload: {
        id: idRef.current++,
        isDone: false,
        content,
      },
    });
  }, []);

  const handleUpdate = useCallback((id) => {
    dispatch({
      type: ACTIONS.UPDATE,
      payload: { id },
    });
  }, []);

  const handleDelete = useCallback((id) => {
    dispatch({
      type: ACTIONS.DELETE,
      payload: { id },
    });
  }, []);

  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <TodoInput onCreate={handleCreate} />

      <div className='space-y-2'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
