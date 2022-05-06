//first function
const oddOrEven = (number) => {
        if (number % 2 == 0) {
            return number * 2;
        } else {
            return number - 2;
        }
    }
    // console.log(oddOrEven(5))

//second function           
let numArr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17, 19, 20, ];
const isPrime = numArr.filter((number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) //
            return false;
    }
    return number > 1;;
});
// console.log(isPrime);

// third function
const arr = [1, 2, "cat", 3, "true", 6, "dog", 7, 9, "fish", 10];
const arrStrings = [];
arr.forEach(function(item) {
    if (typeof item === "string") {
        return arrStrings.push(item);
    }
});
// console.log(arrStrings)

// fourth function
function sumStr(str) {
    const strList = str.split("");
    let sum = 0;
    for (let i = 0; i < strList.length; i++) {
        strList[i] = Number(strList[i]);
        if (strList[i] % 2 == 1) {
            sum = sum + strList[i];
        }
    }
    return sum;
}
// console.log(sumStr("12343"))

// fifth function
let priceFruits = "Lime";
switch (priceFruits) {
    case "Strawberrys":
        console.log("These costs $2.20");
        break;
    case "Papayas":
        console.log("These costs $1.50");
        break;
    case "Apples":
        console.log("These costs $1.00");
        break;
    case "Oranges":
    case "Grapefruits":
        console.log("These costs $1.99");
        break;
    case "Bananas":
        console.log("These costs $1.59");
        break;
    default:
        console.log("This fruit doesn't exist");
}