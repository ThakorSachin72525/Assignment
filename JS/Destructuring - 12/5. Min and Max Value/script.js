function minmax(a){
    return {
        max: Math.max(...a),
        min: Math.min(...a)
    }
}
let arr = [9,8,7,3,2,1,4,5,6,10,11]
console.log(minmax(arr));