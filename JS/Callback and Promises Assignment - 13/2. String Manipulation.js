function manipulateString(str, callback){
    const manipulateString = str.toUpperCase();

    callback(manipulateString);
}

function logString(str){
    console.log("The manipulated string is: ", str);
}

const myarr = "hello world!"

manipulateString(myarr, logString);