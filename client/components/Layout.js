import React, { Component } from 'react'

import Header from './Header'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

export default class Layout extends Component {

  constructor() {
    super()
    this.state = {
      list: null
    }
  }

  componentDidMount() {

  }

  render() {
    const { list } = this.state
    return <div>
      <Header list={list} />
      <NewTodoForm list={list} />
      <TodoList list={list} />
    </div>
  }
}