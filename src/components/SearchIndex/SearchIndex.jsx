import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import {fetchSearchIndex, updateSearchIndex} from '../../store/searchIndexActions.js'
import Loading from '../Loading'
import {LinkButton} from '../UI'
import {Flex} from '../Layouts'
import Wrapper from '../Wrapper'
import Table from '../Table'
import TableRow from '../TableRow'
import TableColumn from '../TableColumn'
import TableCell from '../TableCell'

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
        <Wrapper>
          <Table>
            <TableRow heading>
              <TableColumn width="stretch">
                <TableCell heading title>Search Index</TableCell>
              </TableColumn>

              <TableColumn heading
                last
                width="15">
                <Flex justifyContent="flex-end">
                  <LinkButton disabled={isUpdating}
                    onClick={this.update}>Update index</LinkButton>
                </Flex>
              </TableColumn>
            </TableRow>

            <TableRow>
              <TableColumn width="stretch">
                <TableCell title>Last updated on <Time value={lastUpdatedOn} format="h:mm A on MMM Do" /> by {lastUpdatedBy}</TableCell>
              </TableColumn>
            </TableRow>
          </Table>
        </Wrapper>
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
