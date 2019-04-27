import * as React from 'react'

export const SepiaFilter = () => {
  
  return (
    <React.Fragment>
      <svg height="0">
        <defs>
          <filter id="apply-sepia" x="0" y="0">
            <feColorMatrix 
              type="matrix" 
              values=".343 .669 .119 0 
                        0 .249 .626 .130 
                        0 0 .172 .334 
                        .111 0 0 .000 
                        .000 .000 1 0" 
            />
          </filter>
        </defs>
      </svg> 
    </React.Fragment>
  )
}
