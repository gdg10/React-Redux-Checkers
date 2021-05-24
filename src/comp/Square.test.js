import React from 'react';
import { shallow } from 'enzyme';
import Square from './Square';
import configureStore from 'redux-mock-store';

const initialState = { chckrLocations: [] }
const mockStore = configureStore()
let store, container

beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<Square store={store} />)
})

it('renders without crashing', () => {
    expect(container.length).toEqual(1)
});