import React from 'react'
import {useSelector} from 'react-redux'
function Counter() {
    const counter = useSelector(state => state.plus.number)
    return (
        <div>
            {counter}
        </div>
    )
}

export default Counter
