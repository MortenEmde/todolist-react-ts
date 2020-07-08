import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import './styles/App.css';

let storedTodos: Array<Todo>;
if (localStorage.getItem('items')) {
  storedTodos = JSON.parse(localStorage.getItem('items') || '{}');
} else {
  storedTodos = [
    {text: 'Water the cat', complete: false},
    {text: 'Vacuum the lawn', complete: false},
    {text: 'Make TS Todo app', complete: true},
  ];
}
localStorage.setItem('items', JSON.stringify(storedTodos));
const initialTodos: Array<Todo> = JSON.parse(localStorage.getItem('items') || '{}');

function App() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos)
    localStorage.setItem('items', JSON.stringify(newTodos))
  };

  const addTodo: AddTodo = newTodo => {
    if (newTodo !== '') {
      let newTodos = [...todos, {text: newTodo, complete: false}]
        setTodos(newTodos)
        localStorage.setItem('items', JSON.stringify(newTodos))
    }
  }

  const deleteTodo: DeleteTodo = completeTodo => {
    let oldTodoIndex = todos.findIndex(todo => todo.text === completeTodo)
    todos.splice(oldTodoIndex, 1)
    setTodos([...todos])
    localStorage.setItem('items', JSON.stringify(todos))
  }

  return (
    <div className='app'>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
