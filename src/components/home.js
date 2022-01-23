import React from 'react';
import { Button } from 'antd';
import {  } from '@ant-design/icons';
import { Divider } from 'antd';
//import filmStripe from './filmstripe';

const alertClick = () =>{
    alert("hello world");
};
const home = () =>{
    return(
      <><p>
        Name  : Pradeeo Rawat <br></br>
        Work : Software engineer <br></br>
        Description : ● I currently work as a Senior Technical Consultant for Oracle corporation , having over 7 years of experience. My responsibilities include developing Business Application using Object Oriented JavaScript (ES6), Nodejs, html5, Angular8, bootstrap4, CSS3, jQuery, jQuery UI, High charts, D3js, MYSQL, HADOOP , MANGODB , AWS , dockers , CI/CD , Jenkins , GitHub, .NET .
● I am Quick learner & Self-directed, consistently updating myself with emerging trend in the Industry.
● Committed towards exploration of analytics & machine learning technology.
      </p><Divider /><p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
          probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p><Divider dashed /><p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
          probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p></>
    );
}
export default home;
