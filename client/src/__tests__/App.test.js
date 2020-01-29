import App from '../components/App.jsx';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// the describe function is the test suite
describe('checks if App is rendering properly', function() {
  it('renders app component without crashing', function() {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());
  });


});