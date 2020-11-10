import React from 'react';
import jwtDecode from 'jwt-decode'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

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

// AUTHENTICATE USER
let authenticated
const token = localStorage.FBIToken
console.log(token)
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    authenticated = false;
  }else{
    console.log(token)
    authenticated = true
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/shop' component = {Shop} />
          <AuthRoute exact path = '/login' component = {Login} authenticated = {authenticated}/>
          <AuthRoute exact path = '/signup' component = {Signup}  authenticated = {authenticated} />
          <UserRoute exact path = '/user' component = {UserProfile}  authenticated = {authenticated} />
          <Route exact path = '/about' component = {About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
