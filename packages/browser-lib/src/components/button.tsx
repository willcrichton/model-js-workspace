import React from "react";
import classes from "./button.module.css";
import icon from "./icon.jpg?file";

/** A very special button */
export let Button: React.FC<React.PropsWithChildren> = ({ children }) => (
  <button className={classes["special-button"]}>
    {children} <img src={icon} />
  </button>
);
