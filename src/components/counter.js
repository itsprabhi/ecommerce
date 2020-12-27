import React from 'react'
import {useSelector} from 'react-redux'

// just for practice purposes
function Counter() {
    const counter = useSelector(state => state.plus.number)
    return (
        <div>
            {counter}
        </div>
    )
}

export default Counter
