//solve task 1
const numbers = [5.94, 12, 1, 4, 12, 2, 10, 3, 4, 5, 6, 19];
const filterNum = numbers.filter(num => num > 5);
console.log(filterNum);


const numberData = numbers.map((num, idx, numbers) => ({ Element: num, 'Greater than 5': num > 5 }));
console.log(numberData);

const product = numbers.reduce((preVal, curVal) => preVal * curVal, 1);
console.log(product);

//solve task 2
const findMax = (...nums) => {
    let curMax = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
    }
    return curMax;
}
console.log(findMax(...numbers));

//solve task 3
const findMinMax = (...nums) => {
    let curMin = nums[0];
    let curMax = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
        if (num < curMin) {
            curMin = num
        }
    }
    return [curMin, curMax];
}
const [minVal, maxVal] = findMinMax(...numbers);
console.log(minVal, maxVal);

//solve task 4
const setInput = new Set();
setInput.add(5);
setInput.add(2);
setInput.add(4);
setInput.add(3);
setInput.add(5);
setInput.add(2);
console.log(setInput);