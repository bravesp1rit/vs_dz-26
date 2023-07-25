'use sctict';

// Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
function getFactorial (num) {
    return num === 1 ? num : num * getFactorial(num-1);
}
console.log(getFactorial(6));


// Реализовать рекурсивную функцию которая находит возводит число в степень.
function getDegree (num, deg) {
    if (deg === 0){
        return num;
    } else{
        return num * getDegree(num, deg-1);   
    }
}
console.log(getDegree(4, 3));

// Напишите рекурсивную функцию для вычисления суммы заданных положительных целых чисел a и b без прямого использования оператора +
function getSum (a, b) {
    if (b === 0){
        return a;
    } else if (b > 0){
        return getSum (++a, --b)
    } else {
        return getSum (--a, b++)
    }
}
console.log(getSum(5, 18));