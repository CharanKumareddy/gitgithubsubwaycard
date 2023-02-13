let number = document.getElementById("number");

let resultElement = document.getElementById("result");
function cube(){
    let numberEl = number.value;
    let resultEl = numberEl * numberEl * numberEl;
    resultElement.innerText = resultEl;
    document.getElementById('number').value = '';

    // document.getElementById("result").innerHTML = result;
    // console.log(resultElement);

}