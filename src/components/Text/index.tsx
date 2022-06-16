import React, { FC } from 'react'
import { ETextColor, ETextSize, ETextWeight } from '../../enum';

import './index.scss';

interface IProps{
    text?: string;
    fontSize?: ETextSize;
    color?: ETextColor;
    fontWeight: ETextWeight;
}


const Text:FC<IProps> = ({ text, fontSize, color, fontWeight }) => {
  return (
    <p className={`text ${fontSize} ${color} ${fontWeight}`}>{text}</p>
  )
}

export default Text