import ordersReducer from '../orders'
import {ADD_ORDER, DELETE_ORDER, CLEAN_ORDERS, CHANGE_ORDER_COUNT} from "../../actions/types";

it('handles action of type ADD_ORDER', () => {
    const order = {
        name: 'Some1', id: 1, price: 10, count: 1
    }
    const action = {
        type: ADD_ORDER,
        payload: {order}
    };

    const  newState = ordersReducer([], action);
    expect(newState).toEqual([{name: 'Some1', id: 1, price: 10, count: 1}]);
});

it('handles action of type DELETE_ORDER', () => {

    const action = {
        type: DELETE_ORDER,
        payload: {id: 1}
    };

    let  newState = ordersReducer([{name: 'Some1', id: 1, price: 10, count: 1},
        {name: 'Some2', id: 2, price: 10, count: 1}], action);

    expect(newState).toEqual([{name: 'Some2', id: 2, price: 10, count: 1}]);
});

it('handles action of type CLEAN_ORDERS', () => {
    const action = {
        type: CLEAN_ORDERS
    };

    let  newState = ordersReducer([{name: 'Some1', id: 1, price: 10, count: 1},
        {name: 'Some2', id: 2, price: 10, count: 1}], action);

    expect(newState).toEqual([]);
});

it('handles action of type CHANGE_ORDER_COUNT', () => {
    const action = {
        type: CHANGE_ORDER_COUNT,
        payload: {id: 1, value: 3}
    };

    let  newState = ordersReducer([{name: 'Some1', id: 1, price: 10, count: 1},
        {name: 'Some2', id: 2, price: 10, count: 1}], action);

    expect(newState).toEqual([{name: 'Some1', id: 1, price: 10, count: 3},
        {name: 'Some2', id: 2, price: 10, count: 1}]);
});

it('handles action with unknown type', () => {
    const  newState = ordersReducer([], {type: 'SOMETHING'});
    expect(newState).toEqual([]);
});