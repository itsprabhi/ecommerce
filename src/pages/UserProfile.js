import React, {useEffect} from 'react'
import {SET_UNAUTHENTICATED} from '../redux/types'
import {useDispatch} from 'react-redux'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import axios from 'axios'

function UserProfile() {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('/user').then(res => {
            console.log(res.data)
        })
    })
    return (
        <div>
            This is user profile

            <button onClick = {() => dispatch({type: SET_UNAUTHENTICATED})}>
                Log Out
            </button>
        </div>
    )
}

UserProfile.propTypes = {
    user: Proptypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(UserProfile)
