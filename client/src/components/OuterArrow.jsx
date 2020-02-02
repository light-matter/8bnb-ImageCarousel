import React from 'react';
import styled from 'styled-components';

const RightArrow = styled.svg`
  height: 22px;
  width: 22px;
  fill: rgb(118, 118, 118);
  fill-rule: evenodd;
`;


const LeftArrow = styled.svg`
    height: 22px;
    width: 22px;
    fill: rgb(118, 118, 118);
    fill-rule: evenodd;
`;

const Button = styled.button`
  display: ${(props) => (props.showButtons ? 'block' : 'none')};

`;

const OuterArrow = ({ direction, handleSubmit, showButtons }) => (

    <Button onClick={handleSubmit} direction={direction} showButtons={showButtons}>
      {direction === 'left' ? <LeftArrow viewBox="0 0 18 18" role="img" aria-label="Previous" focusable="false"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path></LeftArrow> : <RightArrow viewBox="0 0 18 18" role="img" aria-label="Next" focusable="false" ><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"></path></RightArrow>}
    </Button>

);


export default OuterArrow;