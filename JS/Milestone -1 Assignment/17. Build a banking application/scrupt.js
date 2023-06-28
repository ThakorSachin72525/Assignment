function deposit(user, amount){
    user.balance += amount;
}

function withdraw(user, amount){
    if(user.balance >= amount){
        user.balance -= amount;
    } else{
        console.log("Insufficient funds");
    }
}

let user = {name : "Saching", balance:100};

deposit(user, 10);
console.log(user);

withdraw(user, 500);
console.log(user);