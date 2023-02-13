// let num = 15;
// if (num >=16){
//     // console.log('eligible to play cricket');
//     if(num<=24){
//         console.log("eligible to play cricket");
//     }
//     else{
//         console.log("not eligible to play cricket because your age more than 24");
//     }
// }
// else{
//     console.log("not eligible to play cricket because your age below 16");
// }

// let fruits = ["apple","banana","cherry",'ads','cocumber'];
// for( let i = 0; i < fruits.length; i++){;
//     console.log(fruits[i]);
// }
// let fruits = ["cherries","apple","banana"]
// let total = [];

// for(let i = 0; i<= 5; i++){
//     total += i;
//     console.log(total);
//     }
// let num = []
//     for(let j = 0; j <=5; j++){
//         num += j;
//         console.log(num);
//     }

// using conditions for whether 
// let whether = prompt("select your wheather");
// if (whether === "sunny"){
//     console.log("wear normal clothes");
// }
// else if(whether == "rain"){
//     console.log("take an umbrella")
// }
// else if(whether === "winter"){
//     console.log("wear sweter");
// }
// else{
//     console.log("error");
// }

// using cinditions for apply job
// let name = "charan";
// let age = prompt('enter your age');
// let highschool = true;
// if (age >= 18 && highschool == true){
//     alert("This job is applicable for you");
// }
// else{
//     alert("This job is not applicable for you.Because age is below 18");
// }

// using conditions for practicing more
// let num1 = window.prompt("Enter the number1");
// let num2 = window.prompt("Enter the number2");
// if(num1 >= num2){
//     console.log("num1 is gratest number");
// }
// else if(num2 == num1){
//     console.log("both are equal");
// }
// else{
//     console.log("num2 is gratest number");
// }

// let x,y,z;
// x = -10;
// y = 2;
// z = -30;
// if (x>0 && y>0 && z>0){
//     alert("this sign +");
// }
// else if(x<0 && y<0 && z<0){
//     console.log("this is sign -");
// }
// else if(x>0 && y>0 && z<0){
//     console.log("this is *");
// }
// else if(x<0 && y<0 && x>0){
//     console.log("this is sign /");
// }
// else{
//     console.log("error");
// }

// let a,b,c,d,e,f;
// a = -1;
// b = -2;
// c = -3;
// d = 0;
// e = -4;
// f = -5;
// if (a>b && a>c && a>d && a>e && a>f){
//     console.log(a);
// }
// else if(b>a && b>c && b>d && b>e && b>f){
//     console.log(b);
// }
// else if(c>a && c>b&& c>d && c>e && c>f){
//     console.log(c);
// }
// else if(d>a && d>b && d>c && d>e && d>f){
//     console.log(d);
// }
// else if(e>a && e>b && e>c && e>d && e>f){
//     console.log(e);
// }
// else{
//     console.log(f);
// }

// let x = 0;
// let y = -1;
// let z = 4;
// if(x>y && x>z){
//     if(y>z){
//         console.log(x + "," + y + "," + z);
//     }
//     else{
//         console.log(x + "," + z + "," + y);
//     }
// }
// if(y>x && y>z){
//     if(z>x){
//         console.log(y + "," + z + "," + x);
//     }
//     else{
//         console.log(y + "," + x + "," + z);
//     }
// }
// if(z>x && z>y){
//     if(x>y){
//         console.log(z + "," + x + "," + y);
//     }
//     else{
//         console.log(z + "," + y + "," + x);
//     }
// }

// for(let i = 0; i<=15; i++){
//     if(i == 0){
//         console.log('even' + i);
//     }
//     else if(i%2 === 0){
//         console.log("even" +i);
//     }
//     else{
//         console.log("odd" +i);
//     }
// }

// for(let i = 1; i<=100; i++){
//     if(i%3 === 0 && i%5 ===0){
//         console.log(i + "FizzBuzz");
//     }
//     else if(i%3 === 0){
//         console.log(i + "Fizz");
//     }
//     else if(i%5 ===0){
//         console.log(i + "Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

// let x,y,chr;
// for (x = 1; x <= 6; x++){
//     for(y = 1; y < x; y++){
//         chr += "*";
//     }
//     console.log(chr);
//     chr = ''
// }

// while loops
// let sum = 0;
// let num = 0;
// while (num<=10){
//     sum += num;
//     num++;
//     console.log(sum);
// }

// let randomStuff = ["charan",3.342345,6,4,5,["apple","ball","cat"],7,8,9,2];
// let num = 0;
// while (num<randomStuff.length){
//     console.log(randomStuff[num]);
//     num++;
    
// }

