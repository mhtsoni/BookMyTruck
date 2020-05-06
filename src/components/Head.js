import React from "react";
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//header
class Head extends React.Component{
    render(){
    return (
    <div>
        <ul className="header-ul">
        <Router>
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/users">Users</Link>
                    </li>
                </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
               
            </div>
        </Router>
        </ul><br/>
    </div>
    );
    }
}

//footer
class Foot extends React.Component{
    render(){
        return (<h1>This is a footer</h1>);
    }
}
export { Head,Foot};