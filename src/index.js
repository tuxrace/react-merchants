import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Merchants from './components/Merchants'
import Add from './components/Add'
import Edit from './components/Edit'
import View from './components/View'
import { createStore, applyMiddleware  } from 'redux'
import { Provider, connect } from 'react-redux'
import { fromJS, set } from 'immutable'
import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
const mockData = require('../mockData')
import './style.css'

const initialState = fromJS({
  merchants: mockData,
  singleMerchant:null
})

const reducer = (state = initialState, action) => {
  console.log('kk---', action.payload)
  switch (action.type) {    
    case 'LOAD_MERCHANT_DONE':
      return state.set('singleMerchant',action.payload)
    case 'ADD_MERCHANT':
      return state.set('merchants', state.get('merchant').concat(action.payload))  
    default:
      return state
  }
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Merchants} />
    <Route path="/add" component={Add} />
    <Route path="/edit/:id" component={Edit} />
    <Route path="/view/:id" component={View} />
  </Router>
)

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
