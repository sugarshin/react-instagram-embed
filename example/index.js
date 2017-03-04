import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const main = () => {
  const meta = document.createElement('meta')
  meta.setAttribute('name', 'viewport')
  meta.setAttribute('content', 'width=device-width, initial-scale=1')
  document.head.appendChild(meta)

  const root = document.body.appendChild(document.createElement('div'))
  ReactDOM.render(<AppContainer><App /></AppContainer> , root)

  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default
      ReactDOM.render(<AppContainer><NextApp /></AppContainer>, root)
    })
  }
}

main()
