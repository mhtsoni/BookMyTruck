import React from 'react';
import './App.css';
import GridForm from './components/GridForm';
import SimpleMap from './components/Home.js';
import Footer from './components/footer.js';
import HeadSection from './components/HeadSection.js';
import HowThisGoes from './components/HowThisGoes.js'
import LoginSignup from './components/LoginSignup.js'
import SignUp from "./components/SignUp.js"
import Login from "./components/Login.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {
      render(){
      return (
        <div>
            <Router>
              <div className="header-wrapper">
                    <nav className="navBar">
                    <ul className="header-ul">
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                        <Link to="/OurCenters">Our Service centers</Link>
                        </li>
                        <li>
                        <Link to="/login">LogIn/SignUp</Link>
                        </li>
                    </ul>
                    </nav>
              </div>
           <Switch>
              <Route path="/Login">
                  <LoginSignup/>
                  <Login/>
              </Route>
              <Route path="/faq">
                  <GridForm/>
              </Route>
              <Route path="/track">
                <SimpleMap/>
              </Route>
              <Route path="/signup">
                  <LoginSignup/>
                  <SignUp/>
              </Route>
              <Route path="/">
                  <HeadSection/>
                  <HowThisGoes/>
              </Route>
            </Switch>
            </Router>
          <Footer/>
        </div>
      );
  }

}

export default App;
