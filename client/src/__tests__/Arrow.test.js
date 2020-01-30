import Arrow from '../components/Arrow.jsx';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Arrow/>', () => {
  it('Checks if Arrow component is rendering without crashing', () => {
    const wrapper = shallow(<Arrow/>);
  });

  // //why is this failing?
  // it('Checks if there is a `.arrow`', () => {
  //   const wrapper = shallow(<Arrow/>);
  //   const appComponent = wrapper.find('.arrow');
  //   expect(appComponent.length).toBe(1);
  // });


  // it('Check to see if the arrow renders glyph', () => {
  //   const wrapper = shallow(<Arrow/>);
  //   const text = wrapper.find('div');
  //   expect(text.text()).toBe({props.glyph});
  // });

});