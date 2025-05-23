"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const checkNever_1 = require("./checkNever");
const CrazyComponent = ({ variant, children, }) => {
    switch (variant) {
        case "label":
            return react_1.default.createElement("div", null, children);
        case "input":
            return react_1.default.createElement("input", null, children);
        default:
            (0, checkNever_1.checkNever)(variant);
    }
};
const ExtendedCrazyComponent = ({ variant, children, }) => {
    switch (variant) {
        case "label":
            return react_1.default.createElement("div", null, children);
        case "input":
            return react_1.default.createElement("input", null, children);
        default:
            // @ts-expect-error
            (0, checkNever_1.checkNever)(variant);
    }
};
