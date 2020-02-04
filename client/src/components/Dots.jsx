import React, {Component} from 'react';
import {DotsDiv1, DotsDiv2, DotSVG} from '../styles/DotsStyle.jsx';


class Dots extends Component{

  constructor(props){
    super(props);
    this.state = {
      // currentIndex: 0
    };
  }

  render() {

    const dotArray = [];

    for(var i = 0; i < this.props.numOfDots; i++) {
      dotArray.push(<DotSVG key = {i} dotIndex = {i} currentIndex = {this.props.currentIndex} numberOfDots = {this.props.numOfDots} viewBox="0 0 100 100" >
           <circle cx="50" cy="50" r="50"/>
        </DotSVG>)
    }

    return(
      <DotsDiv1>
      <DotsDiv2>

      {dotArray.slice(0, 5)}

      </DotsDiv2>
      </DotsDiv1>
    )
  }
};

export default Dots;