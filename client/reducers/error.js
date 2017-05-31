const error = (state = null, action) => {
  console.log(action)
  switch (action.type) {
    case 'NEW_ERROR':
      return action.message

    default:
      return state
  }
}

export default error
