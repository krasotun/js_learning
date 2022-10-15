"use strict";
exports.__esModule = true;
var text = document.getElementById("text");
var input = document.getElementById("input");
if (!text || !input) {
    throw new Error("нет полей");
}
var data = {
    title: ""
};
input.addEventListener("keyup", function () {
    text.textContent = input.value;
});
Object.defineProperty(data, "title", {});
