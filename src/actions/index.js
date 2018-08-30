import { CHANGE_ORDER_COUNT, DELETE_ORDER, ADD_ORDER, CLEAN_ORDERS} from './types'

export function addOrder(order) {
    return {
        type: ADD_ORDER,
        payload: {order}
    }
}

export function changeOrderCount(payload) {
    return {
        type: CHANGE_ORDER_COUNT,
        payload: payload
    }
}

export function deleteOrder(id) {
    return {
        type: DELETE_ORDER,
        payload: {id}
    }
}

export function cleanOrders() {
    return {
        type: CLEAN_ORDERS
    }
}