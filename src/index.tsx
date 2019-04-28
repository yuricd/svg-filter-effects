import * as React from 'react'
import { BlurFilter } from './effects/blur/blur'
import { BlurInterface } from './effects/blur/types'
import { SepiaFilter } from './effects/sepia/sepia'
import { ThreeDFilter } from './effects/threed/threed'

import style from './styles/_default.scss'

interface Props {
  image: string,
  width?: number,
  height?: number,
  blur?: BlurInterface,
  sepia?: boolean,
  threed?: boolean,
}

export default class Effect extends React.Component<Props> {

  public render() {
    const { image, width, height, blur, sepia, threed } = this.props

    return (
        <div className={style.wrapper} style={(width && height) ? {maxWidth: width, maxHeight: height, overflow: 'hidden'} : undefined}>
          <img 
            src={image} 
            alt="Blurred image" 
            id="original"
            style={{
              filter: `
                ${blur ? 'url(#apply-blur)': ''}
                ${sepia ? 'url(#apply-sepia)' : ''}
              `
            }}
            /> 
      
        {blur && (
          <BlurFilter deviation={blur.deviation} />
        )}

        {sepia && (
          <SepiaFilter />
        )}

        {threed && (
          <ThreeDFilter image={image} width={width} height={height} />
        )}
      </div>

    )
  }
}