// MAP
const {  queroBolsa } = require("../data");

//salva 
localStorage.setItem('list', JSON.stringify(queroBolsa))

//busca 
JSON.parse(localStorage.getItem('list'))


