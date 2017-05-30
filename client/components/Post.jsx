import React from 'react'
import PropTypes from 'prop-types'

const Post = (props) => (
  <div><a href={`http://reddit.com/${props.permalink}`}>{props.title}</a>{console.log(props)}</div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
