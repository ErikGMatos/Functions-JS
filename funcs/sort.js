// SORT
const { shopCart, passengers, quero } = require("../data");
// 1. Organize o carrinho do maior número de produtos para o menor
const orderByTotalProducts = shopCart.sort((a, b) => b.quantity - a.quantity);

// 2. Organize os passageiros por nome.
const orderByPassengerName = passengers.sort((pa, pb) => {
  if (pa.name.toLocaleLowerCase() < pb.name.toLocaleLowerCase()) return -1;
  if (pa.name.toLocaleLowerCase() > pb.name.toLocaleLowerCase()) return 1;
  return 0;
});

const orderByCourseName = quero.sort((pa, pb) => {
    if (pa.university.name.toLocaleLowerCase() < pb.university.name.toLocaleLowerCase()) return -1;
    if (pa.university.name.toLocaleLowerCase() > pb.university.name.toLocaleLowerCase()) return 1;
    return 0;
});

console.table(orderByCourseName);
