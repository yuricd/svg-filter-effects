import React, { Component } from 'react'
import lenna from './assets/lenna.jpg'
import Effect from 'image-effects'

import './index.css';

export default class App extends Component {
  render () {
    return (
      <React.Fragment>
        <h1>Image effects</h1>
        <div id="app" className="app">

          <div className="app__item">
            <Effect 
              image={lenna}
              width={500}
              height={500}
              threed={true}
            />
          </div>

          <div className="app__item">
            <Effect 
              image={lenna}
              width={500}
              height={500}
              sepia={true}
            />
          </div>

          <div className="app__item">
            <Effect 
              image={lenna}
              width={500}
              height={500}
              blur={{deviation: 10}}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
