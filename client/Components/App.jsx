import React, { Component } from 'react' 

// import other components here
import UserBucketsContainer from './UserBucketsContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {};

  }

  // have the users state in the app itself

  // when the component mounts, fetch the data from the database and setState to the JSON object retrieved

  componentDidMount() {

    // fetch data and set state
  }

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