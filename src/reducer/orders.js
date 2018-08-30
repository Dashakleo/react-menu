import {ADD_ORDER, CHANGE_ORDER_COUNT, DELETE_ORDER, CLEAN_ORDERS} from '../actions/types'

export default (orders = [], action) => {
    switch (action.type) {
        case ADD_ORDER: return [...orders, action.payload.order]
        case CHANGE_ORDER_COUNT:  {
            return orders.map(order => order.id === action.payload.id ?
                { ...order, count: +action.payload.value } :
                order
            )
        }
        case DELETE_ORDER: {
            return orders.filter(order => action.payload.id !== order.id)
        }
        case CLEAN_ORDERS: {
            return []
        }
        default: return orders
    }
}