import React, {Component} from 'react'

import Menu from './Menu/Menu'
import Order from './Order/Order'
import './index.css'

class App extends Component {
    render() {
        return(
            <section className={'section'}>
                <Menu />
                <Order />
            </section>
        )
    }
}

export  default App;

