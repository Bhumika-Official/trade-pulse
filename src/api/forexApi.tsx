export const fetchForexRate = async (base: string, symbol: string) => {
  const res = await fetch(`https://api.frankfurter.app/latest?from=${base}&to=${symbol}`);
  const data = await res.json();
  return data.rates[symbol];
};
