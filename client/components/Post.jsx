import React from 'react'
import PropTypes from 'prop-types'

const Post = (props) => (
  <div>
    <a href={`http://reddit.com/${props.permalink}`}>
      {props.title}
    </a>
    <div>
      {(props.thumbnail != 'self' && props.thumbnail != 'default') ?
      <img src={props.thumbnail} /> : ''}
    </div>
    {console.log(props.thumbnail)}
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
