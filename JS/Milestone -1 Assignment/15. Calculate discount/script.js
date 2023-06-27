function discount(products) {
  let discountPercentage = [];
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    discountPercentage.push(
      Math.floor(
        ((product.ogprice - product.discountedPrice) / product.ogprice
      ) * 100
    ) + "%"
    );
  }
  return discountPercentage;
}

let products = [
  { ogprice: 100, discountedPrice: 50 },
  { ogprice: 800, discountedPrice: 300 },
  { ogprice: 1000, discountedPrice: 900 },
];
console.log(discount(products));