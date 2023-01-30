import React from "react";
import classes from "./button.module.css";

/** A very special button */
export let Button: React.FC<React.PropsWithChildren> = ({ children }) => (
  <button className={classes["special-button"]}>{children}</button>
);
