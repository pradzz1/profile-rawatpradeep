import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import "./App.css";
import Home from "./components/home"
import aboutMe from "./components/aboutMe";
import contact from "./components/contact";
import experience from "./components/totalExperience";
import footer from "./components/footer";
import { Space } from 'antd';
import { Skeleton } from 'antd';




const { Header, Footer, Content } = Layout;


function App() {
  return (
    
    <Router>
      <div>
      <Layout>
      <Header>
      <Space>
      <NavLink to="/" exact className="link" activeClassName="active">
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
        </Space>
      </Header>
      <Content>
      
      <Switch>
          <Route path="/" exact children={Home} />
          <Route path="/aboutMe" exact children={aboutMe} />
          <Route path="/experience" children={experience} />
          <Route path="/contact" children={contact} />
        </Switch>
    
      </Content>
      
  <Footer>{footer}</Footer>
    </Layout>
       

       
      </div>
    </Router>
  );
}

export default App;
