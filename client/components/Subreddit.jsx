import React from 'react'
import PropTypes from 'prop-types'

import Post from './Post'

const Subreddit = ({subreddits, loading}) => (
  <div>
    {loading ? 'loading' :
      subreddits.map((post, i) =>
        <Post
          key={i}
          {...post}
          />
      )
    }
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.array.isRequired
}

export default Subreddit
