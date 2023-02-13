
let inputElement = document.createElement("input");
inputElement.setAttribute("type","Checkbox");
inputElement.setAttribute("id","myCheckbox")
document.body.appendChild(inputElement);
let labelElement = document.createElement("label");
labelElement.setAttribute("for","myCheckbox")
// labelElement.htmlFor = "myCheckbox";
labelElement.textContent = "Graduated";
document.body.appendChild(labelElement)
console.log(inputElement);
console.log(labelElement);