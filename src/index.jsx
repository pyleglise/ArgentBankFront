/**
 * @file
 * File : index.jsx\
 * Entry point of the app\
 * Creates the state provider and renders the React components
 *
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @name index
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import './utils/style/_global.scss'

import App from './app/App'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
