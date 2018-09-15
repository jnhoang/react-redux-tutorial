import React from 'react'
import ReactDOM from 'react-dom'

// redux modules
import { Provider } from 'react-redux'
import store from './store'

// app modules
// import App from './App'
import Layout from './Layout.js'
import './index.css'

ReactDOM.render(
  <Provider store={ store }>
    <Layout />
  </Provider>
  , document.getElementById('root'));
