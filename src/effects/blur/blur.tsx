import * as React from 'react'

export interface Props { 
  deviation: number, 
}

export const BlurFilter = (props: Props) => {
  
  const { deviation } = props

  return (
    <React.Fragment>
      <svg height="0">
        <defs>
          <filter id="apply-blur" x="0" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation={deviation} />
          </filter>
        </defs>
      </svg> 
    </React.Fragment>
  )
}
