//solve task 1
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber <= 0.7) {
    console.log(randomNumber);
} else {
    alert('Random number is greater than 0.7');
}

//solve task 2
let arrayList = [2, 3, 5, 7, 11, 13, 17];

for (const el of arrayList) {
    console.log(el);
}

for (let i = 0; i < arrayList.length; i++) {
    console.log(arrayList[i]);
}

//solve task 3
for (let i = arrayList.length - 1; i >= 0; i--) {
    console.log(arrayList[i]);
}

//solve task 4
const randNm = Math.random();
if (randNm > 0.7 && randomNumber > 0.7) {
    alert('Both are greater than 0.7');
} else if (randNm <= 0.2 || randomNumber <= 0.2) {
    alert('At least on of the random numbers is not greater than 0.2');
}