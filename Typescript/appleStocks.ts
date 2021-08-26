/* 
https://github.com/AvraamMavridis/Algorithms-Data-Structures-in-Typescript/blob/master/exercises/exercise2.md
Writing programming interview questions hasn't made me rich. Maybe trading Apple stocks will. Suppose we could access yesterday's stock prices as a list, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time. The values are the price in dollars of Apple stock at that time. So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

getMaxProfit(stock_prices_yesterday)
// returns 6 (buying for $5 and selling for $11) */
const stock_prices_yesterday = [10, 7, 5, 8, 11, 9];

function getMaxProfit(prices: number[]): number {
  if (prices.length < 2) {
    throw new Error("Prices must be at least 2");
  }
  let maxProfit = prices[1] - prices[0];
  prices.forEach((price, i) => {
    [...prices.slice(0, i)].forEach((pointer) => {
      if (price - pointer > maxProfit) {
        maxProfit = price - pointer;
      }
    });
  });

  return maxProfit;
}
