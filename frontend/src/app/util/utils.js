export const formatCurrency = (value, options) => {
    const { code, symbol } = options;
    return `$${symbol}${value}`;
  };
  