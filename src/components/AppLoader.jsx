import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

export default function AppLoader(){
  return(
    <Loader
       type="Triangle"
       color="white"
       height={100}
       width={100}

    />
  );
}
