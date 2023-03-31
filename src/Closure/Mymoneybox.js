// function moneyBox (coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox () {
  let saveCoins = 0;
  function countCoins(coins, name) {
    saveCoins += coins;
    console.log(`${name}'s MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox (5, "Julián");
myMoneyBox (5, "Julián");
myMoneyBox (15, "Julián");

const moneyBoxAna = moneyBox();
moneyBoxAna (10, "Ana");
moneyBoxAna (20, "Ana");
moneyBoxAna (5, "Ana");

