var maxProfit = function(prices) {
    //Profit determines the maxProfit
    let profit = 0;
    //Traverse through the prices, which determines the prices from each given day
        for(let i = 0; i < prices.length - 1; i++) { 
    //Difference of the current price vs the next day price
            const difference = prices[i + 1] - prices[i];
    //If the difference of price is greater than 0, add to maxProfit.
            if (difference > 0) profit += difference;
        }
        return profit;
    };