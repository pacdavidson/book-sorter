import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import React from 'react'
import App from './components/app'

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
)

if (module && module.hot) {
    module.hot.accept('./components/app', () => {
        const NewApp = require('./components/app').default
        render(
            <AppContainer>
                <NewApp />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}
