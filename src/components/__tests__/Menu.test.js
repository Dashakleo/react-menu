import React from 'react'
import {mount} from 'enzyme'

import Root from '../Root'
import Menu from '../Menu/Menu'

let wrapped;

beforeEach(() => {
    const initialState = {
        menu: [{
            "id": "5b87dafc3f5dae0c92d7751f",
            "name": "Заварное печенье «Яичные брусочки»",
            "price": 430
        },
            {
                "id": "5b87dafc6a6c461f0bb839d1",
                "name": "Кантучини с фисташками",
                "price": 142
            }]
    };

    wrapped = mount(
        <Root initialState = {initialState}>
            <Menu></Menu>
        </Root>
    )
});

it('creates one LI per menu item', () => {
    expect(wrapped.find('li').length).toEqual(2)
});

it('shows the text and price for each menu item', () => {
    expect(wrapped.render().text()).toContain('Заварное печенье «Яичные брусочки»');
    expect(wrapped.render().text()).toContain('Кантучини с фисташками');
    expect(wrapped.render().text()).toContain('430');
    expect(wrapped.render().text()).toContain('142');
});