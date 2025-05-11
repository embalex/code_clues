import React from "react";
import { checkNever } from "./checkNever";

type CrazyComponentProps = {
  variant: "label" | "input";
  children: React.ReactNode;
};
const CrazyComponent: React.FC<CrazyComponentProps> = ({
  variant,
  children,
}) => {
  switch (variant) {
    case "label":
      return <div>{children}</div>;
    case "input":
      return <input>{children}</input>;
    default:
      checkNever(variant);
  }
};

type ExtendedCrazyComponentProps = {
  variant: "label" | "input" | "select";
  children: React.ReactNode;
};
const ExtendedCrazyComponent: React.FC<ExtendedCrazyComponentProps> = ({
  variant,
  children,
}) => {
  switch (variant) {
    case "label":
      return <div>{children}</div>;
    case "input":
      return <input>{children}</input>;
    default:
      // @ts-expect-error
      checkNever(variant);
  }
};
