import React, { useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './assests/Projects.css';
import pro1 from './assests/1.png';
import pro2 from './assests/2.png';
import pro3 from './assests/3.png';


function Gallery(){
  return(
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={10000}
      >
    <div className='active_project'>
      <div>
        <img src={pro1} className='active_project_img' />
      </div>

      <div>
        <h5 className='project_description'>A Personal Gallery for uploading, saving and viewing images. </h5>
      </div>

      <div>
        <h5 className='project_description'>Technologies Used:</h5>
        <ul className='project_description'>
          <li>Django</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>MDBootstrap</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div>
        <h5><a href='https://sokkyyy-gallery.herokuapp.com/' target="_blank" className='project_link'>Live Link</a></h5>
        <h5><a href='https://github.com/sokkyyy/sokkyyy-the-gallery' target="_blank" className='project_link'>Github</a></h5>
      </div>
    </div>
  </ReactCSSTransitionGroup>
  )
}

function ProjectRanker(){
  return(
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={10000}
      >
    <div className='active_project'>
      <div>
        <img src={pro2} className='active_project_img' />
      </div>

      <div>
        <h5 className='project_description'>An Application that allows users to rate projects. </h5>
      </div>

      <div>
        <h5 className='project_description'>Technologies Used:</h5>
        <ul className='project_description'>
          <li>Django</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>Semantic UI</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div>
        <h5><a href='https://sokkyyy-projectranker.herokuapp.com/' target="_blank" className='project_link'>Live Link</a></h5>
        <h5><a href='https://github.com/sokkyyy/project-ranker' target="_blank" className='project_link'>Github</a></h5>
      </div>
    </div>
  </ReactCSSTransitionGroup>
  )
}

function VisitKenya(){
  return(
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={10000}
      >
    <div className='active_project'>
      <div>
        <img src={pro3} className='active_project_img' />
      </div>

      <div>
        <h5 className='project_description'>View Popular Tourist Destinations in Kenya and location on  <br />Google Maps. </h5>
      </div>

      <div>
        <h5 className='project_description'>Technologies Used:</h5>
        <ul className='project_description'>
          <li>Django - Django Rest Framework(DRF)</li>
          <li>Python</li>
          <li>ReactJS</li>
          <li>Material UI</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div>
        <h5><a href='https://sokkyyy-projectranker.herokuapp.com/' target="_blank" className='project_link'>Live Link</a></h5>
        <h5><a href='https://github.com/sokkyyy/project-ranker' target="_blank" className='project_link'>Github</a></h5>
      </div>
    </div>
    </ReactCSSTransitionGroup>
  )
}

export default function Projects(){
  const [isActive, setIsActive] = useState(1);

  const handleClick = (project) => {
    setIsActive(project);
  };
  return(
    <div>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={10000}
      >
        <div className="main-projects">

          <div className='projects'>
            <div className='project_order'>
              <span className={`project_num ${(isActive === 1) ? 'active':''}`}>1</span>
              <img src={pro1} className={`project_img ${(isActive === 1) ? 'project_img_active':''}`} onClick={() => handleClick(1)} />
            </div>
            <div className='project_order'>
              <span className={`project_num ${(isActive === 2) ? 'active':''}`}>2</span>
              <img src={pro2} className={`project_img ${(isActive === 2) ? 'project_img_active':''}`} onClick={() => handleClick(2)} />
            </div>
            <div className='project_order'>
              <span className={`project_num ${(isActive === 3) ? 'active':''}`}>3</span>
              <img src={pro3} className={`project_img ${(isActive === 3) ? 'project_img_active':''}`} onClick={() => handleClick(3)} />
            </div>
          </div>

          <div className='project-details'>
            {(() => {
              switch (isActive){
                case 1:
                  return <Gallery />
                case 2:
                  return <ProjectRanker />
                case 3:
                  return <VisitKenya />
                case 'CONTACTS':
                  return ''
              }
            })()}
          </div>

        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
}
