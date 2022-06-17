import React, { FC } from 'react'

import './index.scss'

interface IProps{
    message?: string
}

const ErrorText:FC<IProps> = ({message}) => {
  return (
    <span className='error-msg'>{message}</span>
  )
}

export default ErrorText