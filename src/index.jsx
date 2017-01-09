import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, IndexRedirect, IndexRoute, hashHistory} from 'react-router'

import App from './components/App'
import QuestionsList from './components/QuestionsList'
import Question from './components/Question'

import UsersList from './components/UsersList'
import EditUserForm from './components/EditUserForm'
import NewUserForm from './components/NewUserForm'

import Sections from './components/Sections'
import SectionsList from './components/SectionsList'
import NewSectionForm from './components/NewSectionForm'
import EditSectionForm from './components/EditSectionForm'

import Section from './components/Section'
import NewArticleForm from './components/NewArticleForm'
import EditArticleForm from './components/EditArticleForm'

import SearchIndex from './components/SearchIndex'

import './styles/global.css'
import configureStore from './store'

const store = configureStore()
const Dummy = () => <div />

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="questions" />

        <Route path="questions" component={QuestionsList}>
          <Route path=":questionId" component={Question} />
        </Route>

        <Route path="users" component={UsersList}>
          <Route path="new" component={NewUserForm} />
          <Route path=":userId" component={EditUserForm} />
        </Route>

        <Route path="search-index" component={SearchIndex} />

        <Route path=":metaSectionUrl" component={Sections}>
          <Route component={SectionsList}>
            <IndexRoute component={Dummy} />

            <Route path="new" component={NewSectionForm} />
            <Route path=":sectionId/edit" component={EditSectionForm} />
          </Route>

          <Route path=":sectionId" component={Section}>
            <Route path="articles/new" component={NewArticleForm} />
            <Route path="articles/:articleId" component={EditArticleForm} />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
