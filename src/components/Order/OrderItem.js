import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {deleteOrder,changeOrderCount} from '../../actions'

class OrderItem extends Component {
    static propTypes = {
        order: PropTypes.shape({
            name: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired
        })
    }
    render() {
        const {order} = this.props
        return (
            <div className={'order-input'}>
                <span>{order.name}</span>
                <div className={'order-input_right'}>
                    <input type="number"
                           min = "1"
                           size = "3"
                           value = {order.count}
                           onChange={this.setCount}
                           className={'order-input__count'}/>
                    <span>{order.price * order.count} руб.</span>
                    <span onClick={this.handleDelete} className={'order-input__cancel'}></span>
                </div>
            </div>
        )
    }
    handleDelete = (e) => {
        const {deleteOrder, order} = this.props
        deleteOrder(order.id)
    }

    setCount = (e) => {
        const {order, changeOrderCount} = this.props
        changeOrderCount({id: order.id, value: e.target.value})
    }
}

export default connect(null, {deleteOrder,changeOrderCount})(OrderItem)