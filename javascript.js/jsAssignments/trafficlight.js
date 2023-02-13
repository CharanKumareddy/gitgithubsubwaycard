let stopButtonElement = document.getElementById("stopButton");
let readyButtonElement = document.getElementById("readyButton");
let goButtonElement = document.getElementById("goButton");
let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");
console.log(stopButtonElement);

function buttonStop(){
    stopButtonElement.style.backgroundColor = "#cf1124";
    readyButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#1f1d41";
    stopLightElement.style.backgroundColor = "#cf1124";
    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";
}

function buttonReady(){
    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyButtonElement.style.backgroundColor = "#f7c948";
    goButtonElement.style.backgroundColor = "#1f1d41";
    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#f7c948";
    goLightElement.style.backgroundColor = "#4b5069";

}

function buttonGo(){
    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#199473";
    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#199473";
}