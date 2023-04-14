/**
 * @file
 * File : index.jsx\
 * Entry point of the app\
 *  Contains the router (react-router)\
 *
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @module MainApp
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/store'
import './utils/style/_global.scss'

import App from './App'

// import { UserProvider } from './utils/context'

const root = ReactDOM.createRoot(document.getElementById('root'))
// console.log(UserProvider)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <UserProvider> */}

        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>

        {/* </UserProvider> */}
      </Router>
    </Provider>
  </React.StrictMode>
)