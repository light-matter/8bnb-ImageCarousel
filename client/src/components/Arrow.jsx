import React from 'react';
import styled from 'styled-components';

const RightArrow = styled.i`
  transform: rotate(-45deg);
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
`;

const LeftArrow = styled.i`
    transform: rotate(135deg);
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
`;

const Button = styled.button`
  display: ${(props) => (props.showButtons ? 'block' : 'none')};
  position: absolute;
  width: 30px;
  height: 30px;
  top: 125px;
  border-radius: 50px;
  right: ${(props) => (props.direction === 'right' ? '10px' : '310px')};
`;

const Arrow = ({ direction, handleSubmit, showButtons }) => (

    <Button className = "arrow" onClick={handleSubmit} direction={direction} showButtons={showButtons}>
      {direction === 'left' ? <LeftArrow /> : <RightArrow />}
    </Button>

);


export default Arrow;
