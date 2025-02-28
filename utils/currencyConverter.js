export const convertCurrency = (amount) => {
  const rate = parseFloat(localStorage.getItem("user_currency_rate")) || 1;
  return Math.round(amount * rate);
};
