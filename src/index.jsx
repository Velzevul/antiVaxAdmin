import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/global.css'
import configureStore from './store'
import { Provider } from 'react-redux'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'

import QuestionsSection from './components/QuestionsSection'
import QuestionsInboxDirectory from './components/QuestionsInboxDirectory'
import QuestionsFrequentDirectory from './components/QuestionsFrequentDirectory'

import TrashSection from './components/TrashSection'
import TrashQuestionsDirectory from './components/TrashQuestionsDirectory'
import TrashFrequentDirectory from './components/TrashFrequentDirectory'

import Dummy from './components/Dummy'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path={`${ANTIVAX_ADMIN_PREFIX}/`} component={App}>
        <IndexRedirect to={`${ANTIVAX_ADMIN_PREFIX}/questions`} />

        <Route path="questions" component={QuestionsSection}>
          <IndexRedirect to={`${ANTIVAX_ADMIN_PREFIX}/questions/inbox`} />

          <Route path="inbox" component={QuestionsInboxDirectory} />
          <Route path="frequent" component={QuestionsFrequentDirectory} />
        </Route>

        <Route path="blog" component={Dummy} />
        <Route path="content" component={Dummy} />
        <Route path="users" component={Dummy} />

        <Route path="trash" components={TrashSection}>
          <IndexRedirect to={`${ANTIVAX_ADMIN_PREFIX}/trash/questions`} />

          <Route path="questions" component={TrashQuestionsDirectory} />
          <Route path="frequent" component={TrashFrequentDirectory} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
