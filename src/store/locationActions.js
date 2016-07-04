export const SET_LOCATION = 'SET_LOCATION'

export const setLocation = (
  level,
  label
) => {
  return {
    type: SET_LOCATION,
    level,
    label
  }
}
