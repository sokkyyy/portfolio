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
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Collapse} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({

  nested: {
    paddingLeft: theme.spacing(5),
  },
  headings:{
    fontWeight:'bold',
  }
}));

export default function Skills(){
  const classes = useStyles();
  const [openFront, setopenFront] = React.useState(true);
  const [openBack, setopenBack ] = useState(false)

  const handleClick = () => {
    setopenFront(!openFront);
    setopenBack(!openBack);
  };

  const handleClickBack = () => {
    setopenBack(!openBack);
    setopenFront(!openFront);

  };
  return(
    <div className='main-title2'>
      <Container maxWidth='sm'>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={10000}
        >
        <div className='skills-section'>
          <div className='skills-details'>
            <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  className='skills-details'
                >
                <div className='skill_heading'>
                  <ListItem button onClick={handleClick} className={classes.headings} >
                    <ListItemText primary="FRONT-END"  />
                    {openFront ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                </div>
                  <Collapse in={openFront} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                      <ListItem className={classes.nested}>
                        <ListItemIcon>
                          <img src={html} height={20} width={20} />
                        </ListItemIcon>
                        <ListItemText primary="HTML" style={{fontSize:16}} />
                      </ListItem>

                      <ListItem className={classes.nested}>
                        <ListItemIcon>
                          <img src={css} height={20} width={20} />
                        </ListItemIcon>
                        <ListItemText primary="CSS" style={{fontSize:16}} />
                      </ListItem>

                      <ListItem className={classes.nested}>
                        <ListItemIcon>
                          <img src={js} height={20} width={20} />
                        </ListItemIcon>
                        <ListItemText primary="JavaScript" style={{fontSize:16}} />
                      </ListItem>

                      <ListItem className={classes.nested}>
                        <ListItemIcon>
                          <img src={angular} height={20} width={20} />
                        </ListItemIcon>
                        <ListItemText primary="Angular" style={{fontSize:16}} />
                      </ListItem>

                      <ListItem className={classes.nested}>
                        <ListItemIcon>
                          <img src={react} height={20} width={20} />
                        </ListItemIcon>
                        <ListItemText primary="ReactJS" style={{fontSize:16}} />
                      </ListItem>

                    </List>
                  </Collapse>
                  <div className='skill_heading'>
                    <ListItem button onClick={handleClickBack}>
                      <ListItemText primary="BACK-END" />
                      {openBack ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                  </div>

                  <Collapse in={openBack} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                      <ListItem className={classes.nested}>
                        <ListItemIcon>
                          <img src={py} height={20} width={20} />
                        </ListItemIcon>
                        <ListItemText primary="Python" style={{fontSize:16}} />
                      </ListItem>

                      <ListItem className={classes.nested}>
                        <ListItemIcon>
                          <img src={flask} height={20} width={20} />
                        </ListItemIcon>
                        <ListItemText primary="Flask" style={{fontSize:16}} />
                      </ListItem>

                      <ListItem className={classes.nested}>
                        <ListItemIcon>
                          <img src={django} height={20} width={20} />
                        </ListItemIcon>
                        <ListItemText primary="Django" style={{fontSize:16}} />
                      </ListItem>

                      <ListItem className={classes.nested}>
                        <ListItemIcon>
                          <img src={node} height={20} width={20} />
                        </ListItemIcon>
                        <ListItemText primary="NodeJS" style={{fontSize:16}} />
                      </ListItem>

                    </List>
                  </Collapse>

                </List>
          </div>
        </div>
        </ReactCSSTransitionGroup>
      </Container>
    </div>
  )
}
