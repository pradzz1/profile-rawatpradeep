import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' ;
import About from "./components/AboutMe";
import Contact from "./components/Contact";
const routing = (  
  <><Router>
    <div >
      <ul className='flex navigation'>
        <li className='mr-6'>
          <Link to="/profile-rawatpradeep">Home</Link>
        </li>
        <li className='mr-6'>
          <Link to="/about">About</Link>
        </li>
        <li className='mr-6'>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
      <Route exact path="/profile-rawatpradeep" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
  </>
)  
ReactDOM.render(
  routing,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
