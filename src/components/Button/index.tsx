import React, { FC } from "react";
import { EButtonColor, EButtonTextColor } from "../../enum";

import "./index.scss";

interface IProps {
  text?: string;
  onclick?: any;
  textColor?: EButtonTextColor;
  buttonColor?: EButtonColor
  value?: string | number
}

const Button: FC<IProps> = ({ text, onclick, textColor, buttonColor, value }) => {
  return <button className={`button ${textColor} ${buttonColor}`} onClick={onclick}  value={value}>{text}</button>;
};

export default Button;
