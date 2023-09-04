// Coding challenge #1

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

// const bmiMark = weightMark / heightMark ** 2;
// const bmiJohn = weightJohn / (heightJohn * heightJohn);
// console.log(bmiMark, bmiJohn)



// // Coding challenge #2

// if (bmiMark > bmiJohn){
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
// } else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
// }

// Coding challenge #3

// const sumDolphins = (96 + 108 + 89) / 3;
// const sumKoalas = (96 + 108 + 89) / 3;

// console.log(sumDolphins, sumKoalas);

// if (sumDolphins > sumKoalas) {
//     console.log('Dolphins win the trophy!');
// } else if (sumKoalas > sumDolphins) {
//     console.log('Koalas win the trophy!');
// } else if (sumDolphins===sumKoalas) {
//     console.log("It's a draw!");
// }

// BONUS 1
// const sumDolphins = (97 + 112 + 80) / 3;
// const sumKoalas = (109 + 95 + 50) / 3;

// console.log(sumDolphins, sumKoalas);

// if (sumDolphins > sumKoalas && sumDolphins >= 100) {
//     console.log('Dolphins win the trophy!');
// } else if (sumKoalas > sumDolphins && sumKoalas >= 100) {
//     console.log('Koalas win the trophy!');
// } else if (sumDolphins===sumKoalas && sumDolphins >= 100 && sumKoalas >= 100) {
//     console.log("It's a draw!");
// } else {
//     console.log('No one wins!')
// }

// Practice of switch statements

// const day = 'Wednesday' || 'Thursday';

// if (day === 'Monday') {
//     console.log('Plan course structure', 'Go to coding meetup');
// } else if (day === 'Tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'Wednesday' || day === 'Thursday') {
//     console.log('Write code examples');
// } else if (day === 'Friday') {
//     console.log('Record videos');
// } else if (day === 'Saturday' || day === 'Sunday') {
//     console.log('Enjoy the weekend!');
// } else {
//     console.log('Not a valid day!');
// }

// Coding challenge #4
  const bill = 430;
  const tip = bill >= 50 && bill <= 300 ? bill * (15/100) : bill * (20/100);
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}.`);

