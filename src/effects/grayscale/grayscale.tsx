import * as React from 'react'
import styles from './grayscale.scss'

export type Props = { 
  image: any 
}

export default class Grayscale extends React.Component<Props> {
  
  public render() {

    const { image } = this.props

    return (
      <React.Fragment>
        <div className={styles.grayscaleEffect}>
          <span>Imagem:</span>
          <div className={styles.apply}>
            <img src={image} alt="Grayscale image" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
