let list = {
    "iphone 14 Pro Max": 1550,
    "iphone 13 Mini": 1100,
    "Samsung Flip 3 Z": 550,
    "Nokia 3310": 46
}


const converPrice = Object.entries(list).map(([item, price]) => {
    const priceInRupees = price * 80 ;
    return {item, priceInRupees};
});

console.log(converPrice);