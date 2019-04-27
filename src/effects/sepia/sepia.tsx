import * as React from 'react'
import styles from './sepia.scss'

export type Props = { 
  image: any 
}

export default class Sepia extends React.Component<Props> {
  
  public render() {

    const { image } = this.props

    return (
      <React.Fragment>
        <div className={styles.sepiaEffect}>
          <span>Imagem:</span>
          <div className={styles.apply}>
            <img src={image} alt="Sepia image" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
