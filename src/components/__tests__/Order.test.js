import React from 'react'
import {mount} from 'enzyme'

import Root from '../Root'
import Order from '../Order/Order'

let wrapped;
let today = new Date()
let todayDay = today.getDay();

beforeEach(() => {
    const initialState = {
        orders: [{
            "name": "Салат с корейской морковкой и отварным легким",
            "count": 1,
            "id": "5b87dafc34f78cb426cec956",
            "price": 284
        }]
    };

    wrapped = mount(
        <Root initialState = {initialState}>
            <Order />
        </Root>
    );
});

if (todayDay === 6 || todayDay === 7) {
    it('shows the text "Сегодня не работаем"', () => {
        expect(wrapped.render().text()).toContain('Сегодня не работаем');
    });
}
else {
    it('creates one LI per order item', () => {
        expect(wrapped.find('li').length).toEqual(1)
    });

    it('shows the text and price for each order item', () => {
        expect(wrapped.render().text()).toContain('Салат с корейской морковкой и отварным легким');
        expect(wrapped.render().text()).toContain('284');
    });

    it('has test select and button', () => {
        expect(wrapped.find('select').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);
    });

    describe('the input', () => {
        beforeEach(() => {
            wrapped.find('input').simulate('change', {
                target: {value: '3'}
            });
            wrapped.update();
        });

        it('has an input that users can change', () => {
            expect(wrapped.find('input').prop('value')).toEqual(3);
        });

        it('when form is submitted, orders gets emptied', () => {
            wrapped.find('form').simulate('submit');
            wrapped.update();
            expect(wrapped.find('li').length).toEqual(0)
        });
    });
}
