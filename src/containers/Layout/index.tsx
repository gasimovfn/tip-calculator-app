import React, { FC, ReactElement, ReactNode } from "react";

interface IProps {
  children?: ReactNode | ReactElement;
}

const Layout: FC<IProps> = ({ children }) => {
  return <div className={`container`}>{children}</div>;
};

export default Layout;
