import * as React from 'react'
import style from './threed.scss'

interface Props {
  image: string,
  width?: number,
  height?: number
}

export const ThreeDFilter = (props: Props) => {
  const { image} = props

  return (
    <React.Fragment>
      <div className={style.copyRed}>
        <img 
          id="image-red" 
          src={image} 
          style={{
            filter: 'url(#apply-threed-red)',
          }} />
      </div>

      <div className={style.copyCyan}>
        <img 
          id="image-cyan" 
          src={image} 
          style={{
            filter: 'url(#apply-threed-cyan)'
          }} />
      </div>
      <svg height="0">
        <defs>
          <filter id="apply-threed-red" x="0" y="0">
            <feColorMatrix 
            colorInterpolationFilters="sRGB"
              type="matrix" 
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0" 
            />
            </filter>

            <filter id="apply-threed-cyan" x="0" y="0">
            <feColorMatrix 
            colorInterpolationFilters="sRGB"
              type="matrix" 
              values="0 0 0 0 0
                      1 0 0 0 0
                      1 0 0 0 0
                      0 0 0 1 0" 
            />
            </filter>
        </defs>
      </svg> 
    </React.Fragment>
  )
}
