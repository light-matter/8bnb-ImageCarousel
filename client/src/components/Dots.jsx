import React from 'react';
import {DotsDiv1, DotsDiv2, DotsDiv3, DotsLine, DotSVG} from '../styles/DotsStyle.jsx';

const Dots = (props) => (
  <DotsDiv1>
    <DotsDiv2>

    <DotSVG viewBox="0 0 100 100" >
       <circle cx="50" cy="50" r="50"/>
    </DotSVG>

    <DotSVG viewBox="0 0 100 100" >
       <circle cx="50" cy="50" r="50"/>
    </DotSVG>

    <DotSVG viewBox="0 0 100 100" >
       <circle cx="50" cy="50" r="50"/>
    </DotSVG>

    <DotSVG viewBox="0 0 100 100" >
       <circle cx="50" cy="50" r="50"/>
    </DotSVG>

    <DotSVG viewBox="0 0 100 100" >
       <circle cx="50" cy="50" r="50"/>
    </DotSVG>


    </DotsDiv2>
  </DotsDiv1>
);

export default Dots;