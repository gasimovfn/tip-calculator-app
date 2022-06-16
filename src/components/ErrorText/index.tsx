import React, { FC } from 'react'

interface IProps{
    message?: string
}

const ErrorText:FC<IProps> = ({message}) => {
  return (
    <span>{message}</span>
  )
}

export default ErrorText