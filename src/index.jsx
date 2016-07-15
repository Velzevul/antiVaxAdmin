import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/global.css'
import configureStore from './store'
import { Provider } from 'react-redux'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'

import ArticleDirectory from './components/ArticleDirectory'
import ArticleCreate from './components/ArticleCreate'
import ArticleEdit from './components/ArticleEdit'

import BlogpostsDirectory from './components/BlogpostsDirectory'
import BlogpostsCreate from './components/BlogpostsCreate'
import BlogpostsEdit from './components/BlogpostsEdit'

import UsersDirectory from './components/UsersDirectory'
import UsersCreate from './components/UsersCreate'
import UsersEdit from './components/UsersEdit'

import QuestionsDirectory from './components/QuestionsDirectory'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path={`${ANTIVAX_ADMIN_PREFIX}/`} component={App}>
        <IndexRedirect to="questions" />

        <Route path="questions" component={QuestionsDirectory} />

        <Route path="blogposts" component={BlogpostsDirectory}>
          <Route path="new" component={BlogpostsCreate} />
          <Route path=":itemId" component={BlogpostsEdit} />
        </Route>

        <Route path="users" component={UsersDirectory}>
          <Route path="new" component={UsersCreate} />
          <Route path=":itemId" component={UsersEdit} />
        </Route>

        <Route path=":sectionId" component={ArticleDirectory}>
          <Route path="new" component={ArticleCreate} />
          <Route path=":itemId" component={ArticleEdit} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
