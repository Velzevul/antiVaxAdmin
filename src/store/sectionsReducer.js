import {REQUEST_SECTIONS, RECEIVE_SECTIONS,
  REQUEST_UPDATE_SECTION, CONFIRM_UPDATE_SECTION, REJECT_UPDATE_SECTION,
  REQUEST_CREATE_SECTION, CONFIRM_CREATE_SECTION, REJECT_CREATE_SECTION,
  REQUEST_DELETE_SECTION, CONFIRM_DELETE_SECTION, REJECT_DELETE_SECTION} from './sectionsActions'
import initialState from './initialState'

const sections = (
  state = initialState.sections,
  action
) => {
  switch (action.type) {
    case REQUEST_SECTIONS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SECTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items.map(i => section(undefined, {
          type: action.type,
          item: i
        }))
      })
    case REQUEST_UPDATE_SECTION:
    case CONFIRM_UPDATE_SECTION:
    case REJECT_UPDATE_SECTION:
    case REQUEST_DELETE_SECTION:
    case REJECT_DELETE_SECTION:
      return Object.assign({}, state, {
        items: state.items.map(i => section(i, action))
      })
    case REQUEST_CREATE_SECTION:
    case REJECT_CREATE_SECTION:
      return Object.assign({}, state, {
        newSection: newSection(state.newSection, action)
      })
    case CONFIRM_CREATE_SECTION:
      return Object.assign({}, state, {
        newSection: newSection(state.newSection, action),
        items: [
          ...state.items,
          section(undefined, action)
        ]
      })
    case CONFIRM_DELETE_SECTION:
      return Object.assign({}, state, {
        items: state.items.filter(i => i.data._id !== action.id)
      })
    default:
      return state
  }
}

const section = (
  state = initialState.section,
  action
) => {
  switch (action.type) {
    case RECEIVE_SECTIONS:
      return Object.assign({}, state, {
        data: action.item
      })
    case CONFIRM_CREATE_SECTION:
      return Object.assign({}, state, {
        data: action.item
      })
    case REQUEST_UPDATE_SECTION:
    case REQUEST_DELETE_SECTION:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: true
        })
      } else {
        return state
      }
    case CONFIRM_UPDATE_SECTION:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          data: action.item,
          isUpdating: false,
          errors: {}
        })
      } else {
        return state
      }
    case REJECT_UPDATE_SECTION:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: false,
          errors: action.errors
        })
      } else {
        return state
      }
    case REJECT_DELETE_SECTION:
      if (state.data._id === action.id) {
        return Object.assign({}, state, {
          isUpdating: false
        })
      } else {
        return state
      }
    default:
      return state
  }
}

const newSection = (
  state,
  action
) => {
  switch (action.type) {
    case REQUEST_CREATE_SECTION:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case REJECT_CREATE_SECTION:
      return Object.assign({}, state, {
        isUpdating: false,
        errors: action.errors
      })
    case CONFIRM_CREATE_SECTION:
      return Object.assign({}, initialState.sections.newSection)
    default:
      return state
  }
}

export default sections
