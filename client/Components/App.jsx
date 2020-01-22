import React, { Component } from 'react' 

// import other components here
import UserBucketsContainer from './UserBucketsContainer.jsx'

class App extends Component {

  // ideally have buckets render for each users buckets
  render() {
    return (
      <div id='app_container'>
        <h1>buckster: the bucketlist for friends!</h1>
        <UserBucketsContainer />
      </div>
      );
  }
}

export default App;