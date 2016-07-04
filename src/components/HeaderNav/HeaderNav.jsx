import React from 'react'
import {connect} from 'react-redux'
import {setLocation} from '../../store/locationActions'
import {ListInline, ListInlineItem} from '../Layouts'
import styles from './HeaderNav.css'

class HeaderNav extends React.Component {
  constructor (props) {
    super(props)

    this.menuLevel = 0
    this.navigate = this.navigate.bind(this)
  }

  navigate (item, event) {
    const {dispatch} = this.props

    dispatch(setLocation(0, item))
  }

  render () {
    const {location} = this.props

    const navItems = [
      'Questions',
      'Blog',
      'Content',
      'Users'
    ].map(i => {
      let classNames = [styles.HeaderNav__item]

      if (location[this.menuLevel] === i) {
        classNames.push(styles.HeaderNav__item_active)
      }

      return (
        <ListInlineItem n={0} key={i}>
          <button className={classNames.join(' ')} onClick={(e) => this.navigate(i, e)}>{i}</button>
        </ListInlineItem>
      )
    })

    return (
      <div className={styles.HeaderNav}>
        <ListInline n={0}>
          {navItems}
        </ListInline>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      location: state.location
    }
  }
)(HeaderNav)
