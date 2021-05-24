import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import configureStore from 'redux-mock-store';

const initialState = { highlighted: [] }
const mockStore = configureStore()
let store, container

beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<Board store={store} />)
})

it('renders without crashing', () => {
    expect(container.length).toEqual(1)
});