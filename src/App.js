import React from 'react';
import jwtDecode from 'jwt-decode'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Counter from './components/counter';
// import Form from './components/Form';
// import PlusBtn from './components/plusBtn';
import SignupForm from './components/SignupForm';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import AuthRoute from './utils/authRoute';
import UserRoute from './utils/userRoute';

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
          {/* <Route exact path = '/user/profile' component = {UserProfile} /> */}
          <AuthRoute exact path = '/login' component = {Login} authenticated = {authenticated}/>
          <AuthRoute exact path = '/signup' component = {Signup}  authenticated = {authenticated} />
          <UserRoute exact path = '/user' component = {UserProfile}  authenticated = {authenticated} />
          <Route exact path = '/about' component = {About} />
        </Switch>
      </Router>
    </div>
  );
}
{/* <Navbar />
        Yo whatsup boi
        {/* <Counter/>
        <PlusBtn />
        <Form /> */}
        // <SignupForm /> */}
export default App;
