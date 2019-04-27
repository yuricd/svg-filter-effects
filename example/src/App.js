import React, { Component } from 'react'
import lenna from './assets/lenna.jpg'
import { Blur } from 'image-effects'

export default class App extends Component {
  render () {
    return (
      <div>
        <Blur image={lenna} />
      </div>
    )
  }
}
