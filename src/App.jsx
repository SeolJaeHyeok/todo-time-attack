import TodoList from './components/TodoList'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo App
        </h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App
