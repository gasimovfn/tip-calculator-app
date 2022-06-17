import React, { FC } from "react";
import { EButtonColor, EButtonTextColor } from "../../enum";

import "./index.scss";

interface IProps {
  text?: string;
  onclick?: any;
  textColor?: EButtonTextColor;
  buttonColor?: EButtonColor;
  disabled?: boolean;
  value?: string | number;
}

const Button: FC<IProps> = ({ text, onclick, textColor, buttonColor, value, disabled }) => {
  return <button disabled={disabled} className={`button ${textColor} ${buttonColor} ${disabled? 'disabled' : ''}`} onClick={onclick}  value={value}>{text}</button>;
};

export default Button;
