import {REQUEST_SCHEDULE, RECEIVE_SCHEDULE,
  REQUEST_UPDATE_SCHEDULE, RECEIVE_UPDATE_SCHEDULE} from './scheduleActions'
import initialState from './initialState'

const schedule = (
  state = initialState.schedule,
  action
) => {
  switch (action.type) {
    case REQUEST_SCHEDULE:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SCHEDULE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        postScheduleContent: action.postScheduleContent
      })
    case REQUEST_UPDATE_SCHEDULE:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case RECEIVE_UPDATE_SCHEDULE:
      return Object.assign({}, state, {
        isUpdating: false,
        items: action.items,
        postScheduleContent: action.postScheduleContent
      })
    default:
      return state
  }
}

export default schedule
