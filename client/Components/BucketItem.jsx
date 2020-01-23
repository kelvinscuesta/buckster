import React, { Component } from 'react'

class BucketItem extends Component {

  render() {
    console.log("CURRENT ITEM:", this.props.currentItem);



    return (
      <div >
        <p>{this.props.item.description}</p>
        <ul>
          {signedOn}
        </ul>
      </div>

    )
  }
}

export default BucketItem;