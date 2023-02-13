



// function register(){
//     let studentName = document.getElementById('studentName').value;
//     let studentEmail = document.getElementById('studentEmail').value;
//     let studentAge = document.getElementById('studentAge').value;
//     studentName.innerText = studentName;
//     studentEmail.innerText = studentEmail;
//     studentAge.innerText = studentAge;
//     console.log(studentName);
//     console.log(studentEmail);
//     console.log(studentAge);
// }

// register()

let users = [];

function register(){
    let examCenter = document.getElementById('examCenter').value = users;
    
    let studentName = document.getElementById("studentName").value;
    let studentEmail = document.getElementById("studentEmail").value;
    let studentAge = document.getElementById("studentAge").value;
    let countEmail = users.filter((user) =>{
        return user.studentEmail == studentEmail;
    })
    let tempUser = {
        studentName : studentName,
        studentEmail : studentEmail,
        studentAge : studentAge,
    }
    if(studentAge >= 18 && studentAge <=24 && countEmail.length == 0){
        users.push(tempUser);
        console.log(users);
        let arr = ["Andhra Pradesh", "Chennai", "Bangalore", "Hyderabad", "Pune"];
        let randomNumber = Math.floor(Math.random()*arr.length);
        console.log("Your Exam center is : " + arr[randomNumber]);
        console.log("you are elible for this exam");
        
        
        

        
        // if(countEmail.length == 0){
        //     users.push(tempUser);
        //     console.log(users);
            
            
        // }
        // else{
        //     console.log("this email already exists!");
        // }
        
        
       
    }
    else{
        console.log("you are not elibile for this exam");
        console.log("this email already exists!");
    }
    if(studentName == null || studentName == '' ){
        console.log("'Student Name can't be empty");
    }
    if(studentEmail == null || studentEmail == '' ){
        console.log("'Student Email can't be empty");
    }
    if(studentAge == null || studentAge == '' ){
        console.log("'Student Age can't be empty");
    }
    

    
}

// let age = 24;
// if (age >= 18 && age<=24){
//     console.log("you are eligible for this exam");
// }
// else{
//     console.log("you are not eligible for this exam"); 
// }