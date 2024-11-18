"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("./formatter");
test('formats currency in Indian numbering system', () => {
    const formatted = (0, formatter_1.formatCurrency)(1000, {
        numberingSystem: 'indian',
        currency: '₹'
    });
    expect(formatted).toBe('₹ 1k');
});
test('formats currency in US numbering system', () => {
    const formatted = (0, formatter_1.formatCurrency)(1000000000, {
        numberingSystem: 'us',
        currency: '$'
    });
    expect(formatted).toBe('$ 1B');
});
test('formats currency in European numbering system', () => {
    const formatted = (0, formatter_1.formatCurrency)(100000000, {
        numberingSystem: 'european',
        currency: '€'
    });
    expect(formatted).toBe('€ 100M');
});
