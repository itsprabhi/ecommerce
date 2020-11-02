import React from 'react';

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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/shop' component = {Shop} />
          {/* <Route exact path = '/user/profile' component = {UserProfile} /> */}
          <Route exact path = '/login' component = {Login} />
          {/* <Route exact path = '/signup' component = {Signup} /> */}
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
