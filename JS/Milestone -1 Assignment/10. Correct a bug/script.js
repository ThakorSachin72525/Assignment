let cart = [1,2,3,4,5,6,7,8,9,10]
let upDated_Cart = []
for (let i = 0; i < cart.length; i++) {
    let item = cart[i]*2
    upDated_Cart.push(item)
}
console.log(upDated_Cart)