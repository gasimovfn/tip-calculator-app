import React, { FC } from 'react'
import { EIconType } from '../../enum';

interface IProps{
    path: EIconType;
    classname?: string;
}

const Icon:FC<IProps> = ({path, classname}) => {
  return (
    <i className={`far fa-${path} ${classname}`}></i>
  )
}

export default Icon