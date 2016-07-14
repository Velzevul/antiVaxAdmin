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
import QuestionsFrequentEdit from './components/QuestionsFrequentEdit'
import QuestionsFrequentCreate from './components/QuestionsFrequentCreate'

import BlogpostsDirectory from './components/BlogpostsDirectory'
import BlogpostsCreate from './components/BlogpostsCreate'
import BlogpostsEdit from './components/BlogpostsEdit'

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

          <Route path="frequent" component={QuestionsFrequentDirectory}>
            <Route path="new" component={QuestionsFrequentCreate} />
            <Route path=":itemId" component={QuestionsFrequentEdit} />
          </Route>
        </Route>

        <Route path="blogposts" component={BlogpostsDirectory}>
          <Route path="new" component={BlogpostsCreate} />
          <Route path=":itemId" component={BlogpostsEdit} />
        </Route>

        <Route path="content" component={Dummy} />
        <Route path="users" component={Dummy} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
