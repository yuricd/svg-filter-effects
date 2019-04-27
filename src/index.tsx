import * as React from 'react';
import { BlurFilter } from './effects/blur/blur'
import { BlurInterface } from './effects/blur/types';
import { SepiaFilter } from './effects/sepia/sepia';

interface Props {
  image: string,
  blur?: BlurInterface,
  sepia?: boolean,
}

interface State {
  imageEffect: string,
}

export default class Effect extends React.Component<Props, State> {

  public render() {
    const { image, blur, sepia } = this.props

    return (
      <>
         <div>
          <img 
            src={image} 
            alt="Blurred image" 
            style={{
              filter: `
                ${blur && 'url(#apply-blur)'} 
                ${sepia && 'url(#apply-sepia)'}
              `
            }}
            /> 
        </div>
      
        {blur && (
          <BlurFilter deviation={blur.deviation} />
        )}

        {sepia && (
          <SepiaFilter />
        )}
      </>
    )
  }
}