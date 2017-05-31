import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import SubredditContainer from '../containers/SubredditContainer'
import ErrorContainer from '../containers/ErrorContainer'

const App = () => (
  <div className='app-container'>
    <ErrorContainer />
    <LoadSubreddit />
    <SubredditContainer />
  </div>
)

export default App
