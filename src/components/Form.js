import React from 'react'
import textAction from '../actions/textAction'
import {useDispatch} from 'react-redux'


function Form() {
    const dispatch = useDispatch()
    let text
    const getText = (e) => {
        text = e.target.value
        console.log(text)
    }
    return (
        <div>
            <input type = 'text' onChange = {getText}></input>
            <button onClick = {() => dispatch(textAction(text))}> Click </button>
        </div>
    )
}

export default Form
