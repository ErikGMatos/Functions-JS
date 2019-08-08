// FILTER
const { childrenAge, mailList, queroBolsa } = require("../data");

// 1. Crianças entre 2 - 11 anos

const childrenFiltered = childrenAge.filter(
  element => element >= 2 && element <= 11
);

// 2. Emails rocketseat.com.br
const filteredMails = mailList.filter(mail => mail.includes("@rocketseat.com"));

const listCity = queroBolsa.filter(city => {

});

console.table(listCity);
