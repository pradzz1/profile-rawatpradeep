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
import { Space } from "antd";
import developerCodesvg from './developerCode.svg' ; 

const { Header, Footer, Content } = Layout;
function App() {
  return (
    
    <Router>
      <div>
      <Layout>
      <Header id="header" className="clearfix">
     <div className="ant-row">
     <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4"><h1>
       <a id="logo" href="/"><img alt="logo" src={developerCodesvg}/>Pradeep Rawat - Developer</a></h1>
       </div>
       <div className="ant-col menu-row ant-col-xs-0 ant-col-sm-0 ant-col-md-18 ant-col-lg-18 ant-col-xl-9 ant-col-xxl-20"></div>
       <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4">
    
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
        </div>
        </div>
      </Header>
      <Content>
      <div className="main-wrapper">
      <Switch>
        <Route path="/" exact children={Home} />
          <Route path="/aboutMe" exact children={aboutMe} />
          <Route path="/experience" children={experience} />
          <Route path="/contact" children={contact} />
         
        </Switch>
        </div>
      </Content>
      
  <Footer>{footer}</Footer>
    </Layout>
       

       
      </div>
    </Router>
  );
}

export default App;
