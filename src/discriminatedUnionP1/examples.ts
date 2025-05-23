import { ActionResult, makeErrorActionResult, makeSuccessfullActionResult } from "./actionResult";

const divWhichThrownError = (a: number, b: number): number => a / b;

const divWhichNOTThrownError = (a: number, b: number): ActionResult<number> => {
  if (b === 0) {
    return makeErrorActionResult(new Error("Can't divide by 0"))
  }
  return makeSuccessfullActionResult(a / b);
};

const a = divWhichThrownError(3,0);
console.log(a);