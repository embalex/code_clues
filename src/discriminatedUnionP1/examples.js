"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionResult_1 = require("./actionResult");
const divWhichThrownError = (a, b) => a / b;
const divWhichNOTThrownError = (a, b) => {
    if (b === 0) {
        return (0, actionResult_1.makeErrorActionResult)(new Error("Can't divide by 0"));
    }
    return (0, actionResult_1.makeSuccessfullActionResult)(a / b);
};
const a = divWhichThrownError(3, 0);
console.log(a);
