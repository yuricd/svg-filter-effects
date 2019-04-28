import React, { Component } from 'react'
import lenna from './assets/lenna.jpg'
import Effect from 'image-effects'

export default class App extends Component {
  render () {
    return (
      <div>
        <Effect 
          image={lenna}
          width={500}
          height={500}
          blur={{deviation: 0}}
          threed={true}
         />
      </div>
    )
  }
}
