// let h1=document.querySelector("h1");  // Mostly and widely this is used
// let h1=document.querySelectorAll("h1");
let h1=document.getElementsByTagName("h1");

console.dir(h1);


// 1. getElementById()
let elementById = document.getElementById("i2");
console.log("1. getElementById:", elementById);

// elementById.textContent='Hu hu';
// elementById.innerHTML='Hu hu';
elementById.innerText='Hu hu';

// 2. getElementsByClassName()
let elementByClass = document.getElementsByClassName("heading");
console.log("2. getElementsByClassName:", elementByClass);


// 4. querySelector()
let querySelector = document.querySelector(".heading");
console.log("4. querySelector:", querySelector);


// 5. querySelectorAll()
let querySelectorAll = document.querySelectorAll(".heading");
console.log("5. querySelectorAll:", querySelectorAll);


// 6. querySelector() using ID
let queryId = document.querySelector("#intro");
console.log("6. querySelector using ID:", queryId);


// 7. querySelectorAll() using class
let queryClass = document.querySelectorAll(".description");
console.log("7. querySelectorAll using class:", queryClass);


// 8. querySelectorAll() using tag
let queryTag = document.querySelectorAll("p");
console.log("8. querySelectorAll using tag:", queryTag);


// 9. querySelector() using multiple selectors
let multipleSelectors = document.querySelector("#container, #intro");
console.log("9. Multiple selectors:", multipleSelectors);


// 10. querySelectorAll() using multiple selectors
let allMultipleSelectors = document.querySelectorAll("#container, .description, h1");
console.log("10. All multiple selectors:", allMultipleSelectors);


// 11. querySelector() using descendant selector
let descendant = document.querySelector("#container p");
console.log("11. Descendant selector:", descendant);


// 12. querySelectorAll() using child selector
let child = document.querySelectorAll("#my-list > li");
console.log("12. Child selector:", child);


// 13. querySelectorAll() using attribute selector
let attribute = document.querySelectorAll("[id]");
console.log("13. Attribute selector:", attribute);


// 14. querySelectorAll() using attribute value
let attributeValue = document.querySelectorAll('[class="item"]');
console.log("14. Attribute value selector:", attributeValue);


// 15. querySelector() using pseudo-class
let firstChild = document.querySelector(".list li:first-child");
console.log("15. First child selector:", firstChild);


// 16. querySelector() using last-child
let lastChild = document.querySelector(".list li:last-child");
console.log("16. Last child selector:", lastChild);


// 17. querySelectorAll() using nth-child
let nthChild = document.querySelectorAll(".list li:nth-child(2)");
console.log("17. Nth child selector:", nthChild);