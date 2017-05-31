import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Post = (props) => (
  <div>
    <a href={`http://reddit.com/${props.permalink}`}>
      {props.title}
    </a>
    <div>
      {(props.thumbnail != 'self' && props.thumbnail != 'default') ?
      <img src={props.thumbnail} /> : ''}
    </div>
    <div>
      {moment.unix(props.created).format('MMMM Do YYYY')}
    </div>
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
