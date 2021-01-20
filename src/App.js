import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/global/global.css';
import axios from 'axios';

// UTILS
import AuthRoute from './utils/authRoute';
import UserRoute from './utils/userRoute';

// COMPONENTS
import Navbar from './components/Navbar';
import LoadingBanner from './components/LoadingBanner'
import MessegeBox from './components/MessegeBox'

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import Product from './pages/Product';



// REDUX
import {SET_AUTHENTICATED, SET_UI, SET_UNAUTHENTICATED } from './redux/types'
import { getUserData} from './redux/actions/userActions'
import {getProducts} from './redux/actions/dataActions'
import {connect} from 'react-redux'
import store from './redux/store'
import CreateProduct from './pages/CreateProduct';
import Admin from './pages/Admin';
import AdminRoute from './utils/AdminRoute';
import ProductUpdate from './components/ProductUpdate';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import AdminOrders from './pages/AdminOrders';
import AdminProducts from './pages/AdminProducts';
import Checkout from './pages/Checkout';

// AUTHENTICATE USER



function App(props) {

  
  useEffect(() => {
    let csrfToken;
    let userClaims
    axios.get('/checkUser')
    .then(data => {
      console.log(data.data)
      csrfToken = data.data.csrfToken
      userClaims = data.data.decodedClaims
      axios.defaults.headers['X-CSRF-Token'] = csrfToken
    })
    .then(() => {
      if(userClaims){
        store.dispatch({type: SET_AUTHENTICATED})
        store.dispatch(getUserData())
      }else{
        store.dispatch({type: SET_UNAUTHENTICATED})
        store.dispatch({type:SET_UI})
      }
    })
    .then(() => {
        store.dispatch(getProducts())
    })
    .catch(err => console.log(err))
  },[])

  const whenLoading = props.isLoading ? <LoadingBanner /> : (<></>)
  const isError = typeof props.errors === 'string' ? <MessegeBox errors = {props.errors} /> : (<></>)

  return (
    
    <div className="App">
      {isError}
      {whenLoading}
      <Router>
      <div className = 'main-frame'>
      
        <Navbar/>
        <div className = 'app-frame'>
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/shop' component = {Shop} />
            <Route exact path = '/shop/product/:id' component = {(props) => <Product {...props} />} />
            <Route exact path = '/shop/:option/:id' component = {(props) => <Shop {...props} />} />
            <AuthRoute exact path = '/login' component = {Login}/>
            <AuthRoute exact path = '/signup' component = {Signup}  />
            <AdminRoute exact path = '/admin/create/product' component = {CreateProduct}  />
            <AdminRoute exact path = '/admin/product/update/:id' component = {ProductUpdate}  />
            <AdminRoute exact path = '/admin' component = {Admin}  />
            <AdminRoute exact path = '/admin/orders' component = {AdminOrders}  />
            <AdminRoute exact path = '/admin/products' component = {AdminProducts}  />
            <UserRoute exact path = '/user' component = {UserProfile}  />
            <UserRoute exact path = '/user/cart' component = {Cart}  />
            <Route exact path = '/user/checkout' component = {Checkout}  />
            <Route exact path = '/about' component = {About} />
          </Switch>
        </div>
      
      </div>
      <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  isLoading: state.ui.loading,
  errors: state.ui.errors
})

export default connect(mapStateToProps)(App);
