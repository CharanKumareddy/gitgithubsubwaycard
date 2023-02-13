// let todoList = [
//     {text : "Learn HTML"},
//     {text : "Learn CSS"},
//     {text : "Learn Javascript"},
//     {text : "Learn react.js"}
// ]
// let createAndAppendTodo = todoList.map((todo) => {


// // function createAndAppendTodo(todo){
//     let parentContainer = document.getElementById("todoItemsContainer");
//     console.log(parentContainer);

//     let classListElement = document.createElement("li");
//     classListElement.classList.add("todoItemContainer", "d-flex", "flex-row");
//     parentContainer.appendChild(classListElement)

//     let inputElement = document.createElement("input");
//     inputElement.type = "checkbox";
//     inputElement.id = "checkboxInput";
//     inputElement.className = "checkbox-input";
//     classListElement.appendChild(inputElement);

//     let divElement = document.createElement("div");
//     divElement.classList.add("d-flex", "d-row","label-container");
//     classListElement.appendChild(divElement);

//     let labelInputElement = document.createElement("label");
//     labelInputElement.textContent = todo.text;
//     labelInputElement.htmlFor = "checkboxInput";
//     labelInputElement.className = "checkbox-label";
//     divElement.appendChild(labelInputElement);

//     let divElement1 = document.createElement("div");
//     divElement1.classList.add("delete-icon-container");
//     divElement.appendChild(divElement1);

//     let iconElement = document.createElement("i");
//     iconElement.classList.add("far", "fa-trash-alt", "delete-icon");
//     divElement1.appendChild(iconElement);
// })

// let bgContainerEl = document.createElement("div");
// bgContainerEl.classList.add("bg-cintainer");
// document.body.appendChild(bgContainerEl);
// console.log(bgContainerEl);

// let headingElement = document.createElement("h1");
// headingElement.classList.add("heading")
// headingElement.textContent = "Grocery List";
// bgContainerEl.appendChild(headingElement)

// let listContainerElement = document.createElement("ul");
// listContainerElement.classList.add("list-container");
// bgContainerEl.appendChild(listContainerElement);

// let groceryItems = ["Milk", "Peanut Butter", "Chaco Chips", "Tomato Souce", "Cup Cakes", "Noodles"];
// for (let groceryItem of groceryItems) {
//     let listItemsEl = document.createElement("li");
//     listItemsEl.textContent = groceryItem
//     listContainerElement.appendChild(listItemsEl)
// }
// listContainerEl.textContent = "Milk";
// listContainerEl.textContent = "Peanut Butter";
// listContainerEl.textContent = "Chaco Chips";
// listContainerEl.textContent = "Tomato Souce";
// listContainerEl.textContent = "Cup Cakes";
// listContainerEl.textContent = "Noodles";
