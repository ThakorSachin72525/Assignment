class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  get password() {
    return this._password.replace(/./g, "*");
  }

  set password(newPassword) {
    if (
      newPassword.length >= 8 &&
      /[A-Z]/.test(newPassword) &&
      /\d/.test(newPassword)
    ) {
      this._password = newPassword;
    } else {
      console.error(
        "Invalid password. "
      )
      console.log("Password should be at least 8 characters long and contain at least one uppercase letter and one number.");
    }
  }
}

const user = new User("Sachin", "MyPassword123");
console.log(user.password); // Output: **************

user.password = "123456"; // Invalid password. Password should be at least 8 characters long and contain at least one uppercase letter and one number.

user.password = "BetterPassword2023";
console.log(user.password); // Output: *****************
