import './assests/Home.css';
import React, { useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Typical from 'react-typical';
import About from './About';
import AppLoader from './AppLoader';
import HeaderLinks from './HeaderLinks';
import Projects from './Projects';
import Skills from './Skills';



export default function Home(){

  const [load, setLoad] = useState(true);
  const [isActive, setIsActive] = useState('HOME');

  const handleClick = (link) => {
    setIsActive(link);
  }

  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");

    script1.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js';
    script2.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js';
    script3.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js';

    script1.async = true;
    script2.async = true;
    script3.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);

    setTimeout(()=>{
      setLoad(false);
    }, 2000);
  });

  return(
    <div>
    {load ? (<div className='loader'><AppLoader /></div>) : (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1500}

    >
      <div className="container demo">
        <HeaderLinks isActive={isActive} handleClick={handleClick}/>
       <div className="content">
           <div id="large-header" className="large-header">
              <canvas className='space_effect' id="demo-canvas"></canvas>
              {(() => {
                switch (isActive){
                  case 'HOME':
                    return <About />
                  case 'SKILLS':
                    return <Skills />
                  case 'PROJECTS':
                    return <Projects />
                }
              })()}
           </div>
       </div>

     </div>
    </ReactCSSTransitionGroup>
    )}
    </div>
  );
}
