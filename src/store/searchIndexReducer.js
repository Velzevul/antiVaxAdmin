import {REQUEST_INDEX, RECEIVE_INDEX,
  REQUEST_UPDATE_INDEX, CONFIRM_UPDATE_INDEX} from './searchIndexActions'
import initialState from './initialState'

const searchIndex = (
  state = initialState.searchIndex,
  action
) => {
  switch (action.type) {
    case REQUEST_INDEX:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_INDEX:
      return Object.assign({}, state, {
        isFetching: false,
        lastUpdatedOn: action.lastUpdatedOn,
        lastUpdatedBy: action.lastUpdatedBy
      })
    case REQUEST_UPDATE_INDEX:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case CONFIRM_UPDATE_INDEX:
      return Object.assign({}, state, {
        isUpdating: false,
        lastUpdatedOn: action.lastUpdatedOn,
        lastUpdatedBy: action.lastUpdatedBy
      })
    default:
      return state
  }
}

export default searchIndex
