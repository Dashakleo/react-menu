import React from 'react';
import {shallow} from 'enzyme'
import App from '../App';
import Menu from '../Menu/Menu';
import Order from '../Order/Order';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows a menu', () => {
    expect(wrapped.find(Menu).length).toEqual(1);
});

it('shows an order', () => {
    expect(wrapped.find(Order).length).toEqual(1);
});