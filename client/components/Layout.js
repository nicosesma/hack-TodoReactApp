import React, { Component } from 'react'

import Header from './Header'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

export default class Layout extends Component {

  constructor() {
    super()
    this.state = {
      listName: 'List #1',
      list: [
        {
          id: 1,
          task: 'First thing',
          complete: false
        },
        {
          id: 2,
          task: 'Second item',
          complete: false
        },
        {
          id: 3,
          task: 'Move to LA',
          complete: false
        }
      ]
    }
  }

  // initializeApp() {
  //   this.setState({
  //     list: [
  //       {
  //         id: 1,
  //         task: 'First thing',
  //         complete: false
  //       },
  //       {
  //         id: 2,
  //         task: 'Second item',
  //         complete: false
  //       },
  //       {
  //         id: 3,
  //         task: 'Move to LA',
  //         complete: false
  //       }
  //     ]
  //   })
  // }

  // componentDidMount() {
  //   this.initializeApp()
  // }

  render() {
    const { list, listName } = this.state
    return <div>
      <Header list={list} listName={listName} />
      <NewTodoForm list={list} />
      <TodoList list={list} />
    </div>
  }
}