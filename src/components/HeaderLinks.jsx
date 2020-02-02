import React, { useState, useEffect } from 'react';
import './assests/HeaderLinks.css';

export default function HeaderLinks({isActive, handleClick}){
  const options = ['HOME','PROJECTS','SKILLS'];




  return(
    <div className='link'>
      {options.map((link, i) => (
        <a key={link} onClick={()=>{handleClick(link)}} className={(isActive === link )? 'button_link active_head' : 'button_link' }>{link}</a>
      ))}
    </div>
  );
}
