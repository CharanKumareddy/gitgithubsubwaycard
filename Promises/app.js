
// function sendEmail(){
//     console.log("email send to the user!");
// }
// function register(){
//     console.log("registraction is procccessed!");
//     let registerSuccessFull = new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("registration is successfull!");
//             resolve();
//         },2000)
        
//     }).then(()=>{
//         sendEmail()
//     })
// }




//     function fetchQuotes(){
//         let randomQuotes = Math.floor(Math.random() * 1000);
    
//         fetch("https://type.fit/api/quotes")
//         .then((response) => {
//             return response.json();
//         }).then((data) => {
//             document.getElementById('text').innerText = data[randomQuotes].text;
//             document.getElementById('author').innerText = data[randomQuotes].author;
            
//         });
//     }

// fetchQuotes()


fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7991cbb1&t=rrr")
  .then(function(response){
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });









