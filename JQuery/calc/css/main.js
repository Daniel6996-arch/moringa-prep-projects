var calculateIncreasedBalance = function(balance, interestRate){
    var result = balance * (1 + (interestRate / 100));
    console.log(result)
}; 
calculateIncreasedBalance(2000, 10)

var calculateFinalBalance = function(balance, interestRate, numberOfYears){
    // We want to compute the interest rate number_of_years times, so we set up a loop
    // that runs that many times.

    let countYears = 0;

    while(countYears < numberOfYears){
        // Each time we go through the loop, our balance should grow
        balance = calculateIncreasedBalance(balance, interestRate);

        // Pretend a year has passed
        countYears = countYears + 1;
    }
    // We should be done!
   // return balance;
    console.log()
};
//calculateFinalBalance(2000, 10, 2)

