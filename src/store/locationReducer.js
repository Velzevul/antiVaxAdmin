import {SET_LOCATION} from './locationActions'
import initialState from './initialState'

const location = (
  state = initialState.location,
  action
) => {
  const {type, level, label} = action

  switch (type) {
    case SET_LOCATION:
      let newLocation = state.slice(0, level)
      newLocation.push(label)
      return newLocation
    default:
      return state
  }
}

export default location
