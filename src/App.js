import React from 'react';
import jwtDecode from 'jwt-decode'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/global/global.css';
import axios from 'axios';


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
import {SET_AUTHENTICATED } from './redux/types'
import {logoutUser, getUserData} from './redux/actions/userActions'
import { Provider } from 'react-redux'
import store from './redux/store'

// AUTHENTICATE USER

const token = localStorage.FBIToken
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser())
  }else{
    store.dispatch({ type: SET_AUTHENTICATED})
    axios.defaults.headers.common['Authorization'] = token
    store.dispatch(getUserData())
  }
}
 


function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/shop' component = {Shop} />
          <Route exact path = '/shop/product/:id' component = {(props) => <Product {...props} />} />
          <AuthRoute exact path = '/login' component = {Login}/>
          <AuthRoute exact path = '/signup' component = {Signup}  />
          <UserRoute exact path = '/user' component = {UserProfile}  />
          <Route exact path = '/about' component = {About} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
