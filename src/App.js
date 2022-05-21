import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./components/home"
import aboutMe from "./components/aboutMe";
import contact from "./components/contact";
import experience from "./components/totalExperience";
import footer from "./components/footer";
import HeaderNav from "./components/Navigation"

function App() {
  return (<Router>  
    <HeaderNav/>
      <div className="main-wrapper">
      <Switch>
        <Route path="/profile-rawatpradeep" exact children={Home} />
          <Route path="/profile-rawatpradeep/aboutMe" exact children={aboutMe} />
          <Route path="/profile-rawatpradeep/experience" children={experience} />
          <Route path="/profile-rawatpradeep/contact" children={contact} />
         
        </Switch>
        </div>
  <div>{footer}</div>
    </Router>
  );
}

export default App;
