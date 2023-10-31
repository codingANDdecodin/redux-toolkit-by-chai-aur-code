import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/TodoSlice';

function Todos() {
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todos)
  console.log(todos)
  return (
    <>
        <div>todos</div>
        {todos.map((todo)=>{
            return<li key={todo.id}>
                {todo.text}
                <button onClick={()=>{dispatch(removeTodo(todo.id))}}>x</button>
            </li>
        })}
    </>
  )
}

export default Todos