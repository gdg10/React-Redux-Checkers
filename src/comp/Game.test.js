import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';
import configureStore from 'redux-mock-store';

const initialState = { seq: 0 }
const mockStore = configureStore()
let store, container

beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<Game store={store} />)
})

it('renders without crashing', () => {
    expect(container.length).toEqual(1)
});