// let otherStuff = ["charan",3.342345,6,4,5,["apple","ball","cat"],7,8,9,2];
// let num = otherStuff.length-1;
// while(num >= 0){
//     console.log(otherStuff[num]);
//     num--;
// }


// let num = 0;
// while(num%2==20){
//     num++;
//     console.log(num);
// }

// for lopps 

// for(let i = 0; i<= 10; i++){
//     console.log(i);
// }

// function printNUmbers(){
//     for(let i = 0; i <= 10; i++){
//         console.log(i);
//     }
// }
// printNUmbers();

// function printArray(arr){
//     for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j<arr[0].length; j++){
//         console.log(arr[i][j]);
//         }
//     }
// }

// var arr = [[1,2],
//         [3,4],
//         [5,6]];
// printArray(arr);

// function printArray(arr) {
//     for (var i=0;i<arr.length;i++){
//       for(var j=0;j<arr[0].length;j++){
//         console.log(arr[i][j]);
//       }   
//     }
//   }
//   var arr = [[1, 2],
//              [3, 4],
//              [5, 6]];
  
//   printArray(arr) //1 2 3 4 5 6

// function printArray(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2 == 0){
//             console.log(arr[i]);
//         }
//     }
// }
// let arr = [13,23,12,45,22,48,66,100];
// printArray(arr);

// function catGreets(){
//     console.log("hey cat you're a good animal!!!");
//     console.log("meowwwwwwwww");
// }
// catGreets();

// function specialGreets(name){
//     console.log("hey " + name + " you are a good person!!!");
// }
// let name = "sanath";
// specialGreets(name);

// function adder(a,b,c,d){
//     console.log(a+b+c+d);
// }
// let a,b,c,d;
// a = 10;
// b = 20;
// c = 30;
// d = 40;
// adder(a,b,c,d);

// function doesExit(nums, num){
//     for (let i = 0; i < nums.length; i++){
//         if(nums[i] == num){
//             return true;
//         }
//     }
// return false;
// }
// doesExit([1,2,3,4],2);

// function myFunction(p1, p2){
//     if (p1 === p2){
//         return p1*p2 
//     }
//     else{
//         return p1+p2 
//     }
// }
// let p1,p2;
// p1 = 10;
// p2 = 10;
// console.log( myFunction(p1,p2));

// let x = myFunction (4,3);

// function myFunction(a,b){
//     console.log( a * b);
//     return 0;
// }
// myFunction();

// function myFunction(celius){
//     console.log( (5/9) * (celius-32));
// }
// let celius = 77;
// myFunction(celius);

// let person = {
//     fullName : function(){
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
// let person1 = {
//     firstName : "charan",
//     lastName : "kumar"
// }
// let person2 = {
//     firstName : "sanath",
//     lastName : "naidu"
// }
// let person3 = {
//     firstName : "tharun",
//     lastName : "ganagala"
// }
// person.fullName.call(person3);

// let person = {
//     fullName : function(city,country){
//         console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
//     }
// }
// let person1 = {
//     firstName : "charan",
//     lastName : "kumar"
// }
// let person2 = {
//     firstName : "sanath",
//     lastName : "naidu"
// }
// let person3 = {
//     firstName : "tharun",
//     lastName : "ganagal"
// }
// person.fullName.call(person3, "naidupeta", "india");

// let number = 10;

// function myFunction(number){
//     return (number * number);
// }
// myFunction(number)

// function myFunc(theObject){
//   theObject.make = "toyato" 
// }
// let mycar = {
//   make : "audi",
//   model : "Accord",
//   year : 2022
// }
// let x = mycar.make;
// myFunc(mycar);
// console.log(myFunc(x));

// function myFunc(theObject) {
//   theObject.make = 'Toyota';
// }

// function grainder(item){
//   console.log("grainding....." ,item);
// }
// grainder("tomato")

// tax calculations using functions
// let salary = 700000;
// function taxCal(salary){
//   if(salary<=300000){
//     console.log("Congratulations you have no tax🥳");
//   }
//   else if(salary<=600000){
//     console.log((salary - 300000)*0.1);
//   }
//   else if(salary>=600000){
//     let salary1 = 30000; 
//     let salary2 = salary1 + (salary-600000)*0.2;
//     console.log(salary2);
//   }
// }
// taxCal(salary)

// function numbers (num1, num2){
//     if(num1 === num2){
//         return num1 + num2
//     }
//     // else if(num1 !== num2){
//     //     return num1 - num2
//     // }
//     else{
//         return num1 * num2
//     }
// }
// let num1,num2;
// num1 = 20;
// num2 = 20;
// console.log(numbers(num1,num2));

