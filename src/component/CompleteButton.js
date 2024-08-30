import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

export const CompleteButton = ({index}) => {
    const dispatch = useDispatch();

    const completeBtn = (index) => {
        dispatch({type:"COMPLETE-TODO", payload:index})
    }

    return (
        <div>
            <Button variant="success" onClick={() => completeBtn(index)}>완료</Button>
        </div>
    )
}
