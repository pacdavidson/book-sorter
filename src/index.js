import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import React from 'react'
import App from './app'

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
)

if (module && module.hot) {
    module.hot.accept('./app', () => {
        const NewApp = require('./app').default
        render(
            <AppContainer>
                <NewApp />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}
