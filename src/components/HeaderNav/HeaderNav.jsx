import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {ListInline, ListInlineItem} from '../Layouts'
import styles from './HeaderNav.css'

class HeaderNav extends React.Component {
  render () {
    const navItems = [
      {
        id: 'questions',
        label: 'Questions'
      },
      {
        id: 'blog',
        label: 'Blog'
      },
      {
        id: 'content',
        label: 'Content'
      },
      {
        id: 'users',
        label: 'Users'
      }
    ].map(i =>
      <ListInlineItem n={0} key={i.id}>
        <Link className={styles.HeaderNav__item} activeClassName={styles.HeaderNav__item_active} to={`${ANTIVAX_ADMIN_PREFIX}/${i.id}`}>{i.label}</Link>
      </ListInlineItem>
    )

    return (
      <div className={styles.HeaderNav}>
        <ListInline n={0}>
          {navItems}
        </ListInline>
      </div>
    )
  }
}

export default HeaderNav
