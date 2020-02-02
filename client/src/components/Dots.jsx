import React from 'react';
import {DotsDiv1, DotsDiv2, DotSVG} from '../styles/DotsStyle.jsx';


const Dots = (props) => {

  const dotArray = [];

  for(var i = 0; i < props.numOfDots; i++) {
    dotArray.push(<DotSVG key = {i} viewBox="0 0 100 100" >
       <circle cx="50" cy="50" r="50"/>
    </DotSVG>)
  }

  return(
  <DotsDiv1>
    <DotsDiv2>

    {dotArray}

    </DotsDiv2>
  </DotsDiv1>
  )
};

export default Dots;