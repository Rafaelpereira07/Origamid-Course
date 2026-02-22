"use strict";
function typeGuard(value) {
    if (typeof value === "string")
        return value.toLowerCase();
    if (typeof value === "number")
        return value.toFixed(2);
    if (value instanceof HTMLElement)
        return value.innerText;
}
console.log(typeGuard("Origamid"));
console.log(typeGuard(document.body));
console.log(typeGuard(200));
