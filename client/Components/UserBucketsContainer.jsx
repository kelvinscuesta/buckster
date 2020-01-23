import React, { Component } from 'react' 
import Bucket from './Bucket.jsx'

class UserBucketsContainer extends Component {
  // props passed down from the user to the userBuckets container
  constructor(props) {
    super(props)

    this.state ={
      bucketValue: '',
    }
    this.handleBucketValueChange = this.handleBucketValueChange.bind(this);
  }

  handleBucketValueChange(event) {
    this.setState({
      bucketValue: event.target.value,
    })
    // console.log('MY INPUT in state', this.state.bucketValue)
  }

  render() {
    // Want to have a container for all of the current users' buckets
    
    // console.log('USER BUCKETS CONTAINER PROPS:',this.props.currentUser);

    const { user, buckets} = this.props.currentUser


    // each  Userbucket container wants to have the user name presented
    // and create the amount of buckets in their respective buckets Arr

    const bucketsToAdd = [];

    for (let i = 0; i < buckets.length; i += 1) {
      bucketsToAdd.push(<Bucket currentBucket={buckets[i]} id={buckets[i]._id} />);
    }


    return (
      <div className='userBucketContainer' id={this.props.id}>
        <h2>{user}'s Buckets</h2>
        <div className="bucketsContainer">
          {bucketsToAdd}
        </div>
        <input type="text" className="addBucketTextBox" onChange={this.handleBucketValueChange} />
        <button type='button'id={`#${user}`} className="addBucketButton" value={this.state.bucketValue} onClick={this.props.addBucketClick}>Add Bucket</button>
      </div>
    );
  }
}

export default UserBucketsContainer;