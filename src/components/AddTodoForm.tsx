import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/AddTodoForm.css'

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <form className='form'>
      <h1 className='formHeader'>React TS Todo App</h1>
      <input className='formInput' type='text' value={newTodo} onChange={handleChange}/>
      <button className='formBtn' type='submit' onClick={handleSubmit}>Add Todo</button>
    </form>
  );
};
