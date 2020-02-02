import React, {Component} from 'react';
import styled from 'styled-components';
import SimilarHome from './SimilarHome.jsx';
import TextInfo from './TextInfo.jsx'
import OuterArrow from './OuterArrow.jsx';

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  width: 350px;
  height: 350px;
`


class SimilarHomes extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentFirstIndex: 0,
      currentLastIndex: 2,
      showLeftButton: true,
      showRightButton: true
    }
    this.previousList = this.previousList.bind(this);
    this.nextList = this.nextList.bind(this);
  }

  previousList() {
    if(this.state.currentFirstIndex > 0) {
      this.setState(prevState => ({
        currentFirstIndex: prevState.currentFirstIndex - 1,
        currentLastIndex: prevState.currentLastIndex - 1,
      }));
    }
  }

  nextList() {
    if(this.state.currentLastIndex < this.props.similarHomes.length - 1){
      this.setState(prevState => ({
        currentFirstIndex: prevState.currentFirstIndex + 1,
        currentLastIndex: prevState.currentLastIndex + 1
      })
    )
  }
  }

  render() {
    return(

      <RowDiv>
      <div>
      <OuterArrow direction = 'left' handleSubmit = {this.previousList} showButtons = {this.state.showLeftButton}/>

      </div>
      {this.props.similarHomes.slice(this.state.currentFirstIndex,this.state.currentLastIndex+1).map((similarHome, i) =>
        <ContainerDiv key={i}>
        <SimilarHome images={similarHome.images} />
        <TextInfo similarHome={similarHome}/>
        </ContainerDiv>
        )}
        <div>

        <OuterArrow direction = 'right' handleSubmit = {this.nextList} showButtons = {this.state.showRightButton}/>

        </div>
      </RowDiv>

    )
  }
}





export default SimilarHomes;