// function myFunction(name1, name2, name3){
//     console.log("hello" + name1);
//     console.log("hello" + name2);
//     console.log("hello" + name3);
// }
// let name1 = " charan";
// let name2 = " tharun";
// let name3 = " sanath";
// // let names = myFunction(" sanath", " tharun", " charan")
// myFunction(name1);
// myFunction(name2);
// myFunction(name3);

// check for the temperature using the conditions

// let temperature = prompt("Enter a temperature degrees");
// if(temperature<=25){
//     console.log("It's very cold outside");
// }
// else if(temperature <= 35 ){
//     console.log("It's moderate temperture outside");
// }
// else{
//     console.log("It's very HOT temperature outside");
// }

// online purchasing using the conditions

// let loggedIN = true;
// let email = true;
// let cradInfo = false;
// if(loggedIN && email && cradInfo){
//     console.log("your aligle to purchase the course");
// }
// else{
//     console.log("your login details wrong plaese check once");
// }

// let isEmailVerified= false;
// let isGoogleVerified = true;
// let isFacebookVerified = false;

// if(isEmailVerified || isGoogleVerified || isFacebookVerified){
//     console.log("you are login Successfully");
// }
// else{
//     console.log("you are details are wrong plaese check once");
// }

// let authenticated = false;
// authenticated ? console.log("SIGNOUT") : console.log("LOGIN");

// let user = "subuser";
// switch (user){
//     case "admin" : 
//         console.log("you get full course");
//         break;
//     case "subuser" : 
//         console.log("gets access to create/delete courses");
//         break;
//     case "test prep" : 
//         console.log("gets access to create/delete tests");
//         break;
//     case "user" : 
//         console.log("gets access to consume content");
//         break;
//     default:
//         console.log("trail user");
//         break;     
// }


// function myFunc(name){
//     console.log(`hello there, ${name}.how are you`);
// }
// myFunc("charan");

// function namstey(){
//     return `hello in india`
// }
// console.log(namstey());

// function getUserRole(name,role){
//     switch (role) {
//         case "admin":
//             return `${name} you get full course`;
//             break;
//         case "subuser":
//             return `${name} gets access to create/delete courses`;
//             break;
//         case "testprep":
//             return `${name} gets access to create/delete tests`;
//             break;
//         case "user":
//             return `${name} gets access to create/delete tests`;
//             break;
//         default:
//             return `${name} trail user`;
//             break;
//     }
// }
// let greet = getUserRole("charan" ,"subuser");
// console.log(greet);

// let myName = window.prompt("enter name");
// if(myName !== myName){
//     console.log("this is true");
// }
// else {
//     console.log("error");
// }

// function isEven(element){
//     return element % 2 ===0;
// }
// console.log(isEven(10));

// fill in arrays
// let array = [1,2,3,4,5,6,7,8,9];
// console.log(array.fill("h",2,6));

// filter in arrays
// let myArray = [23,34,45,56,67,87,76,43,98];
// console.log(myArray);
// let result = myArray.filter((num) => num !== 56);
// console.log(result);

// function myFunc(myArr){
//     myArr[0] = 30;
//     // console.log(myArr);
// }
// let arr = 45;
// console.log((arr[0]));
// myFunc(arr)
// console.log(arr[0]);

// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }

// let n = 5;
// let result = factorial(n)
// console.log(result); 

// let number = function(n){
//     return n*n;
// };
// let n= 9
// console.log(number(n));

// function getScore(){
    

//     function add(){
//         return `${name} scrore ${num1 + num2}`;
//     }
//     return add();
// }
// const num1 = 7;
// const num2 = 3;
// let name = "charan"
// console.log(getScore());

// let array = [1,2,3,4,5,6,7,8,9]
// function myArr(num){
//     return num * num;
// }
// let result = array.map(myArr)
// console.log(result);
// let result = array.map((num)=>{
//     return num * num;
// })
// console.log(result);


// let myArray = [
//     {firstname : "charan", lastname : "kumar", age : 21},
//     {firstname : "sanath", lastname : "naidu", age : 23},
//     {firstname : "tharun", lastname : "ganagala", age : 21}
// ]
// let result = myArray.map((arr) =>{
//     return arr.firstname +" age is " +arr.age;
// })
// console.log(result);

// let kvArray = [
//     {key: 1,value: 10},
//     {key: 2,value: 20},
//     {key: 3,value: 30},
// ];
// let result = kvArray.map((arr)=>{
//     return "key is:" + arr.key + " value is: " + arr.value; 
// })
// console.log(result);


// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
//   ];
  
//   const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
//   console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
//   console.log(kvArray);

