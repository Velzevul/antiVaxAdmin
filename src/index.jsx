import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'

import QuestionsList from './components/QuestionsList'
import Question from './components/Question'

import UsersList from './components/UsersList'
import EditUserForm from './components/EditUserForm'
import NewUserForm from './components/NewUserForm'

import Sections from './components/Sections'

import SectionsList from './components/SectionsList'
import NewSectionForm from './components/NewSectionForm'
import EditSectionForm from './components/EditSectionForm'

import BlogpostsList from './components/BlogpostsList'
import NewBlogpostForm from './components/NewBlogpostForm'
import EditBlogpostForm from './components/EditBlogpostForm'

import ArticlesList from './components/ArticlesList'
import NewArticle from './components/NewArticle'
import EditArticleForm from './components/EditArticleForm'

import CustomSectionForm from './components/CustomSectionForm'

import SearchIndex from './components/SearchIndex'

import './styles/global.css'

import App from './components/App'

// import ArticleDirectory from './components/ArticleDirectory'
// import ArticleCreate from './components/ArticleCreate'
// import ArticleEdit from './components/ArticleEdit'
//
// import UsersList from './components/UsersList'
// import UsersCreate from './components/UsersCreate'
// import UsersEdit from './components/UsersEdit'
//
// import QuestionsList from './components/QuestionsList'

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

        <Route path="sections/:navigationType" component={Sections}>
          <Route path=":sectionId/articles" component={ArticlesList}>
            <Route path="new" component={NewArticle} />
            <Route path=":articleId" component={EditArticleForm} />
          </Route>

          <Route path=":sectionId/custom-page" component={CustomSectionForm} />

          <Route path=":sectionId" component={SectionsList}>
            <Route path="new" component={NewSectionForm} />
            <Route path="edit" component={EditSectionForm} />
          </Route>
        </Route>

        <Route path="search-index" component={SearchIndex} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
