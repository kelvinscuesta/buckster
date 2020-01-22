import React, { Component } from 'react'

// consider a functional component instead of class component

class BucketItem extends Component {


  // will take in a bucketItem from the Bucket

  // so for Western
  // will take in  {description: Watch True Grit, signedOn:[]}

  render() {

    // item will have form 
    /* {
      description: 'Watch...'
      signedOn: ['user2', ...]
    }
    */

    console.log('item:', this.props.item)

    const item = this.props.item;

    const signedOn = [];

    for (let i = 0; i < item.signedOn.length; i += 1) {
      signedOn.push(<li>Signed On: {item.signedOn[i]}</li>);
    }

    return (
      <div>
        <p>{this.props.item.description}</p>
        <ul>
          {signedOn}
        </ul>
      </div>

    )
  }
}

export default BucketItem;