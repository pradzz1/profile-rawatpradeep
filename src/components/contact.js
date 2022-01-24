import React from 'react';
import { Card } from 'antd';
import SectionHeader from './sectionHeader';
const { Meta } = Card; 
const contact = () =>{
  return(
    <><SectionHeader name="Contact"></SectionHeader><Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />


      <Meta title="9886188822"></Meta>
      <Meta title="pradzz.rawat6@gmail.com"></Meta>
    </Card></>);
}


export default contact;