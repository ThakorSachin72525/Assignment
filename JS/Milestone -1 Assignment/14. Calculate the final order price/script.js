function totalCost(cartItems) {
    let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    item = cartItems[i];
    total += item.unitPrice * item.quantity;
  }
  return total;
}

let cartItems = [
  { unitPrice: 200, quantity: 5 },
  { unitPrice: 800, quantity: 3 },
  { unitPrice: 400, quantity: 9 },
];

finalCost = totalCost(cartItems);
console.log(finalCost);
