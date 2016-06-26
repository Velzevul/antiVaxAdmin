import React from 'react'

import styles from './App.scss'
import img from './img.jpg'
import RaisedButton from 'material-ui/RaisedButton';

const App = () => {
  return (
    <div className={styles.App}>
      App here

      <div>
        <img src={img} />
      </div>
      <RaisedButton label="Default" />
      <RaisedButton label="Primary" primary />
      <RaisedButton label="Secondary" secondary />
      <RaisedButton label="Disabled" disabled />
    </div>
  )
}

export default App
