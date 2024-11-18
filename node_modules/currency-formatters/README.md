# Currency Formatter

[![NPM Version](https://img.shields.io/npm/v/currency-formatters.svg)](https://www.npmjs.com/package/currency-formatter)
[![License](https://img.shields.io/npm/l/currency-formatters.svg)](https://github.com/yourusername/currency-formatter/blob/main/LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Available-blue)](https://travis-ci.org/yourusername/currency-formatters)

`currency-formatter` is a TypeScript and React utility package for formatting numbers as currencies using various numbering systems (Indian, US, European) with appropriate currency symbols.

![example](https://github.com/IAmShivay/Currency-Formatter/assets/109723638/745f4339-3a1d-4d14-b201-9f77a97229ed)

## Features

- 📈 **Supports multiple numbering systems**: Indian, US, and European.
- 💱 **Includes currency symbols** for easy integration.
- ⚛️ **Designed for use with React and TypeScript**.

## Installation

To install the package, run:

```sh
npm install currency-formatters
```
## Usage

Here's how to use `currency-formatters` in a React application:

```sh
// src/App.tsx

import React from 'react';
import { useCurrencyFormatter } from 'currency-formatter'; // Import the hook from the package

const App: React.FC = () => {
  const formatINR = useCurrencyFormatter({
    numberingSystem: 'indian',
    currency: '₹'
  });

  const formatUSD = useCurrencyFormatter({
    numberingSystem: 'us',
    currency: '$'
  });

  const formatEUR = useCurrencyFormatter({
    numberingSystem: 'european',
    currency: '€'
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#4CAF50' }}>Currency Formatter Example</h1>
      <p><strong>INR:</strong> {formatINR(100000)}</p>
      <p><strong>USD:</strong> {formatUSD(100000)}</p>
      <p><strong>EUR:</strong> {formatEUR(100000)}</p>
    </div>
  );
};

export default App;

```
# Function

`useCurrencyFormatter`

A custom React hook that formats a number as a currency string based on the specified numbering system and currency symbol.

Parameters
`numberingSystem: string` - The numbering system to use. Possible values are `'indian'`, `'us'`, and `'european'`.
`currency: string` - The currency symbol to use.

Example

```sh
const formatINR = useCurrencyFormatter({
  numberingSystem: 'indian',
  currency: '₹'
});

console.log(formatINR(100000)); // Outputs: ₹1L

```
# Contributions

Contributions are welcome! Please open an issue or submit a pull request for any changes.

# License

This project is licensed under the MIT License - see the LICENSE file for details.

