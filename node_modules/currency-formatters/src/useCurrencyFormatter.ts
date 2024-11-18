import { useMemo } from "react";
import { formatCurrency, CurrencyFormatterOptions } from "./formatter";

export const useCurrencyFormatter = (options: CurrencyFormatterOptions) => {
  return useMemo(() => {
    return (amount: number) => formatCurrency(amount, options);
  }, [options]);
};
