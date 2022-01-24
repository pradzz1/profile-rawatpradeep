import React from 'react';
import { Row, Col } from 'antd';
import SectionHeader from './sectionHeader';

const totalExperience = () =>{
    return(<><Row>
        <Col span={24}> <SectionHeader name="Experience"></SectionHeader></Col>
    </Row><Row>
            <Col span={12}>2012-2014</Col>
            <Col span={12}>Project – HRLIVE((http://hrlive.me/company/)</Col>
        </Row><Row>
            <Col span={8}>Project – LUFTANSA</Col>
            <Col span={8}>Project – DASH Century 21</Col>
            <Col span={8}>Project – Combo Suite – software engineer(promoted)</Col>
        </Row><Row>
            <Col span={6}>Project – Virtual FTON</Col>
            <Col span={6}>Project – Puppeteer Automation </Col>
            <Col span={6}>Project – HCM EKYC  </Col>
            <Col span={6}>Project – HCM Payement Defferel </Col>
        </Row></>);
}


export default totalExperience;