let dlt = document.getElementById("dlt");
let add = document.getElementById("add");
let ul = document.getElementById("ul");
const items = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile Responsive Webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
  "Making Projects using HTML, CSS and JavaScript",
  "Understanding Fundamental of Computer Science",
  "Getting Started with Database",
  "Understanding the Database",
  "Starting with NodeJS and Express",
  "Understanding React and its Fundamentals",
  "Understanding Hooks and Routers",
  "Starting and Completing Full Fledge Projects",
];
let count = 0;
add.addEventListener("click", () => {
    if (count < items.length) {
        let list = document.createElement("li")
        list.innerHTML = items[count]
        ul.appendChild(list);
        count++;
    } else {
        alert("All items have been added")
    }
})

dlt.addEventListener("click", () => {
    ul.removeChild(ul.lastChild);
    count--;
})