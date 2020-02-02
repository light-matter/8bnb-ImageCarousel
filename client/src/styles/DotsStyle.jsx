import styled from 'styled-components';

const DotsDiv1 = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 40px;
    white-space: nowrap;
`;

const DotsDiv2 = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: center;
    height: 100%;
    contain: content;
`;

const DotsDiv3 = styled.div`
    display: flex;
    padding-bottom: 12px;
    max-width: 55px;
    overflow: hidden;
`;

const DotsLine = styled.div`
    -webkit-box-pack: center !important;
    -webkit-box-align: end !important;
    align-items: flex-end !important;
    display: flex !important;
    justify-content: center !important;
    list-style-type: none !important;
    margin: 0px !important;
    padding: 0px !important;
`;

const DotSVG = styled.svg`
    height: 6px !important;
    margin-left: 2.5px !important;
    margin-right: 2.5px !important;
    min-width: 6px !important;
    width: 6px !important;
    fill: ${props => props.whiteDotIndex ? "rgb(255, 255, 255" : "white"};
    opacity: 1 !important;
    border-radius: 50% !important;
`;

export default = {DotsDiv1, DotsDiv2, DotsDiv3, DotsLine, DotsSVG}