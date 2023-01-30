import { add } from "browser-lib";
import { SIBLING } from "browser-lib/sibling";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded!");
    console.assert(add(1, 2) == 3);
    console.assert(SIBLING == "SIBLING");
});
