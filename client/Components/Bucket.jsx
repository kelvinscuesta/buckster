import React, {Component } from 'react'
import BucketItem from './BucketItem.jsx'

class Bucket extends Component {
  // want to render items in the array to render in the specific button

  // seems like I might want state to live here

  render() {
    const bucket = this.props.bucket;

    console.log('bucket: ', bucket);

    /* bucket = {
      bucketName: 'Westerns,
      bucketItems: [
        {
          description: 'Watch True Grit', 
          signedOn: ['user2'],
        }
      ]
    }
    */

    // for each bucket, want to add bucketItems 

    const bucketItems = [];

    for (let i = 0; i < bucket.bucketItems.length; i += 1) {
      bucketItems.push(<BucketItem item={bucket.bucketItems[i]} />)
    }
  
    return (
      <div>
        <h3>{bucket.bucketName}</h3>
        {bucketItems}
      </div>
    )
  }
}

export default Bucket;