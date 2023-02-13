// let api = 'http://www.omdbapi.com/?i=tt3896198&apikey=7991cbb1&t=';
let api  = 'http://www.omdbapi.com/?apikey=7991cbb1&t=';
function searchMovie(){
    let userInput = document.getElementById("movieName").value;
    let searchkeyword = api + userInput;
    console.log(searchkeyword);
    fetch(searchkeyword)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
}
