import React from 'react'
import {render} from 'react-dom'
import App from './container/App'
import serviceWorker from './registerServiceWorker'
import findCity from './common/findCity'

findCity('晋中').then((resolve => {
    console.log(resolve);
}))
render(
    <App/>,
    document.getElementById('root')
)
serviceWorker()
