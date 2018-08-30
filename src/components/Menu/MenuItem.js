import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from "prop-types";

import {addOrder, changeOrderCount} from '../../actions'

class MenuItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired
        })
    }
    render() {
        const {item} = this.props
        return (
            <button onClick={this.addToOrder}> <b>{item.name}</b> <span className={'menu-list__price'}>{`Цена: ${item.price}`}</span></button>
        )
    }

    addToOrder = (e) => {
        const {orders, item, addOrder, changeOrderCount} = this.props
        const order = orders.find((order) => order.id===item.id)
        if (order) {
            changeOrderCount({id: order.id, value: order.count + 1})
            return
        }
        const newOrder = {
            name: item.name,
            count: 1,
            id: item.id,
            price: item.price
        }
        addOrder(newOrder)

    }
}
function mapStateToProps({orders}) {
    return {
        orders
    }
}

export default connect(mapStateToProps, {addOrder,changeOrderCount})(MenuItem)