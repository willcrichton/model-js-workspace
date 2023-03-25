import { Button } from "browser-lib/components/button";
import React from "react";
import ReactDOM from "react-dom/client";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Site loaded!");
  let root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Button>Hello world</Button>);
});
