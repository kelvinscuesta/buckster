import React, { Component } from 'react' 

// import other components here
import UserBucketsContainer from './UserBucketsContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      users: [],
      newUser: '',
    };

    this.addBucketClick = this.addBucketClick.bind(this);
    this.reRender = this.reRender;
    this.addUserClick = this.addUserClick.bind(this);
    this.deleteBucketClick = this.deleteBucketClick.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
  }


  handleNewUser(event) {
    this.setState({
      newUser: event.target.value,
    })
    console.log( this.state.newUser);
  }

  addUserClick(event) {
    // http://localhost:3000/:user

    // POST REQUEST
    const userName = this.state.newUser;

    console.log('MY NEW USERuserName', userName);

    fetch(`http://localhost:3000/${userName}`, {
      method: 'POST',
    })
    .then(data => this.reRender())
    .catch(err => console.log(err));

  }

  // handle adding buckets
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
    .then(data => {
      this.reRender();
    })
    .catch(err => console.log(err));
    
  }

  deleteBucketClick(event) {
    // http://localhost:3000/:user/deleteBucket/:bucketName


    const userName = event.target.id.slice(1);
    const bucketToDelete = event.target.value;

    fetch(`http://localhost:3000/${userName}/deleteBucket/${bucketToDelete}`, {
      method: 'DELETE',
    })
    .then(data => {
      this.reRender();
    })
    .catch(err => console.log(err))
  }

  // able to reRender the app
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
        fetchedUsers.push(<UserBucketsContainer currentUser={users[i]} id={users[i]._id} addBucketClick={this.addBucketClick} deleteBucketClick={this.deleteBucketClick} />);
      }

      return (
        <div id='app_container'>
          <h1>buckster: the bucketlist for friends!</h1>
          { fetchedUsers }
          <input type="text" onChange={this.handleNewUser} />
          <button onClick={this.addUserClick}>Create User</button>
        </div>
        );
    }

  }

}


export default App;