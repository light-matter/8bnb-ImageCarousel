import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow.jsx';
import Heart from './Heart.jsx';
import Dots from './Dots.jsx';

const ImgDiv = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  height: 250px;
  width: 350px;
  margin-left: 10px;
  position: relative;
  border-radius: 2%;
`;

const ImgTopDiv = styled.div`
`
const ImgBottomDiv = styled.div`

`
class SimilarHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgIdx: 0,
      showButtons: false,
      heart: false
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.heartClick = this.heartClick.bind(this);

  }

  previousSlide() {
    const lastIndex = this.props.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === 0;
    const index = shouldResetIndex ? lastIndex : currentImgIdx - 1;

    this.setState({
      currentImgIdx: index,
    });
  }

  nextSlide() {
    const lastIndex = this.props.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === lastIndex;
    const index = shouldResetIndex ? 0 : currentImgIdx + 1;
    this.setState({
      currentImgIdx: index,
    });
  }

  heartClick() {
    this.setState({heart: !this.state.heart});
  }

  handleToggle() {
    this.setState({showButtons: !this.state.showButtons});
  }

  render() {
    return (

      <ImgDiv image={this.props.images[this.state.currentImgIdx]} onMouseEnter={this.handleToggle} onMouseLeave = {this.handleToggle}>

        <ImgTopDiv>

        <Heart showButtons = {this.state.showButtons} handleSubmit={this.heartClick} heartStatus={this.state.heart}/>

        <Arrow direction="left" handleSubmit={this.previousSlide} showButtons={this.state.showButtons} />

        <Arrow direction="right" handleSubmit={this.nextSlide} showButtons={this.state.showButtons} />

        </ImgTopDiv>

        <ImgBottomDiv>

        <Dots numOfDots = {this.props.images.length}/>

        </ImgBottomDiv>

      </ImgDiv>

    );
  }
}


export default SimilarHome;
