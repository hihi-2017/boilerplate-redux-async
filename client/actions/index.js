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

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(startLoading())
    request
      .get(`/api/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePosts(res.body))
      })
  }
}