// let arr = [1, , 3]
// let result = arr.map((num) => {
//     return num * 2;
// })
// console.log(result);

// let myArray = [
//     {firstname : "charan", lastname : "kumar", age : 21, job : "mern developer"},
//     {firstname : "sanath", lastname : "naidu", age : 23},
//     {firstname : "tharun", lastname : "ganagala", age : 13, job : "mern developer"},
//     {firstname : "vinodh", lastname : "reddy", age : 20},
//     {firstname : "ajay", lastname : "boddu", age : 17},
// ]
// let result = myArray.filter((num) =>{
//     return num.job == "mern developer" && num.age >= 18
// }
// ).map((num) =>{
//     return num.firstname;
// })
// console.log(result);

// let myArr = [2,5,100];
// let result = myArr.map((num) => {
//     return num *2
// })
// console.log(result);

// let myArr = [
//     {name : "charan kumar",age :21},
//     {name : "sanath naidu",age :22},
//     {name : "tharun gangala",age :23},
//     {name : "vinodh reddy",age :24},
//     {name : "ajay boddu",age :25},
// ]
// let result = myArr.map((user) => {
//     return user.name
//     }
// )
// console.log(result);

// let users = [
//     {name : "charan kumar", age : 21},
//     {name : "sanath naidu", age : 23},
//     {name : "tharun gangala", age : 17},
//     {name : "vinodh reddy", age : 23},
//     {name : "ajay boddu", age : 15},
// ];
// let result = users.map((user) => {
//     if(user.age >= 18){
//         return user.name + " " + "can go to the matrix";
//     }
//     else{
//         return user.name + " " + "is under age!!";
//     }
// })
// console.log(result);

// let studentMarks = [
//    {name : "charan kuamr", marks : 70},
//    {name : "sanath naidu", marks : 89},
//    {name : "tharun gangala", marks : 96},
//    {name : "vinodh reddy", marks : 100},
//    {name : "ajay boddu", marks : 90},
// ];
// let studentGrades = studentMarks.filter((students) => {
//     return students.marks >= 90;
// }).map((students) => {
//     return students.name + " " + "your grade is O"
// })
// console.log(studentGrades);

// let users = [
//         {name : "charan", lastname :"kumar", marks : 70},
//         {name : "sanath naidu", marks : 89},
//         {name : "tharun gangala", marks : 96},
//         {name : "vinodh reddy", marks : 100},
//         {name : "charan", lastname: "reddy", marks : 90},
// ]
// let user = users.find((user) => {
//     return user.name ==="charan"
// })
// console.log(user.name);

// let numbers = [3,6,8,2];
// let result = numbers.filter((num) => {
//     return num >=5;
// })
// console.log(result);

// let myArr = [3,6,8,2];
// let result = myArr.filter((num) => {
//     return num%2 ==0;
// })
// console.log(result);

// let users = ["dog", "wolf", "by", "family", "eaten", "camping"];
// let result = users.filter((user) => {
//     return user.length <= 5;
// })
// console.log(result);

// let user = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 },
// ];
// let result = user.filter((users) => {
//     return users.age >= 18; 
// }).map((users) => {
//     return users.name
// })
// console.log(result);

// let numbers = [1, -4, 12, 0, -3, 29, -150];
// let total = numbers.filter((num) => {
//     return num>=0
// }).reduce((num1,num2) => {
//     return num1 + num2
// })
// console.log(total);

for (let i =1; i<=100; i++){
    console.log(i);
    if(i%3 == 0){
        console.log("google");
    }
    else if(i%5 == 0){
        console.log("feedback");
    }
    else{
        console.log("amazon");
    }
}

let testCase1 = [
    {
      name: "Leo Messi",
      dob: "31-12-1995",
      biology: 95,
      chemistry: 91,
      total : 186,
    },
    {
      name: "Cristiano Ronaldo",
      dob: "31-05-1992",
      biology: 90,
      chemistry: 81,
      total : 171,
    },
    {
      name: "Virat Kohli",
      dob: "31-12-1995",
      biology: 95,
      chemistry: 96,
      total : 191,
    },
    {
      name: "Rohit Sharma",
      dob: "31-12-1995",
      biology: 85,
      chemistry: 86,
      total : 171,
    },
    {
      name: "Viswanathan Anand",
      dob: "12-12-1994",
      biology: 99,
      chemistry: 10,
      total : 109,
    },
  ];


let results =testCase1.sort((a,b) =>{
    return ((a.total != b.total) ? b.total - a.total : (b.biology - a.biology) ? 1 : -1)
    
}).map((names)=>{
    return names.name
})
console.log(results);
