import React from 'react'
import {render} from 'react-dom'

import Root from './components/Root.js'
import App from './components/App'

render(<Root><App /></Root>, document.querySelector('#root'));