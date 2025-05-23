"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeErrorActionResult = exports.makeSuccessfullActionResult = exports.isErrorAction = exports.isSuccessfullAction = void 0;
const isSuccessfullAction = (action) => action.kind === 'successfull';
exports.isSuccessfullAction = isSuccessfullAction;
const isErrorAction = (action) => action.kind === 'error';
exports.isErrorAction = isErrorAction;
const makeSuccessfullActionResult = (value) => ({
    kind: 'successfull',
    value,
});
exports.makeSuccessfullActionResult = makeSuccessfullActionResult;
const makeErrorActionResult = (error) => ({
    kind: 'error',
    error,
});
exports.makeErrorActionResult = makeErrorActionResult;
