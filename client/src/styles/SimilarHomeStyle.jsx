import styled, {keyframes} from 'styled-components';

export const ImgDiv = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  height: 250px;
  width: 350px;
  margin-left: 10px;
  position: relative;
  border-radius: 2%;
`;

const slide = keyframes`
  left: 100%;
`;

export const ImgTopDiv = styled.div`
`
export const ImgBottomDiv = styled.div`

`