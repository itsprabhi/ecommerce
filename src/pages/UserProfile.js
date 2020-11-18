import React, {useEffect} from 'react'
import {SET_UNAUTHENTICATED} from '../redux/types'
import {useDispatch} from 'react-redux'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import axios from 'axios'
import ProfileUpdate from '../components/ProfileUpdate'
import OrderList from '../components/OrderList'

function UserProfile(props) {
    return (
        <div className = 'profile-page'>
            <ProfileUpdate user = {props.user}/>
            <OrderList orders = {props.orders}/>
        </div>
    )
}

UserProfile.propTypes = {
    user: Proptypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    orders: state.user.orders
})

export default connect(mapStateToProps)(UserProfile)
