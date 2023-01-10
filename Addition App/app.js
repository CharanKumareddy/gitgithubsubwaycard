
num1 = Math.floor(Math.random() * 10);
num2 = Math.floor(Math.random() * 10);
document.getElementById("num1").value = num1;
document.getElementById("num2").value = num2;
let result = document.getElementById("result");
let totalQuestions = 0;
let correctAnswers = 0;
let totalCorrectAnswers = 0;

let total = document.getElementById("total");
let correct = document.getElementById("correct");
let score = document.getElementById("score");



function add(){
     
    let userSum = document.getElementById("sum").value; 
    
    if(num1 + num2 == userSum){
        
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        document.getElementById("num1").value = num1;
        document.getElementById("num2").value = num2;
        result.innerText = "Correct";
        sum.value = '';
        totalQuestions = totalQuestions + 1;
        total.innerText = totalQuestions;
        correctAnswers = correctAnswers + 1;
        correct.innerText = correctAnswers;
        totalCorrectAnswers = correctAnswers * 10;
        score.innerText = totalCorrectAnswers;
    }
    else{
        
        result.innerText = "Wrong";
        sum.value = '';
        totalQuestions = totalQuestions + 1;
        total.innerText = totalQuestions
    }
    
}
// add()

