import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

export const RemoveButton = ({index}) => {
  const dispatch = useDispatch();
  const deleteBtn = (index) => {
      dispatch({type:"DELETE-TODO", payload:index})
  }

  return (
    <div>
        <Button variant="danger" onClick={() => deleteBtn(index)}>삭제</Button>
    </div>
  )
}
