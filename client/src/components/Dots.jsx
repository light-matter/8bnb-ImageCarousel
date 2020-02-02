import React from 'react';
import {DotsDiv1, DotsDiv2, DotsDiv3, DotsLine, DotsSVG} from '../styles/DotsStyle.js';

const DotsList = (props) => (
  <DotsDiv1>
      <DotsDiv2>
          <DotsDiv3>
              <DotsLine currentImageIndex={}>
                  <DotSVG name="dot1" viewBox="0 0 100 100" >
                      <circle cx="50" cy="50" r="50"/>
                  </DotSVG>

                  <DotSVG name="dot2" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"/>
                  </DotSVG>

                  <DotSVG name="dot3" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r ="50"/>
                  </DotSVG>

                  <DotSVG name="dot4" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"/>
                  </DotSVG>

                  <DotSVG name="dot5" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"/>
                  </DotSVG>

                  <DotSVG name="dot6" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"/>
                  </DotSVG>
              </DotsLine>
          </DotsDiv3>
      </DotsDiv2>
  </DotsDiv1>
);