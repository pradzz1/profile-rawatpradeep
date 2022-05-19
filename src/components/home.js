import React from 'react';
//import filmStripe from './filmstripe';
import SectionHeader from './sectionHeader';


const home = (props) =>{
    return(
      <>
        <div className="main-hero-text">
          <div className="content">
            <div className="text-loading-mask">
              <div className="text-loading-overlay">
                </div>
                <SectionHeader name="Home"></SectionHeader>
                </div>
                <div>
                  <div className="text-loading-mask">
                    <div className="text-loading-overlay">
                      </div>
                      <h3 itemProp="specialty" className="main-hero-subtitle h5">Front-end Developer</h3>
                      </div>
                      </div>
                      <div>
                        <div  className="text-loading-mask">
                          <div className="text-loading-overlay">
                        </div>
                        <h3 itemProp="specialty" className="main-hero-subtitle h5">Front-end Developer</h3>
                  </div>
                </div>
              </div>
          </div>

        </>
    );
}
export default home;
