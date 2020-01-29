import Arrow from '../components/Arrow.jsx';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import axios from 'axios';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Arrow/>', () => {
  it('Checks if Arrow component is rendering without crashing', () => {
    const wrapper = shallow(<Arrow/>);
  });

});