let colorPickerContainer = document.getElementById("colorPickerContainer");
let selectedColorHexCode = document.getElementById("selectedColorHexCode");

function button1Color(){
    let changeColorPickedElement = colorPickerContainer.style.background = "#e0e0e0";
    selectedColorHexCode.textContent = changeColorPickedElement;
}

function button2Color(){
    let changeColorPickedElement = colorPickerContainer.style.background = "#6fcf97";
    selectedColorHexCode.textContent = changeColorPickedElement;
}

function button3Color(){
    let changeColorPickedElement = colorPickerContainer.style.background = "#56ccf2";
    selectedColorHexCode.textContent = changeColorPickedElement;

}
function button4Color(){
    let changeColorPickedElement = colorPickerContainer.style.background = "#bb6bd9";
    selectedColorHexCode.textContent = changeColorPickedElement;
}