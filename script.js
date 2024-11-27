"use strict";

// Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames
    .map(name => {
        return name .split(" ")  .map(part => part[0] + ".")  .join(""); 
    })
    .sort(); 

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

//2. Задача на фільтрування масиву

//через умовну конструкцію

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let vowels = ['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'];
let filteredNames = [];

for (let name of userNames) {
    if (vowels.includes(name[0])) {
        filteredNames.push(name);
    }
}

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']


//через вбудований метод масивів

filteredNames = userNames.filter(name => vowels.includes(name[0]));

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']


//Задача на розворот числа

const currentMaxValue = 4589;
let reverseMaxValue = Number(currentMaxValue.toString().split("").reverse().join(""));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'



//4. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності

const resultsArray = [1, 2, [3, [4]]];

function flattenAndMultiply(array) {
    return array.reduce((product, value) => {
        if (Array.isArray(value)) {
           
            return product * flattenAndMultiply(value);
        }
        return product * value; 
    }, 1); 
}

let productOfArray = flattenAndMultiply(resultsArray);


console.log(productOfArray); // 24
