"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCurrencyFormatter = void 0;
const react_1 = require("react");
const formatter_1 = require("./formatter");
const useCurrencyFormatter = (options) => {
    return (0, react_1.useMemo)(() => {
        return (amount) => (0, formatter_1.formatCurrency)(amount, options);
    }, [options]);
};
exports.useCurrencyFormatter = useCurrencyFormatter;
