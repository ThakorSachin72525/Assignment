const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+(\.[a-zA-Z]+)+$/;

const strTocheck = "www.google.com"
const strTocheck1 = "http://www.google.com"
const strTocheck3 = "https://www.google.com"

let result = regex.test(strTocheck && strTocheck1 && strTocheck3)

console.log(result);