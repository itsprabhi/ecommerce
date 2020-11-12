import React from 'react'
import {SET_UNAUTHENTICATED} from '../redux/types'
import {useDispatch} from 'react-redux'

function UserProfile() {
    const dispatch = useDispatch()
    return (
        <div>
            This is user profile

            <button onClick = {() => dispatch({type: SET_UNAUTHENTICATED})}>
                Log Out
            </button>
        </div>
    )
}

export default UserProfile
