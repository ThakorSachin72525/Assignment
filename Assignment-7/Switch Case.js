// Switch Case
// Q-1. Write a program that takes in a day Of the week (e.g., Monday, Tuesday, etc.) and outputs the number Of
// days until the weekend.
// Ans.

const day = "Saturday";
let daysUntilWeekend;

switch (day) {
    case "Monday":
        console.log("There are 5 days until the weekend.");
        break;
    case "Tuesday":
        console.log("There are 4 days until the weekend.");
        break;
    case "Wednesday":
        console.log("There are 3 days until the weekend.");
        break ;
    case "Thursday":
        console.log("There are 2 days until the weekend.");
        break ;
    case "Friday":
        console.log("There are 1 days until the weekend.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("There are 0 days until the weekend.");
        break;
    default:
        daysUntilWeekend = "Invalid day";
        break ; 
}

// Q-2 Write a that takes in a 1 and 12 and outputs the month of the
// Ans 
const monthNum = 1;

switch (monthNum) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("Aug");
        break;
    case 9:
        console.log("Sept");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
}