import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  height: 100px;
  width: 350px;
  margin-left: 10px;
  flex-flow: row wrap;
`
const FirstRow = styled.span`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

const RightSide = styled.div`
    float: right;
`;

const LeftSide = styled.span`
  font-size: 14px;
  font-family: sans-serif;
  color: rgb(113,113,113);
`;
const RatingDiv = styled.span`
`;
const NumRatingDiv = styled.span`
`;
const TextInfo = ({similarHome}) => (
    <TextContainer>

    <FirstRow>

        <LeftSide>
                {`${similarHome.formType} ·  ${similarHome.numberOfBeds} Beds`}
        </LeftSide>

        <RightSide>
            <RatingDiv>
                {similarHome.rating}
            </RatingDiv>
            <NumRatingDiv>
                {similarHome.numberOfRatings}
            </NumRatingDiv>
        </RightSide>

    </FirstRow>

      <div> {similarHome.body} </div>
      <div> {similarHome.price} </div>

    </TextContainer>
);

export default TextInfo;