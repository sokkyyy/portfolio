import React, { useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Typical from 'react-typical';
import './assests/About.css';
import photo from './assests/photo.JPG';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
  },
  links : {
    color:'white',
  }
},
}))


export default function About(){
  const classes = useStyles();
  return(
    <div>
      <h1 className="main-title1"><span className="thin1">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={10000}
        >
        <div>
          <img src={photo} className='photo' />
        </div>

        <div>
          <Typical
            steps={["<Raymond Ndegwa />", 1000,]}
            wrapper="p"
            className='looper'
          />
          <p className='description'>Full Stack Software Developer</p>
        </div>
        <div className={classes.root}>
          <Tooltip title='LinkedIn'>
            <a href='https://www.linkedin.com/in/raymond-ndegwa-2126b017a/' target="_blank" style={{color:'white'}} >
              <LinkedInIcon className={classes.links} />
            </a>
          </Tooltip>

          <Tooltip title='Github'>
            <a href='https://github.com/sokkyyy' target="_blank" style={{color:'white'}}>
              <GitHubIcon />
            </a>
          </Tooltip>

          <Tooltip title='ndegwa1raymond@gmail.com'>
            <a href="mailto:ndegwa1raymond@gmail.com?Subject=Raymond%20Ndegwa" target="_top"  style={{color:'white'}}>
              <MailIcon />
            </a>
          </Tooltip>

          <Tooltip title='Twitter'>
            <a href='https://twitter.com/ndegwa_ray' target="_blank" style={{color:'white'}}>
              <TwitterIcon />
            </a>
          </Tooltip>

          <Tooltip title='Instagram'>
            <a href='https://www.instagram.com/ndegwa_ray/' target="_blank">
              <InstagramIcon  style={{color:'white'}} />
            </a>
          </Tooltip>
        </div>
        </ReactCSSTransitionGroup>
     </span></h1>
    </div>
  );
}
