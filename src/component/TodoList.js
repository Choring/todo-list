import React from 'react'
import { CompleteButton } from './CompleteButton'
import { RemoveButton } from './RemoveButton'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

export const TodoList = () => {
    const todoList = useSelector(state => state.todo);
    
    return (
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
            {
                todoList?.map((item,index) =>(
                    <div className={`w-100 d-flex justify-content-center align-items-center gap-1 mb-4`} key={index}>
                        <div className={`bg-white w-50 py-2 px-2 rounded position-relative`}>
                            {item.text}
                        </div>
                        {item.complete === true ?
                                <FontAwesomeIcon size="2xl" icon={faCircleCheck} style={{color: "#ff2c2c"}}  />    
                             :
                             <>
                                <CompleteButton index={index} />
                                <RemoveButton index={index} />
                             </>
                        }
                    </div>
                ))
            } 
        </div>
    )
}
