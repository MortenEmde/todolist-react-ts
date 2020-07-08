import React, { MouseEvent } from 'react';
import '../styles/TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, deleteTodo }) => {

  const removeTodo = (e: MouseEvent<HTMLButtonElement>) => {
    deleteTodo(todo.text)
  }

  return (
    <li className='todoItem'>
      <input 
        className='checkbox'
        type= 'checkbox' 
        checked={todo.complete} 
        onChange={() => toggleTodo(todo)} 
      />
      <label className={todo.complete ? 'complete' : undefined}>
        {todo.text}
      </label>
      <button className='deleteBtn' onClick={removeTodo}>&#128465;</button>
    </li> 
  )
} 