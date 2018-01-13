import React from 'react'
import './styles.scss'
import image from './loading_animation_circle.svg'

const LoadingAnimation = () => {
  return (
    <div className='loading-animation'>
      <div className='loader-icon'>
        <img src={image} />
      </div>
    </div>
  )
}

export default LoadingAnimation
