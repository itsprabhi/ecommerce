import React, { useEffect } from 'react';
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
import CreateProduct from './pages/CreateProduct';

// AUTHENTICATE USER

let authenticated;

function App() {
  
  useEffect(() => {
    let csrfToken;
    axios.get('/csrfToken')
    .then(data => {
      csrfToken = data.data.csrfToken
      axios.defaults.headers['X-CSRF-Token'] = csrfToken
    })
  },[])

  useEffect(() => {
    console.log(`use effect`)
    axios.get('/checkUser')
    .then(res => {
      if(res.data.authenticated){
        authenticated = res.data.authenticated
        store.dispatch({ type: SET_AUTHENTICATED})
        store.dispatch(getUserData())
        console.log(authenticated)
      }
    })
    .catch(err => console.log(err))
  })

  return (
    <Provider store = {store}>
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/shop' component = {Shop} />
          <Route exact path = '/shop/product/:id' component = {(props) => <Product {...props} />} />
          <AuthRoute exact path = '/login' authenticated = {authenticated} component = {Login}/>
          <AuthRoute exact path = '/signup' authenticated = {authenticated} component = {Signup}  />
          <Route exact path = '/admin/create/product' authenticated = {authenticated} component = {CreateProduct}  />
          <UserRoute exact path = '/user' component = {UserProfile}  />
          <Route exact path = '/about' component = {About} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
