import 'babel-polyfill'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import React from 'react'
import ReactDOM from 'react-dom'
import {indigo500, indigo700, indigo300, amber600 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import App from './components/App'
import './global.scss'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
    primary2Color: indigo700,
    primary3Color: indigo300,
    accent1Color: amber600
  }
})

ReactDOM.render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
), document.getElementById('app'))
