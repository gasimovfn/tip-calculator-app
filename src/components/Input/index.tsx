import React, { FC } from "react";
import { EIconType } from "../../enum";
import Icon from "../Icon";

import './index.scss'

interface IProps {
  onchange: any;
  type?: string;
  icon?: EIconType;
  defaultValue?: string | number;
  placeHolder? : string;
}

const Input: FC<IProps> = ({ onchange, type = "text", icon, defaultValue, placeHolder }) => {
  return (
    <div  className="input-wrap">
      {icon && <Icon classname="__icon" path={icon} />}
      <input type={type} onChange={onchange} className="__input"  value={defaultValue} placeholder={placeHolder} />
    </div>
  );
};

export default Input;
