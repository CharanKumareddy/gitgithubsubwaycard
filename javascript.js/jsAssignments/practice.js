// let title = document.getElementById("title");
// let titleEl = false
// function joined(){
//     if(titleEl == false){
//         title.innerText = "I joined the full stack web development 🎉";
//         titleEl = true;
//     }
//     else{
//         title.innerText = "Have you joined the course?"
//         titleEl = false;
//     }
    
// }
// function join(){
//     title.textContent = ""
// }

// function evenOdd(){
//     let num = 4;
//     if (num %2 === 0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// evenOdd();


// function findLargest(num1, num2){
//     if(num1 > num2){
//         console.log(num1 + " " + "Largest number");
//     }
//     else if(num1 < num2){
//         console.log(num2 + " " + "Largest number");
//     }
//     else{
//         console.log(" Both are equal");
//     }
// }
// let num1 = 30;
// let num2 = 30;
// findLargest(num1,num2);

// function findLargest(num1, num2, num3){
//     if(num1 > num2 && num1 > num2){
//         console.log(`${num1} is largest number`);
//     }
//     else if(num2 > num1 && num2 > num3){
//         console.log(`${num2} is largest number`);
//     }
//     else{
//         console.log(`${num3} is largest number`);
//     }
// }
// findLargest(40,20,30);

// function findTriangleType(num1, num2, num3){
//     if (num1 == num2 && num1 == num3){
//         console.log("Equilateral triangle");
//     }
//     else if(num1 == num2 || num2 == num3 || num1 == num3){
//         console.log("Isosceles triangle");
//     }
//     else{
//         console.log("Scalene triangle");
//     }
// }
// findTriangleType(20,10,10)

// function checkInRange(num, range1, range2){
//     if(num >= range1 && num <= range2){
//         console.log(`${num} is between range ${range1},${range2}`);
//     }
//     else{
//         console.log(`${num} is outside range ${range1},${range2}`);
//     }
// }
// checkInRange(10,2,20);
// checkInRange(12,20,30);

// function evalNumbers(num1, num2,op){
//     if(op == "add"){
//         console.log(`sum of ${num1} and ${num2} is ${num1 + num2}`);
//     }
//     else if(op == "subtract"){
//         console.log(`difference of ${num1} and ${num2} is ${num1 - num2}`);
//     }
//     else if(op == "multiple"){
//         console.log(`product of ${num1} and ${num2} is ${num1 * num2}`);
//     }
//     else if(op == "divide"){
//         console.log(`division of ${num1} and ${num2} is ${num1 / num2}`);
//     }
//     else{
//         console.log(`${op} is invalid operator`);
//     }
// }
// evalNumbers(10,20, "add");
// evalNumbers(10,20, "subtract");
// evalNumbers(10,20, "multiple");
// evalNumbers(10,20, "divide");
// evalNumbers(10,20, "square");

// function checkLeapYear(year){
//     if ((year %4 == 0) && (year %100 != 0) || (year %100 == 0)){
//         console.log("this is leap year");
//     }
//     else{
//         console.log("this not leap year");
//     }
// }
// checkLeapYear(2000);
// checkLeapYear(2001);
// checkLeapYear(2002);
// checkLeapYear(2003);
// checkLeapYear(2004);

// function findGrade(marks){
//     if(marks >=90 && marks <=100){
//         console.log("john doe you have recevied S grade");
//     }
//     else if(marks >=80 && marks < 90){
//         console.log("john doe you have recevied A grade");
//     }
//     else if(marks >=70 && marks < 80){
//         console.log("john doe you have recevied B grade");
//     }
//     else if(marks >=60 && marks < 70){
//         console.log("john doe you have recevied D grade");
//     }
//     else if(marks >=50 && marks < 60){
//         console.log("john doe you have recevied E grade");
//     }
//     else if (marks >=0 && marks < 40){
//         console.log("john doe you have failed");
//     }
//     else{
//         console.log("invild marks");
//     }
// }
// findGrade(91);
// findGrade(85);
// findGrade(73);
// findGrade(53);
// findGrade(21);
// findGrade(120);

// function sum(){
//     for(let i = 2; i<= 22; i+=2){
//         console.log(i);
//     }
// }
// sum();


// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
//     for(let i = arr.length-1; i>=8; i++){
//         console.log(arr[i]);
//     }

// function boolChecker(bool){
//     if(boll === true || boll === false){
//         return "You've given me a bool, thanks!";
//     }
//     else{
//         return "No bool, not cool.";
//     }
// }
// let boll = true;
// console.log(boolChecker(boll));


// function grades(marks){
//     if(marks>= 91 && marks === 100){
//         return "Good job, you're doing great!";
//     }
//     else if(marks >=81 && marks < 90){
//         return "Every cloud has a silver lining";
//     }
//     else if(marks >=71 && marks < 80){
//         return "Beep beep boop";
//     }
//     else if(marks >=0 && marks < 70){
//         return "I'm sorry, I'm still learning about feelings!"
//     }
//     else{
//         console.log("invalid details");
//     }
// }
// let marks = 10;
// console.log(grades(marks));

// let num = 3;
// function satisfiesRequirements(num){
//     if(num>3 && num<10){
//         return true;
//     }
//     return false;
// }
// console.log(satisfiesRequirements(num));

// let userName = "Charan";
// let userType = "admin";
// function myFunc(userName, userType){
//     if (userName === "charan" || userType === "admin"){
//         return "Username valid";
//     }
//     else{
//         return "Username Invalid"
//     }
// }
// console.log(myFunc(userName,userType));

// let sum = 0;
// function add(n){
//     for(let i = 0; i<n.length; i++){
//         sum += n[i]
//     }
//     return sum
// }
// let n = [3,3];
// console.log(add(n));

// let students = ["charan", "tharun", "sanath", "vinodh", "ajay"];
// function myFunc(students){
//     for (let i = 0; i < students.length; i++){
//         // result  = students + i;
//         // console.log(result);
//         console.log(students[i]);
//     }
// }
// myFunc(students);


// let array = ["Monday", "Tuesday", "Wednersday", "Thurday", "Friday", "Saturday", "Sunday"];
// function workingDays(day){
//     return day + " " +"working days";
// }
// function weekenDays(day){
//     return day + " " +"weekend days";
// }

// for( let i = 0; i<=array.length; i++){
//     if(i<5){
//         let day = workingDays(array[i]);
//         console.log(day);
//     }
//     else{
//         let day = weekenDays(array[i]);
//         console.log(day);
//     }
// }
// console.log(workingDays());
// console.log(weekenDays(array));


// let unorderedNUmbers = [234, 12, 65, 3, 92];
// let oderedNumbersAssending = unorderedNUmbers.sort((a,b) =>{
//     return a-b;
// })

// let oderedNumbersDescending =unorderedNUmbers.sort((b,a) => {
//     return b-a;
// })
// console.log(oderedNumbersAssending);
// console.log(oderedNumbersDescending);

// let mentors = ["charan", "tharun", "sanath", "vinodh"];
// function isMentors(name){
//     return mentors.includes(name);
// }
// let name = "ajay";
// console.log(isMentors(mentors.name));

// let arr = ["h", "e", "l", "l", "o"];
// let new_Arr = arr.join("--");
// console.log(new_Arr);

var charge = function() {
    if (sunny) {
      useSolarCells();
    } else {
      promptBikeRide();
  };
}
let useSolarCells = "hot"
let sunny = "winter"
charge(sunny)