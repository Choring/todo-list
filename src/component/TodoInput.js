import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export const TodoInput = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const saveTodo = () => {
    if(todoText){
      dispatch({type:"SAVE-TODO", payload:todoText});
      setTodoText('');
    } else {
      alert("내용을 입력 해주세요");
    }
  }

  return (
    <div className='d-flex align-items-center justify-content-center mt-5 gap-1'> 
        <input className='w-50 py-2 px-2 rounded border border-1' value={todoText} onChange={(e) => setTodoText(e.target.value) } type='text' placeholder='할일을 입력해 주세요' />
        <Button variant="primary" onClick={saveTodo} >추가</Button>
    </div>
  )
}