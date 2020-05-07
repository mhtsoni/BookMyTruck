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
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
      render(){
      return (
        <div>
            <Router>
              <header>
                <nav>
                  <div id="navbar">
                    <div id="logo" className="reverse">
                      <div className="mobile-btn" style={{cursor:"pointer"}} onClick={this.openNav}>&#9776;</div>
                      <div className="logo">BOOK<span>MY</span> TRUCK</div>

                    </div>
                    <div id="links">
                  <Link to="/">Home</Link>
                  <Link to="/faq">FAQ</Link>
                  <Link to="/OurCenters">Our Service centers</Link>
                  <Link to="/login">LogIn/SignUp</Link>
                    </div>
                  </div>

                </nav>

                <div id="mySidenav" className="sidenav">
                  <a className="closebtn" onClick={this.closeNav}>&times;</a>
                  <Link to="/">Home</Link>
                  <Link to="/faq">FAQ</Link>
                  <Link to="/OurCenters">Our Service centers</Link>
                  <Link to="/login">LogIn/SignUp</Link>
                </div>
              </header>

           <Switch>
              <Route path="/Login">
                  <LoginSignup/>
                  <Login/>
              </Route>
              <Route path="/faq">
                  <GridForm/>
              </Route>
              <Route path="/OurCenters">
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
