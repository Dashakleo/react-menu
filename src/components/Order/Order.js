import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import OrderItem from './OrderItem'
import {cleanOrders} from '../../actions'
import './index.css'

class Order extends Component {
    static propTypes = {
        employee: PropTypes.array.isRequired,
        orders: PropTypes.array.isRequired
    }
    render() {
        return (
            <div className={'order'}>
                {this.renderOrder()}
            </div>
        )
    }
    renderOrder = () => {
        const {employee,menu} = this.props

        if (!menu.length) {
            return <div className={'holiday-title'}>Сегодня не работаем</div>
        }

        const employeeList = employee.map(emp => <option key={emp.id} value={`${emp.name.first} ${emp.name.last}`}>
            {`${emp.name.first} ${emp.name.last}`}
        </option>)

        return <form action="" onSubmit={this.handleSubmit} className={'form'}>
            <div className={'flex'}>
                <h2 className={'form__title'}>Ваш заказ</h2>
                <select id="employee_list" required className={'form__select'}>
                    <option value=''>Выберите сотрудника</option>
                    {employeeList}
                </select>
            </div>
            <div className={'form-block'}>
                {this.createList()}
            </div>
            <button type="submit" className={'form__button'}> Сформировать заказ </button>
        </form>
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {orders, cleanOrders} = this.props
        if (!orders.length) {
            alert('Выберите хотя бы один товар')
            return
        }
        let newOrder = {
            date: new Date(),
            name: e.target.elements.employee_list.value,
            items: orders
        }
        e.target.reset()
        cleanOrders()
        alert('Заказ оформлен')

        console.log(JSON.stringify(newOrder, "", 2))
    }

    createList = () => {
        const {orders} = this.props

        if (!orders.length) return <p> Сделайте заказ! </p>
        return (
            <ul className={'form-list'}>
                {orders.map((order) => <li key={order.id} className={'form-list__item'}> <OrderItem order = {order} /> </li>)}
            </ul>
        )
    }
}


function mapStateToProps({orders,employee,menu}) {
    return {
        orders,
        employee,
        menu
    }
}

export default connect(mapStateToProps, {cleanOrders})(Order)