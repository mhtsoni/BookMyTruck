import React from 'react';
import './App.css';
import GridForm from './components/GridForm';
import SimpleMap from './components/Home.js';
import Footer from './components/footer.js';
import HeadSection from './components/HeadSection.js';
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
                        <Link to="/track">Track You Truck</Link>
                        </li>
                    </ul>
                    </nav>
              </div>
           <Switch>
              <Route path="/faq">
                  <GridForm/>
              </Route>
              <Route path="/track">
                <SimpleMap/>
              </Route>
              <Route path="/">
                  <HeadSection/>
              </Route>
            </Switch>
            </Router>
          <Footer/>
        </div>
      );
  }

}

export default App;
