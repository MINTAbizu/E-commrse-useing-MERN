type NumberingSystem = "indian" | "us" | "european";

export interface CurrencyFormatterOptions {
  numberingSystem: NumberingSystem;
  currency: string;
}

const formatNumber = (num: number, digits: number): string => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let item = lookup
    .slice()
    .reverse()
    .find((item) => num >= item.value);
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};

const formatNumberIndian = (number: number): string => {
  if (isNaN(number)) {
    return "₹0.00";
  }

  const isNegative = number < 0;
  const absNumber = Math.abs(number);

  if (absNumber === 0) {
    return "₹0.00";
  }
  if (absNumber < 100000) {
    const formattedNumber = absNumber / 1000;
    return `${isNegative ? "-" : ""}${formattedNumber}k`;
  }
  if (absNumber < 10000000) {
    const formattedNumber = absNumber / 100000;
    return `${isNegative ? "-" : ""}${formattedNumber}L`;
  }
  {
    const formattedNumber = absNumber / 10000000;
    return `${isNegative ? "-" : ""}${formattedNumber}Cr`;
  }
};

export const formatCurrency = (
  amount: number,
  options: CurrencyFormatterOptions
): string => {
  const { numberingSystem, currency } = options;
  const formattedNumber =
    numberingSystem === "indian"
      ? formatNumberIndian(amount)
      : formatNumber(amount, 1);
  return `${currency} ${formattedNumber}`;
};
