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
import './utils/style/_global.scss'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Error from './components/error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/profile" element={<Profile />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
