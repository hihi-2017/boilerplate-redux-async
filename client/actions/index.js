import request from 'superagent'

export const receivePosts = (posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export const startLoading = () => {
  return {
    type: 'START_LOADING'
  }
}

const newError = (message) => {
  return {
    type: 'NEW_ERROR',
    message
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(startLoading())
    request
      .get(`/api/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          dispatch(newError(err.message))
        } else {
          dispatch(receivePosts(res.body))
        }
      })
  }
}
