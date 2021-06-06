import React, { Component } from 'react'
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from './components/Home';
import Books from './components/Books';
import Posts from './components/Posts';

 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Testisivusto (SPA)</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/books" component={Books}/>
            <Route path="/posts" component={Posts}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
