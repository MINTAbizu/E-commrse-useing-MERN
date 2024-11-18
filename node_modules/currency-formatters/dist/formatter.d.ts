type NumberingSystem = "indian" | "us" | "european";
export interface CurrencyFormatterOptions {
    numberingSystem: NumberingSystem;
    currency: string;
}
export declare const formatCurrency: (amount: number, options: CurrencyFormatterOptions) => string;
export {};
