const loading = (state = false, action) => {
  switch(action.type) {
    case 'START_LOADING':
      return true

    case 'RECEIVE_POSTS':
      return false

    case 'NEW_ERROR':
      return false

    default:
      return state
  }
}

export default loading
