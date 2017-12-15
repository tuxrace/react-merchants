import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Merchants from './components/Merchants'
import Add from './components/Add'
import Edit from './components/Edit'
import View from './components/View'
import { createStore, applyMiddleware, combineReducers  } from 'redux'
import { Provider, connect } from 'react-redux'
import { fromJS, set } from 'immutable'
import { reducer as formReducer } from 'redux-form'
import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import main from './reducers'
import './style.scss'

const reducers = {
  form: formReducer,
  main
}
const reducer = combineReducers(reducers)

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
