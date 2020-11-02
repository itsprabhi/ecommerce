import React from 'react'
import { useDispatch } from 'react-redux'
import plus from '../actions/counteActions'

function PlusBtn() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick = {()=> dispatch(plus())} >
                +
            </button>
        </div>
    )
}

export default PlusBtn
