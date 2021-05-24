import React from 'react';
import { shallow } from 'enzyme';
import Checker from './Checker';

it('renders without crashing', () => {
    shallow(<Checker color={"blue"} />)
});