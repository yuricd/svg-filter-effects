# image-effects

> Add effects to images using SVG filters and CSS.

[![NPM](https://img.shields.io/npm/v/image-effects.svg)](https://www.npmjs.com/package/image-effects) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save image-effects
```

## Current effects
- Blur
- Sepia
- 3D (creates copies of the original image and overlay them)

## Application precedence
3D > Blur > Sepia

## Usage

```tsx
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
          sepia={true}
         />
      </div>
    )
  }
}
```
## TODO
- Mirror/flip
- Grayscale

## License

MIT © [yuricd](https://github.com/yuricd)
