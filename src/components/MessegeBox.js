import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {clearErrors} from '../redux/actions/userActions'
function MessegeBox(props) {

    const [errors,setErrors] = useState(props.errors)

    useEffect(() => {
        setErrors(props.errors)
        // console.log(props.errors)
    }, [props.errors])

    return (
        <div className = 'messege-box'>
            <div className = 'messege-box-content'>
            <h5>{errors}</h5>
            <button onClick = {props.clearErrors} className = 'buy-btn'>OK</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

}

const mapActionsToProps = {
    clearErrors
}

export default connect(mapStateToProps,mapActionsToProps)(MessegeBox)
