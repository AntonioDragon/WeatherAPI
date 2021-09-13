import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {compose, createStore, applyMiddleware} from 'redux'
import {rootReducer} from './redux/rootReducer'
import { SnackbarProvider } from 'notistack';

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
    ),
))

const app = (
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
    <App/>
    </SnackbarProvider>
  </Provider>
)


ReactDOM.render(app, document.getElementById('root'))