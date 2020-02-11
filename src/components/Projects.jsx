import React, { useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './assests/Projects.css';
import pro1 from './assests/1.png';
import pro2 from './assests/2.png';
import pro3 from './assests/3.png';
import vk from './assests/vk.png';
import mes from './assests/mes.png';
import ava from './assests/ava.png';
import {MDBCard, MDBCardImage, MDBView, MDBMask,MDBRow,MDBCol,MDBIcon} from 'mdbreact';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from '@material-ui/core/Icon';


function Gallery(){
  return(
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={10000}
      >
    <div className='active_project'>
      <div >
        <img src={pro1} className='active_project_img'  />
      </div>


      <div className='active_details'>
        <div>
          <h5 className='active_description title'>A Personal Gallery for uploading, saving and viewing images. </h5>
        </div>

        <div>
          <h5 className='active_description title'>Technologies Used:</h5>
          <ul className=''>
            <li>Django</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>MDBootstrap</li>

          </ul>
        </div>
        <div>
          <h5><a href='https://sokkyyy-gallery.herokuapp.com/' target="_blank" className='project_link'>Live Link</a></h5>
          <h5><a href='https://github.com/sokkyyy/sokkyyy-the-gallery' target="_blank" className='project_link'>Github</a></h5>
        </div>
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


      <div className='active_details'>

        <div >
          <h5 className='active_description title'>An Application that allows users to rate projects. </h5>
        </div>
        <div>
          <h5 className='active_description title'>Technologies Used:</h5>
          <ul className='active_description'>
            <li>Django</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>Semantic UI</li>
          </ul>
        </div>
        <div>
          <h5><a href='https://sokkyyy-projectranker.herokuapp.com/' target="_blank" className='project_link'>Live Link</a></h5>
          <h5><a href='https://github.com/sokkyyy/project-ranker' target="_blank" className='project_link'>Github</a></h5>
        </div>
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
        <img src={vk} className='active_project_img' />
      </div>

      <div className='active_details'>
        <div>
          <h5 className='active_description title'>View Popular Tourist Destinations in Kenya and location them on Google Maps. </h5>
        </div>
        <div>
          <h5 className='active_description title'>Technologies Used:</h5>
          <ul className='active_description'>
            <li>Django - Django Rest Framework(DRF)</li>
            <li>Google Maps API</li>
            <li>Python</li>
            <li>ReactJS</li>
            <li>Material UI</li>

          </ul>
        </div>
        <div>
          <h5><a href='https://visitkenya.netlify.com' target="_blank" className='project_link'>Live Link</a></h5>
          <h5><a href='https://github.com/sokkyyy/visit-kenya' target="_blank" className='project_link'>Github</a></h5>
        </div>
      </div>

    </div>
    </ReactCSSTransitionGroup>
  )

}

function Mes(){
  return(
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={10000}
    >
    <div className='active_project'>

      <div>
        <img src={mes} className='active_project_img' />
      </div>


      <div className='active_details'>
        <div>
          <h5 className='active_description title'>A Competency Evaluation System for Employees used in Human Resource Management. </h5>
        </div>
        <div>
          <h5 className='active_description title'>Technologies Used:</h5>
          <ul className='active_description'>
            <li>Django - Django Rest Framework(DRF)</li>
            <li>Python</li>
            <li>ReactJS</li>
            <li>Material UI and MDBootstrap</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div>
          <h5><a href='https://sokkyyy-projectranker.herokuapp.com/' target="_blank" className='project_link'>Live Link</a></h5>
          <h5><a href='https://github.com/sokkyyy/project-ranker' target="_blank" className='project_link'>Github</a></h5>
        </div>
      </div>


    </div>
    </ReactCSSTransitionGroup>
  )

}

function Ava(){
  return(
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={10000}
      >
    <div className='active_project'>
      <div>
        <img src={ava} className='active_project_img' />
      </div>

      <div className='active_details'>
        <div>
          <h5 className='active_description title'> A Slack Bot for detecting document changes shared on a channel.</h5>
        </div>
        <div>
          <h5 className='active_description title'>Technologies Used:</h5>
          <ul className='active_description'>
            <li>Python</li>
            <li>Google Drive API</li>
            <li>Slack API</li>
          </ul>
        </div>
        <div>
          <h5><a href='https://github.com/sokkyyy/ava-slack-bot' target="_blank" className='project_link'>Github</a></h5>
        </div>
      </div>
    </div>
    </ReactCSSTransitionGroup>
  )

}

function NeighborhoodWatch(){
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



      <div className='active_details'>
        <div>
          <h5 className='title'>Kibra Neighborhood Watch. Find your Location's services and posts from fellow residents. </h5>
        </div>
        <div>
          <h5 className='title'>Technologies Used:</h5>
          <ul className='active_description'>
            <li>Django - Django Rest Framework(DRF)</li>
            <li>Python</li>
            <li>Semantic UI</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div>
          <h5><a href='https://sokkyyy-hood-watch.herokuapp.com/' target="_blank" className='project_link'>Live Link</a></h5>
          <h5><a href='https://github.com/sokkyyy/hood-watch' target="_blank" className='project_link'>Github</a></h5>
        </div>
      </div>


    </div>
    </ReactCSSTransitionGroup>
  )

}





