import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.css";
import Home from "./components/home"
import aboutMe from "./components/aboutMe";
import contact from "./components/contact";
import experience from "./components/totalExperience";
import footer from "./components/footer";


function App() {
  return (
    
    <Router>
      <div>
      
      <div id="header" className="clearfix">
     <div className="ant-row">
     <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4"><h1>
       <a id="logo" href="/profile-rawatpradeep">Pradeep Rawat - Developer</a></h1>
       </div>
       <div className="ant-col menu-row ant-col-xs-0 ant-col-sm-0 ant-col-md-18 ant-col-lg-18 ant-col-xl-9 ant-col-xxl-20"></div>
       <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4">

      <NavLink to="/profile-rawatpradeep" exact className="link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/aboutMe" className="link" activeClassName="active">
          About Me
        </NavLink>
        <NavLink to="/experience" className="link" activeClassName="active">
          Experience
        </NavLink>
        <NavLink to="/contact" className="link" activeClassName="active">
          Contact
        </NavLink>
     
        </div>
        </div>
      </div>
      <div>
      <div className="main-wrapper">
      <Switch>
        <Route path="/profile-rawatpradeep" exact children={Home} />
          <Route path="/aboutMe" exact children={aboutMe} />
          <Route path="/experience" children={experience} />
          <Route path="/contact" children={contact} />
         
        </Switch>
        </div>
      </div>
      
  <div>{footer}</div>
  
       

       
      </div>
    </Router>
  );
}

export default App;
