let containerElement = document.getElementById("mycontainer");
let h1Element = document.createElement("h1");
    h1Element.textContent = "hello I am Charan";
    containerElement.appendChild(h1Element);
let btnElement = document.createElement("button");
    btnElement.textContent = "Change Heading";
    containerElement.appendChild(btnElement);
btnElement.onclick = function(){
    h1Element.classList.add("heading")
}
let removeStyleBtnElement = document.createElement("button");
    removeStyleBtnElement.textContent = "Remove Styles";
    containerElement.appendChild(removeStyleBtnElement);
removeStyleBtnElement.onclick = function(){
    h1Element.classList.remove("heading");
}
document.getElementById("mycontainer").appendChild(removeStyleBtnElement);





































// let containerElement = document.getElementById('mycontainer');
// let h1Element = document.createElement("h1");
// let btnElement = document.createElement("button");
// btnElement.textContent = "Change Heading";
// h1Element.textContent = "Web Technologies";
// containerElement.appendChild(h1Element);
// containerElement.appendChild(btnElement);
// btnElement.onclick = function(){
//     h1Element.textContent = "4.0 Technologies";
//     h1Element.classList.add("heading");
// }
// containerElement.appendChild(btnElement);
// let removeStyleBtnElement = document.createElement("button");
// removeStyleBtnElement.textContent = "RemoveStyles";
// removeStyleBtnElement.onclick = function(){
//     h1Element.classList.remove("heading");
// };
// document.getElementById("mycontainer").appendChild(removeStyleBtnElement);