export default function Projects(){
  const [isActive, setIsActive] = useState(1);
  const [showDetails, setShowDetails] = useState(false);




  const handleClick = (project) => {
    return function() {
      setIsActive(project);
      setShowDetails(true);
    }

  };

  const handleClose = () => {
    setShowDetails(false);
  };

  return(
    <div>
      {!showDetails ? (


      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={10000}
      >
        <div className="main-projects">

          <MDBCard className='project_card'>
            <MDBView hover>
              <div className='img_holder' onClick={handleClick(3)}>
                <MDBCardImage  src={vk} className="img-fluid project_img" waves />
              </div>

              <MDBMask className="flex-center1" overlay="red-strong">
                <p className="white-text">Visit Kenya</p>
              </MDBMask>
            </MDBView>
          </MDBCard>

          <MDBCard className='project_card' onClick={handleClick(5)}>
            <MDBView hover>
              <div className='img_holder'>
                <MDBCardImage src={mes} className="img-fluid project_img" waves />
              </div>
              <div className="flex-center1" overlay="red-strong">
                <p className="white-text">Human Resource Competency Evaluation System(M.E.S.)</p>
              </div>
            </MDBView>
          </MDBCard>

          <MDBCard className='project_card'>
            <MDBView hover>
              <div className='img_holder'onClick={handleClick(4)} >
                <MDBCardImage src={ava} className="img-fluid project_img" waves />
              </div>
              <MDBMask className="flex-center1" overlay="red-strong">
                <p className="white-text">Ava Slack Bot</p>
              </MDBMask>
            </MDBView>
          </MDBCard>

          <MDBCard className='project_card'>
            <MDBView hover>
              <div className='img_holder' onClick={handleClick(1)}>
                <MDBCardImage src={pro1} className="img-fluid project_img" waves />
              </div>
              <MDBMask className="flex-center" overlay="red-strong">
                <p className="white-text">Personal Gallery</p>
              </MDBMask>
            </MDBView>
          </MDBCard>

          <MDBCard className='project_card'>
            <MDBView hover>
              <div className='img_holder' onClick={handleClick(6)}>
                <MDBCardImage src={pro3} className="img-fluid project_img" waves />
              </div>
              <MDBMask className="flex-center" overlay="red-strong">
                <p className="white-text">Neighborhood Watch</p>
              </MDBMask>
            </MDBView>
          </MDBCard>

          <MDBCard className='project_card'>
            <MDBView hover>
              <div className='img_holder' onClick={handleClick(2)}>
                <MDBCardImage src={pro2} className="img-fluid project_img" waves />
              </div>
              <MDBMask className="flex-center" overlay="red-strong">
                <p className="white-text">Project Ranker</p>
              </MDBMask>
            </MDBView>
          </MDBCard>
        </div>

{/*        <div className='more_projects'>
          <a className='githubIcon' href='https://github.com/sokkyyy?tab=repositories' target='_blank'>
            <MDBIcon className='hubicon' fab icon="github" />
          </a>
          <p className='details_more'>View more Projects on <a style={{color:'white'}} href='https://github.com/sokkyyy?tab=repositories' target='_blank'>Gitbub</a></p>
        </div>*/}

      </ReactCSSTransitionGroup>
    ) : (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={10000}
      >
        <div className='project_description'>
          {(() => {
            switch (isActive){
              case 1:
                return <Gallery />
              case 2:
                return <ProjectRanker />
              case 3:
                return <VisitKenya />
              case 4:
                return <Ava />
              case 5:
                return <Mes />
              case 6:
                return <NeighborhoodWatch />
            }
          })()}
          <MDBIcon onClick={handleClose} className='close' icon="angle-double-left" />
          <span onClick={handleClose} className='close_back'>BACK</span>
        </div>
      </ReactCSSTransitionGroup>
    )}
    </div>
  );
}
