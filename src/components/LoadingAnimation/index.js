import React from 'react'
import PropType from 'prop-types'
import './styles.scss'
import image from './loading_animation_circle.svg'
const LoadingAnimation = ({message, iconSize}) => {
  return (
    <div className='loading-animation text-center'>
      <div className={`loader-icon icon-x${iconSize || 1}`}>
        <img src={image} />
      </div>
    </div>
  )
}
LoadingAnimation.propTypes = {
  iconSize: PropType.number
}
export default LoadingAnimation
