import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import {fetchSearchIndex, updateSearchIndex} from '../../store/searchIndexActions.js'
import Loading from '../Loading'
import {Button} from '../UI'

import styles from './SearchIndex.css'

class SearchIndex extends React.Component {
  constructor (props) {
    super(props)

    this.update = this.update.bind(this)
  }

  update () {
    const {updateIndex} = this.props

    updateIndex()
  }

  componentWillMount () {
    const {fetchIndex} = this.props

    fetchIndex()
  }

  render () {
    const {isFetching, isUpdating, lastUpdatedOn, lastUpdatedBy} = this.props

    if (isFetching) {
      return <Loading />
    } else {
      return (
        <div className={styles.SearchIndex}>
          <div className={styles.Heading}>
            <div className={styles.Name}>Search Index</div>
          </div>

          <div className={styles.SearchIndex__body}>
            <div>
              Last updated on <Time value={lastUpdatedOn} format="h:mm A on MMM Do" /> by {lastUpdatedBy}
            </div>

            <Button disabled={isUpdating}
              onClick={this.update}>Update</Button>
          </div>
        </div>
      )
    }
  }
}

export default connect(
  state => {
    return {
      isFetching: state.searchIndex.isFetching,
      isUpdating: state.searchIndex.isUpdating,
      lastUpdatedOn: state.searchIndex.lastUpdatedOn,
      lastUpdatedBy: state.searchIndex.lastUpdatedBy
    }
  },
  dispatch => {
    return {
      fetchIndex: () => {
        dispatch(fetchSearchIndex())
      },
      updateIndex: () => {
        dispatch(updateSearchIndex())
      }
    }
  }
)(SearchIndex)
