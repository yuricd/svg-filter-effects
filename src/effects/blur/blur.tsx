import * as React from 'react'
import styles from './blur.scss'

export interface Props { 
  image: string,
  hardness: string, 
}

export default class Blur extends React.Component<Props> {
  
  public render() {

    const { image, hardness } = this.props

    return (
      <React.Fragment>
        <div className={styles.blurEffect}>
          <span>Imagem:</span>
          <div className={styles.apply}>
            <img 
              src={image} 
              alt={`Blur image`} className={(hardness === 'medium') ? styles.medium : (hardness === 'hard') ? styles.hard : styles.soft} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
