/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

console.log(solution(10));

function solution(number) {
    if (number < 0) return 0;
    const isMultipleOf3Or5 = (num) => num % 3 === 0 || num % 5 === 0;
    let sum = 0;
    for (let i = 1; i < number; i++) if (isMultipleOf3Or5(i)) sum += i;
    return sum;
}

/*
<-- Before refactoring -->

function solution(number) {
    if (number < 0) return 0;
    let sum = 0;
    const countsOfThree = Math.floor(number/3);
    const countsOfFive = Math.floor(number/5);
    const numbersList = [];

    for (let i = 1; i <= countsOfThree; i++) {
        if (3*i == number) break;
        numbersList.push(3*i);
    }
    for (let j = 1; j <= countsOfFive; j++) {
        if (5*j == number) break;
        numbersList.push(5*j);
    }
    
    let sortedList = numbersList.sort();
    
    for (let k = 0; k < sortedList.length; k++) {
        sum += sortedList[k];
    }
    return sum;
}

<-- refactor versjon 1 -->

function solution(number) {
    if (number < 0) return 0;
    let sum = 0;
    let three = 3;
    let five = 5;
    const countsOfNum = (divider) => Math.floor(number / divider);
    const countsOfThree = countsOfNum(three);
    const countsOfFive = countsOfNum(five);
    const numbersList = [];
    const updateNumbersList = (num, counter) => {
        for (let i = 1; i <= counter; i++) {
            if (num * i !== number) {
                numbersList.push(num * i);
            }
        }
    };
    updateNumbersList(three, countsOfThree);
    updateNumbersList(five, countsOfFive);
    let sortedList = numbersList.sort();
    for (let j = 0; j < sortedList.length; j++) {
        sum += sortedList[j];
    }
    return sum;
}

<-- refactor versjon 2 -->

function solution(number) {
    if (number < 0) return 0;
    const isMultipleOf3Or5 = (num) => num % 3 === 0 || num % 5 === 0;
    let sum = 0;
    for (let i = 1; i < number; i++) if (isMultipleOf3Or5(i)) sum += i;
    return sum;
}
*/