import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/global/global.css';
import axios from 'axios';
import Cookie from 'js-cookie'

// UTILS
import AuthRoute from './utils/authRoute';
import UserRoute from './utils/userRoute';

// COMPONENTS
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import Product from './pages/Product';



// REDUX
import {SET_AUTHENTICATED, SET_UNAUTHENTICATED } from './redux/types'
import {logoutUser, getUserData} from './redux/actions/userActions'
import {connect} from 'react-redux'
import store from './redux/store'
import CreateProduct from './pages/CreateProduct';
import Admin from './pages/Admin';
import AdminRoute from './utils/AdminRoute';

// AUTHENTICATE USER



function App(props) {

  
  useEffect(() => {
    let csrfToken;
    axios.get('/csrfToken')
    .then(data => {
      csrfToken = data.data.csrfToken
      axios.defaults.headers['X-CSRF-Token'] = csrfToken
    })
  },[])

  useEffect(() => {
    axios.get('/checkUser')
    .then(res => {
      if(res.data.authenticated){
        store.dispatch({ type: SET_AUTHENTICATED})
        store.dispatch(getUserData())
      }else{
        store.dispatch({type: SET_UNAUTHENTICATED})
      }
    })
    .catch(err => console.log(err))
  })

  return (
    
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/shop' component = {Shop} />
          <Route exact path = '/shop/product/:id' component = {(props) => <Product {...props} />} />
          <Route exact path = '/shop/:option/:id' component = {(props) => <Shop {...props} />} />
          <AuthRoute exact path = '/login' component = {Login}/>
          <AuthRoute exact path = '/signup' component = {Signup}  />
          <AdminRoute exact path = '/admin/create/product' component = {CreateProduct}  />
          <AdminRoute exact path = '/admin' component = {Admin}  />
          <UserRoute exact path = '/user' component = {UserProfile}  />
          <Route exact path = '/about' component = {About} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(App);
