import styled from 'styled-components';

export const DotsDiv1 = styled.div`
    -webkit-box-pack: center;
    -webkit-box-align: end;
    position: absolute;
    bottom: 20px;
    left: 0px;
    right: 0px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 40px;
    white-space: nowrap;
`;

export const DotsDiv2 = styled.div`
    -webkit-box-pack: center;
    -webkit-box-align: end;
    align-items: flex-end;
    display: flex;
    justify-content: center;
    width: 350px;
    height: 80%;
    contain: content;
`;

export const DotsDiv3 = styled.div`
    display: flex;
    padding-bottom: 12px;
    max-width: 55px;
    overflow: hidden;
`;

export const DotsLine = styled.div`
    -webkit-box-pack: center;
    -webkit-box-align: end;
    align-items: flex-end;
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    transition: -ms-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, -webkit-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
`;

export const DotSVG = styled.svg`
    height: 12px;
    margin-left: 2.5px;
    margin-right: 2.5px;
    min-width: 6px;
    width: 6px;
    fill: rgb(255, 255, 255);
    opacity: 1;
    border-radius: 50%;
`;

