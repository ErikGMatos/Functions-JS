// MAP
const {  quero } = require("../data");

//salva 
localStorage.setItem('list', JSON.stringify(quero))

//busca 
JSON.parse(localStorage.getItem('list'))


