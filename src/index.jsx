import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/global.css'
import configureStore from './store'
import { Provider } from 'react-redux'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import QuestionsPage from './components/QuestionsPage'
import QuestionsInbox from './components/QuestionsInbox'
import QuestionsFrequent from './components/QuestionsFrequent'
import Dummy from './components/Dummy'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path={`${ANTIVAX_ADMIN_PREFIX}/`} component={App}>
        <IndexRedirect to={`${ANTIVAX_ADMIN_PREFIX}/questions`} />

        <Route path="questions" component={QuestionsPage}>
          <IndexRedirect to={`${ANTIVAX_ADMIN_PREFIX}/questions/inbox`} />

          <Route path="inbox" component={QuestionsInbox} />
          <Route path="frequent" component={QuestionsFrequent} />
        </Route>

        <Route path="blog" component={Dummy} />
        <Route path="content" component={Dummy} />
        <Route path="users" component={Dummy} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
