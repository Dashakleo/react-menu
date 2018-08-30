import React from 'react'
import {createStore} from 'redux'
import reducer from '../reducer'
import {Provider} from 'react-redux'

export default ({children, initialState = {}}) => {
    const store = createStore(
        reducer,
        initialState
    );

    return(
        <Provider store = {store}>
            {children}
        </Provider>
    )
}
