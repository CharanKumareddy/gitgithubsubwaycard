let counterElement = document.getElementById("counterValue");

function onIncrease(){
    let previousCounterElement = counterElement.textContent;
    let updateCounterElement = parseInt(previousCounterElement) + 1;
    counterElement.textContent = updateCounterElement;
    if(updateCounterElement>0){
        counterElement.style.color = "green";
    }
    else if(updateCounterElement<0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "black";
    }
    
}

function onDecrease(){
    let previousCounterElement = counterElement.textContent;
    let updateCounterElement = parseInt(previousCounterElement) - 1;
    counterElement.textContent = updateCounterElement;
    if(updateCounterElement>0){
        counterElement.style.color = "green";
    }
    else if(updateCounterElement<0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "black";
    }
}

function onReset(){
    let updateCounterElement = 0;
    counterElement.textContent = updateCounterElement;
    if(updateCounterElement>0){
        counterElement.style.color = "green";
    }
    else if(updateCounterElement<0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "black";
    }
}