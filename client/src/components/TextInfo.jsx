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
    /* float: right; */
`;

const LeftSide = styled.span`
  font-size: 14px;
  font-family: sans-serif;
  color: rgb(113,113,113);
`;


const RatingDiv = styled.span`
  font-size: 15px;
  font-family: sans-serif;
  color: black;
`;
const NumRatingDiv = styled.span`
  font-size: 14px;
  font-family: sans-serif;
  color: rgb(113,113,113);
`;


const TextInfo = ({similarHome}) => (
    <TextContainer>

    <FirstRow>

        <LeftSide>
                {`${similarHome.formType} ·  ${similarHome.numberOfBeds} Beds`}
        </LeftSide>


        <RightSide>

            <RatingDiv>
                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '12px', width: '12px', fill: 'red'}}><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path>
                </svg>
                {similarHome.rating}
            </RatingDiv>

            <NumRatingDiv>
                {`   (${similarHome.numberOfRatings})`}
            </NumRatingDiv>

        </RightSide>




    </FirstRow>

      <div> {similarHome.body} </div>
      <div> {similarHome.price} </div>

    </TextContainer>
);

export default TextInfo;