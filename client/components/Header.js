import React, { Component } from 'react'

export default class Header extends Component {

  render() {
    return <div>
      <h1>{this.props.listName}</h1>
    </div>
  }
}