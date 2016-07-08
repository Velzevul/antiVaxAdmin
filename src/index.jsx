import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/global.css'
import configureStore from './store'
import { Provider } from 'react-redux'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import QuestionsSection from './components/QuestionsSection'
import InboxDirectory from './components/InboxDirectory'
import Dummy from './components/Dummy'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path={`${ANTIVAX_ADMIN_PREFIX}/`} component={App}>
        <IndexRedirect to={`${ANTIVAX_ADMIN_PREFIX}/questions`} />

        <Route path="questions" component={QuestionsSection}>
          <IndexRedirect to={`${ANTIVAX_ADMIN_PREFIX}/questions/inbox`} />

          <Route path="inbox" component={InboxDirectory} />
          <Route path="frequent" component={Dummy} />
        </Route>

        <Route path="blog" component={Dummy} />
        <Route path="content" component={Dummy} />
        <Route path="users" component={Dummy} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
