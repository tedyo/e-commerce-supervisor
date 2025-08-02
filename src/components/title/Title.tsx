import React, { type ReactNode } from "react";
type Props = {
  type?:
    | "primary"
    | "secondary"
    | "primary-span"
    | "secondary-span"
    | "primary-secondary"
    | "secondary-primary"
    | "primary-red";
  children: ReactNode;
};
import "./title.scss";
const Title = ({ children, type }: Props) => {
  return (
    <h2 className={`custom-title ${type}`} data-cy="component-header">
      {children}
    </h2>
  );
};

export default Title;
