import React, { useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Typical from 'react-typical';
import react from './assests/react.png';
import angular from './assests/angular.png';
import css from './assests/css.png';
import flask from './assests/flask.png';
import django from './assests/Django.png';
import js from './assests/js.png';
import node from './assests/node.jpg';
import py from './assests/py.png';
import html from './assests/html.png';
import './assests/Skills.css';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge } from "mdbreact";


export default function Skills(){

  return(
    <div className='main-title2'>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        >
        <div className='skills_section'>
          <div className='skill' style={{paddingTop:'10px'}}>
            <span>HTML</span>
            <img src={html} className='skill_icon' />
          </div>

          <div className='skill'>
            <span>CSS</span>
            <img src={css} className='skill_icon' />
          </div>

          <div className='skill'>
            <span>JavaScript</span>
            <img src={js} className='skill_icon' />
          </div>

          <div className='skill'>
            <span>Angular</span>
            <img src={angular} className='skill_icon' />
          </div>

          <div className='skill'>
            <span>ReactJS</span>
            <img src={react} className='skill_icon' />
          </div>

          <div className='skill'>
            <span>Python</span>
            <img src={py} className='skill_icon' />
          </div>

          <div className='skill'>
            <span>Flask</span>
            <img src={flask} className='skill_icon' />
          </div>

          <div className='skill'>
            <span>Django</span>
            <img src={django} className='skill_icon' />
          </div>

          <div className='skill1'>
            <span>NodeJS</span>
            <img src={node} className='skill_icon' />
          </div>

        </div>
      </ReactCSSTransitionGroup>

    </div>
  )
}
