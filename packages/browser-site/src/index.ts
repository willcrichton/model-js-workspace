import {add} from "browser-lib";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Site loaded!");
    console.log("1 + 2 =", add(1, 2));
})