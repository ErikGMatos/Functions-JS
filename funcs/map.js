// MAP
const { passengers, quero } = require("../data");

// 1. Quantos anos eles tem?
const newPassergers = passengers.map(
  passenger => `${passenger.name} tem ${2019 - passenger.birthYear} anos`
);

// 2. Encontre o nome palíndromo
const founds = passengers.map(passenger => {
  const reserveName = [].map
    .call(passenger.name, letter => letter)
    .reverse()
    .join("");

  if (reserveName.toLowerCase() === passenger.name.toLowerCase())
    return `This is palindromo: ${passenger.name}`;
});

const list=[];
const foundsCity = quero.map(city => {
  if(list.includes(city.campus.city)) return
  list.push(city.campus.city);
});
console.table(list);
