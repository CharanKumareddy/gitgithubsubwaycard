function split(){
    let amountElement = document.getElementById("amount").value;
    let personsElement = document.getElementById("persons").value;
    let bill = (amountElement / personsElement).toFixed(1);
    document.getElementById("result").innerText = bill;
    document.getElementById("amount").value = "";
    document.getElementById("persons").value = "";
}

