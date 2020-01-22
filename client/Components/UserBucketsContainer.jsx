import React, { Component } from 'react' 
import Bucket from './Bucket.jsx'

class UserBucketsContainer extends Component {
  // props passed down from the user to the userBuckets container
  constructor(props) {
    super(props)

    // state will have a buckets prop that will have a buckets array full of buckets - which will be my objects

    // example will have my western buckets first
    // in my mongoDB cluster
    /* 
      {
        "_id":{"$oid":"5e286b531c9d4400003abd27"},"bucketName":"Westerns",
        "bucketItems":[
          {
          "description":"Watch True Grit",
          "signedOn":["user2"],
          },
        ],
      }

    */

    // ideally the state will take buckets from the user props

    // mock initialization
    this.state = {
      buckets: [
        {
        bucketName: 'Westerns',
        bucketItems: [
          { description: 'Watch True Grit', signedOn: ['user2'], }, { description: 'Watch Deadwood Series', signedOn: ['user3'] },
        ],
      },
      {
        bucketName: 'Bars',
        bucketItems: [
          {description: 'Go to CovenHoven', signedOn: ['user2', 'user3'], }, {description: 'Go to Doris', signedOn: ['user2'],},
        ],
      }
    ],
    };
    // methods/ event handlers

  }

  render() {
    // Want to have a container for all of the current users' buckets
    const buckets = [];

    // should render 2 buckets right now
    for (let i = 0; i < this.state.buckets.length; i += 1) {
      buckets.push(<Bucket bucket={this.state.buckets[i]} />);
    };

    console.log('This.State:', this.state);

    // grab the user name from the database and put into state and whichever buckets
    return (
      <div className='userBucketContainer'>
        <h2>kelvin's Buckets</h2>
        <div className="bucketsContainer">
          {buckets}
        </div>
        <button type='button' className="Bucket_Button">Add Bucket</button>
      </div>
    );
  }
}

export default UserBucketsContainer;