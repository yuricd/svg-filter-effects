import React, { Component } from 'react'
import lenna from './assets/lenna.jpg'
import Effect from 'image-effects'

export default class App extends Component {
  render () {
    return (
      <div>
        <Effect 
          image={lenna}
          blur={{deviation: 10}}
          sepia={true}
         />
      </div>
    )
  }
}
