import React, { Component } from 'react'

export default class TodoList extends Component {

  render() {

    const { list } = this.props

    const listItems = list.map( item => {
      return <li key={item.id} >{item.task}</li>
    })

    return <div>
      <ul>
        {listItems}
      </ul>
    </div>
  }
}