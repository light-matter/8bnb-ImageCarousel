import React, {Component} from 'react';
import styled from 'styled-components';
import SimilarHome from './SimilarHome.jsx';
import TextInfo from './TextInfo.jsx'
import OuterArrow from './OuterArrow.jsx';
import {RowDiv, ContainerDiv, OuterRightArrowDiv, OuterLeftArrowDiv} from '../styles/SimilarHomesStyle.jsx';

class SimilarHomes extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentFirstIndex: 0,
      currentLastIndex: 2,
      showLeftButton: false,
      showRightButton: true,
    }
    this.previousList = this.previousList.bind(this);
    this.nextList = this.nextList.bind(this);
  }


  previousList() {
    if(this.state.currentFirstIndex > 0) {
      this.setState(prevState => ({
        currentFirstIndex: prevState.currentFirstIndex - 1,
        currentLastIndex: prevState.currentLastIndex - 1,
        showLeftButton: prevState.currentFirstIndex - 1 > 0,
        showRightButton: prevState.currentLastIndex - 1 < this.props.similarHomes.length - 1
      }));
    }
  }

  nextList() {
    if(this.state.currentLastIndex < this.props.similarHomes.length - 1){
      this.setState(prevState => ({
        currentFirstIndex: prevState.currentFirstIndex + 1,
        currentLastIndex: prevState.currentLastIndex + 1,
        showLeftButton: prevState.currentFirstIndex + 1 > 0,
        showRightButton: prevState.currentLastIndex + 1 < this.props.similarHomes.length -1
      })
    )
  }
  }

  render() {
    return(
      <div>

      <RowDiv>

      <OuterLeftArrowDiv>

      <OuterArrow direction = 'left' handleSubmit = {this.previousList} showButtons = {this.state.showLeftButton}/>

      </OuterLeftArrowDiv>

      {this.props.similarHomes.slice(this.state.currentFirstIndex,this.state.currentLastIndex+1).map((similarHome, i) =>
        <ContainerDiv key={i}>
        <SimilarHome images={similarHome.images}/>
        <TextInfo similarHome={similarHome}/>
        </ContainerDiv>
      )}

        <OuterRightArrowDiv>

        <OuterArrow direction = 'right' handleSubmit = {this.nextList} showButtons = {this.state.showRightButton}/>

        </OuterRightArrowDiv>

      </RowDiv>


      </div>

    )
  }
}





export default SimilarHomes;
