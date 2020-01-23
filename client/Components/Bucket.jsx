import React, {Component } from 'react'
import BucketItem from './BucketItem.jsx'

class Bucket extends Component {


  render() {
    // console.log('currentBucket', this.props.currentBucket);

    const { bucketItems, bucketName} = this.props.currentBucket;
    // for each bucket, want to add bucketItems 

    const bucketItemsToAdd = [];

    for (let i = 0; i < bucketItems.length; i += 1) {
      bucketItemsToAdd.push(<BucketItem currentItem={bucketItems[i]} />)
    }
  
    return (
      <div id={this.props.currentBucket._id}>
        <h3>{bucketName}</h3>
        {bucketItemsToAdd}
        <input type="text" className="addBucketItemTextBox" />
        <button type='button' className="addBucketItemButton">+</button>
      </div>
    )
  }
}

export default Bucket;