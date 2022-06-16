import React, { FC } from "react";
import { EIconType } from "../../enum";
import Icon from "../Icon";

interface IProps {
  onchange: any;
  type?: string;
  icon?: EIconType;
  defaultValue?: string | number;
}

const Input: FC<IProps> = ({ onchange, type = "text", icon, defaultValue }) => {
  return (
    <div  className="input-wrap">
      {icon && <Icon classname="__icon" path={icon} />}
      <input type={type} onChange={onchange} className="__input"  defaultValue={defaultValue} />
    </div>
  );
};

export default Input;
