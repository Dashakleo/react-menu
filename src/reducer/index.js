import {combineReducers} from 'redux'
import menu from './menu'
import orders from './orders'
import employee from './employee'

export default combineReducers({
    menu,
    orders,
    employee
})