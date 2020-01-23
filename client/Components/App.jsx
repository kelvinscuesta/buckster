import React, { Component } from 'react' 

// import other components here
import UserBucketsContainer from './UserBucketsContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      users: [],
    };

    this.addBucketClick = this.addBucketClick.bind(this);
    this.reRender = this.reRender
  }


  // handle 
  addBucketClick(event) {

    // localhost:3000/:user/addBucket/:bucketName
    // want to somehow set state here
    // send a fetch request here too
    // inside the post 
    
    const userName = event.target.id.slice(1);
    const newBucketName = event.target.value;

    console.log(userName, newBucketName);
    // send a request to my addBucket route
    fetch(`http://localhost:3000/${userName}/addBucket/${newBucketName}`, {
      method: 'PUT',
    })
    .then()
    
  }

  // have the users state in the app itself

  reRender() {
    const usersUrl = 'http://localhost:3000/getAllUsers'
    // fetch data and set state
    // cors error

    fetch(usersUrl)
    .then(data => data.json())
    .then(data => {
      this.setState({users: data, isLoaded: true,});
    })
    .catch(err => {console.log("MY ERROR:", err)});
  }

  // when the component mounts, fetch the data from the database and setState to the JSON object retrieved
  componentDidMount() {
    // // fetch data and set state
    // // cors error
    
    const usersUrl = 'http://localhost:3000/getAllUsers'

    fetch(usersUrl)
    .then(data => data.json())
    .then(data => {
      this.setState({users: data, isLoaded: true,});
    })
    .catch(err => {console.log("MY ERROR:", err)});

  }

  // ideally have buckets render for each users buckets
  render() {
    // set up a conditional render that will render 
    const { users, isLoaded} = this.state;

    // if the data is not loaded
    if (!isLoaded) {
      return (
        <h1>We loading Baby!</h1>
      )
    }
    
    // when the data loads render all the users and their buckets
    else if (isLoaded) {
      console.log('UPDATED USERS', users);

      const fetchedUsers = [];

      for (let i = 0; i < users.length; i += 1) {
        fetchedUsers.push(<UserBucketsContainer currentUser={users[i]} id={users[i]._id} addBucketClick={this.addBucketClick} />);
      }

      return (
        <div id='app_container'>
          <h1>buckster: the bucketlist for friends!</h1>
          { fetchedUsers }
          <input type="text" />
          <button>Create User</button>
        </div>
        );
    }

  }

}


export default App;