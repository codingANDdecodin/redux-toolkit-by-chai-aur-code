import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/TodoSlice';

function AddTodos() {
    const [input,setInput]=useState('');
    const dispatch=useDispatch()

    const addTodoHandler=(e)=>{
          e.preventDefault();
          dispatch(addTodo(input))
          setInput('')
    }
  return (
    <div>
        <form onSubmit={addTodoHandler}>
            <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
            <button type='submit' >Add todo</button>
        </form>
    </div>
  )
}

export default AddTodos