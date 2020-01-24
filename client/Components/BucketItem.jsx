import React, { Component } from 'react'

class BucketItem extends Component {

  render() {
    console.log("CURRENT ITEM:", this.props.currentItem);



    return (
      <div >
        <p>{this.props.currentItem}</p>
        <ul>
        </ul>
      </div>

    )
  }
}

export default BucketItem;