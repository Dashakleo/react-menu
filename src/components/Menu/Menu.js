import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import MenuItem from './MenuItem'
import './index.css'

class Menu extends Component {
    static propTypes = {
        menu: PropTypes.array.isRequired
    }
    render() {
        const {menu} = this.props
        const menuList = menu.map((menuItem) => <li key = {menuItem.id} className={'menu-list__item'}>
            <MenuItem item = {menuItem} />
        </li>)
        return (
            <div className={'menu'}>
                <h1 className={'menu__title'}>Меню на сегодня</h1>
                <ul className={'menu-list'}>
                    {menuList}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({menu}) {
    return {
        menu
    }
}

export default connect(mapStateToProps)(Menu)