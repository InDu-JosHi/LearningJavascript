// const rect=document.getElementById("indra")
// const abc=document.getElementById("btn")
// const increase=document.getElementById("in")
// const decrease=document.getElementById("out")


// abc.addEventListener("click",() => rect.style.backgroundColor = "blue")
// increase.addEventListener("click",() => rect.style.borderRadius = Number(rect.style.borderRadius.replace("px", "")) + 50 + "px" )
// decrease.addEventListener("click",() => rect.style.borderRadius = Number(rect.style.borderRadius.replace('px',"")) - 10 + "px")





// console.log("Hello World");

// var name = "Indu Joshi";
// console.log(name);

// name = "Joshi";
// console.log(name);

// var name$ = "Kabita Joshi";
// console.log(name$);

// let value = 30;
// console.log(value);

// let fullName= "Indu Joshi";
// console.log(fullName[2]);

// let abc= "Banana";
// console.log(abc.length);
// console.log(abc[abc.length-1]);

// let name= "    Raj   ";
// console.log(name.length);

// let newName= name.trim();
// console.log(newName);
// console.log(newName.length);

// name= name.toUpperCase();
// console.log(name);
// name= name.toLowerCase();
// console.log(name);


// let myName= "Maharani";
// let myNewName= myName.slice(4,8);
// console.log(myNewName);


// ////typeof ..................
// let age= 25;
// console.log(typeof age);
// let school= "SARC";
// console.log(typeof school);


// ////convert  number to string.................
// let age1= 45;
// console.log(age1+ "");
// console.log(typeof (age1+ ""));

// let num= 40;
// num= String(num);
// console.log(typeof num);



// /////convert string to number................
// let age$= + "50";
// console.log(typeof age$);

// let age= "40";
// age= Number(age);
// console.log(typeof age);


// ////string concatination................
// let a= "Indu";
// let b= "Joshi";
// let name= a+" "+b;
// console.log(name);


// /////tamplete string..................
// let name= "Indu Joshi";
// let age= 25;
// let aboutMe= `My name is ${name} and i am ${age} years old.`;
// console.log(aboutMe);


// ////Booleans and comparison operator..............
// let a=10;
// let b=20;
// let c="20";
// let d=10;
// console.log(a>b);
// console.log(a<b);
// console.log(b==c);
// console.log(b===c);
// console.log(a!==c);
// console.log(b!=c);
// console.log(a<=b);
// console.log(a>=b);



// If else.....................
// let a=40;
// let b= 30;
// if (a>b){
//     console.log(`${a} is greatest.`);
// }
// else{
//     console.log(`${b} is greatest.`);
// }


// let z= 44;
// if (z%2===0){
//     console.log(`${z} is an even number.`);
// }
// else{
//     console.log(`${z} is an odd number.`);
// }

// let age= 12;
// let drink;
// if(age>=15){
//  drink= "Coffee";
// }
// else{
//    drink= "Milk";
// }
// console.log(drink);


//// Ternary (conditional) operator...........
// let age=12;
// let drink= age>=15? "Can drink coffee":" Only drink milk";
// console.log(drink);

// let num= 21;
// let check= num%2===0? `${num} is even.`: `${num} is odd.`;
// console.log(check);

// let n1=20;
// let n2=23;
// let n3=40;
// let compare = (n1 > n2) ?
// (n1 > n3 ? n1 : n3) :
// (n2 > n3 ? n2 : n3);
// console.log(compare);



//// AND & OR operator
// let name= "Indu";
// let age= 25;
// if((name[0]==="I") && (age=25)){
//     console.log("Yes, this  girl is daughter of Jamuna Joshi.");
// }
// else{
//     console.log("No,this girl is not the daughter of Jamuna Joshi.");
// }


// if((name="Kabita" )||(age= 25) ){
//     console.log("Age of the person is 25.");
// }
// else{
//     console.log("Age of the person is not 25.");
// }




// //nested if else
// let age = 25;
// let userGuess = +prompt("Guess Indu's age.");
// if( age === userGuess){
//     console.log(userGuess);
//     console.log("Congratulation!! You guess the right age.");
// }
// else{
// if(userGuess>age){
//     console.log(userGuess);
//     console.log("Sorry, Indu is not that old.");
// }
// else{
//     console.log(userGuess);
//     console.log("Sorry, Indu is not that young.");
// }
// }


// //else if
// let temp= 65;
// if( temp<0){
//     console.log("Too cold");
// }
// else if((temp>25) && (temp<40)){
//     console.log("Happy weather.");
// }
// else if(temp===40){
//     console.log("Too hot.");
// }
// else if(temp===25){
//     console.log("Boring.");
// }
// else{
//     console.log("Okay ready to sleep.");
// }



//// Switch statement
// let day= "c";
// switch(day){
//     case "a": 
//     console.log("sunday");
//     break;
//     case "b": 
//     console.log("monday");
//     break;
//     case "c": 
//     console.log("tuesday");
//     break;
//     case "d": 
//     console.log("wednesday");
//     break;
//     case "e": 
//     console.log("thursday");
//     break;
//     case "f": 
//     console.log("friday");
//     break;
//     case "g": 
//     console.log("saturday");
//     break;
// }


// while loop
// let i=0;
// while(i<= 10){
//     console.log(i);
//     i++;
// }
// let total=0;
// while(i<=50){
// total= total+i;
// i++;
// }
// console.log(total);

// i=1;
// let table= 2;
// while(i<=10){
//     table= 2*i;
//     console.log(`2 * ${i} = ${table}`);
//     i++;
// }


//// do while loop
// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10);
 

// let total=0;
// do{
//     total=total+i;
//     i++;
// }
// while(i<=5);
// console.log(total);


// let table=0;
// do{
//     table= 2 * i;
//     i++
//     console.log(`2 * ${i} = ${table}`);
// }
// while(i<=10);



//// for loop

// for(i=0;i<=10;i++){
//     console.log(i)
// }

// let i=1;
// total=0;
// for(i=1;i<=5;i++){
//     total= total+i;
// }
// console.log(total)

// table=0;
// for(i=1;i<=10;i++){
//     table= 2*i;
//     console.log(`2 * ${i} = ${table}`);
// }


//// break and continue
// let i=1;
// for(i=1;i<=10;i++){
//     if(i===5){
//         break
//     }
//     console.log(i);
// }

// for(i=1;i<=10;i++){
//     if(i===5){
//         continue
//     }
//     console.log(i);
// }



//// Array..........
// let fruits = ["Apple", "Banana", "Orange", "Pineapple"];
// console.log(fruits);
// console.log(fruits[2]);


// let clothes = ["cap", "pant", "T-shirt", "Skert", "shoes"];
// clothes[2]= "Shirt";
// console.log(clothes);

//// array push pop....................
// let fruits = ["Apple", "Banana", "Orange", "Pineapple"];
// console.log(fruits);
// ///push
// fruits.push("Grapes","Mango");
// console.log(fruits);
// ///pop
// let poppedFruit= fruits.pop();
// console.log(fruits);
// console.log(`Popped fruit is ${poppedFruit}`);


//// Array shift unshift..........
// let fruits = ["Apple", "Banana", "Orange", "Pineapple"];
// console.log(fruits);
// //unshift
// let newFruit= fruits.unshift("Grapes","Mango");
// console.log(fruits);
// console.log(`New fruit is ${newFruit}`);
// //shift
// let removedFruit= fruits.shift();
// console.log(fruits);
// console.log(`New fruit is ${removedFruit}`);


////Splice method (start,how many, insert).........
// let fruits = ["Apple", "Banana", "Orange", "Pineapple","Grapes","Mango"];
// console.log(fruits);
// fruits.splice(0,6,"Potato","Tomato","Chilly");
// console.log(fruits);



// // How to clone Array...........
// //method 1(spread operator)
// let array1= ["item1, item2"];
// console.log(array1);

// let array2=["item3", "item4"];
// console.log(array2);

// let array3= [...array1,"item5","item6"];    //new array
// console.log(array3);

// let array4= [...array1, ...array2, ...array3];
// console.log(array4);

// console.log(array1===array2===array3===array4);   //each arrays are different

//// method 2
// let array1= ["item1, item2"];
// console.log(array1);

// let array2=[].concat(array1,["item3", "item4"]);
// console.log(array2);

// method 3
// let array1= ["item1, item2"];
// console.log(array1);

// let array2=array1.slice(0).concat(["item3", "item4"]);
// console.log(array2);


//// For loop in Array........
// let fruits = ["Apple", "Banana", "Orange", "Pineapple","Grapes","Mango"];
// console.log(fruits);
// console.log(fruits.length);
// console.log (fruits[fruits.length-1]);

// for(let i=0;i<=fruits.length-1;i++){
//     console.log(fruits[i].toUpperCase());
// }

// let fruits = ["Apple", "Banana", "Orange", "Pineapple","Grapes","Mango"];
// console.log(fruits);
// let fruits2 =[];
// for(i=0;i<fruits.length;i++){
//     fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits2);

// const fruits = ["Apple", "Banana"];   //can push new item in array while using const
// fruits.push("Orange");
// console.log(fruits);



//// While loop in array..............
// let fruits = ["Apple", "Banana", "Orange", "Pineapple","Grapes","Mango"];
// console.log(fruits);
// let i=0;
// while(i<=fruits.length-1){
//     console.log(fruits[i].toUpperCase());
//     i++;
// }


////Do while loop in array........
// let fruits = ["Apple", "Banana", "Orange", "Pineapple","Grapes","Mango"];
// console.log(fruits);
// let i=0;
// do{
//     console.log(fruits[i].toUpperCase());
//     i++;
// }
//  while(i<fruits.length);


////for of loop in array...........
// let fruits = ["Apple", "Banana", "Orange", "Pineapple","Grapes","Mango"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

////for in loop in array...............
// let fruits = ["Apple", "Banana", "Orange", "Pineapple","Grapes","Mango"];
// for(let index in fruits){
//     console.log(fruits[index].toUpperCase());
// }


////Array Distrusturing...................Unpacking elements in array
// let fruits = ["Apple", "Banana", "Orange", "Pineapple","Grapes","Mango"];
//console.log(fruits.indexOf("Pineapple"))

//// 1st way
// let firstFruit= fruits[0];
// let secondFruit= fruits[1];
// let lastFruit= fruits[fruits.length-1];
// console.log(firstFruit);
// console.log(secondFruit);
// console.log(lastFruit);

// //2nd way 
// console.log(fruits.length);
// let[firstFruit, secondFruit, , , , lastFruit] = fruits;  //element's index will be 0 from left to right in increasing order and to get last element we need to leave commas for other middle elements
// console.log(firstFruit);
// console.log(secondFruit);
// console.log(lastFruit);

////3rd way
// let newArray= fruits.slice(0,4);  //slice(0,4) means it takes the element from o index to 3 index(we can put single value in slice).
// console.log(newArray);

////4th way
// let firstFruit, secondFruit, lastFruit;
// [firstFruit,secondFruit,,,, lastFruit]=fruits;
// console.log(firstFruit);
// console.log(secondFruit);
// console.log(lastFruit);


// // Object...............
// const person={
//     name:"Indu Joshi",
//     age:"25",
//     favouriteSubject: "Computer"
// }
// console.log(person);
// console.log(person.favouriteSubject);


// //Array in Object........
// const food={
//     nonVeg:"Chicken",
//     veg: "Salad",
//     mix:["Juice", "Rice", "Daal", "Meat","Fish"]
// }
// console.log(food);
// //// adding key value pair to object....
// food.favouriteRestaurant="Corner Cafe"  
// console.log(food);


// //Difference between dot and bracket [].....
// const myKey="email";
// const myObj={
//     name:"Indu Joshi",
//     age: 25,
//     address:"Nimbukheda",
//     "my address":"Nepal"
// }
// console.log(myObj);
// // [] is used when key value is given in more than one word i.e "my Name": "indu"
// console.log(myObj["my address"]);  
// myObj[myKey]="indujoshi@gmail.com"; //It will add email key in the object
// console.log(myObj);

// ////How to iterate object...........
// //for in loop..............
// const person ={
//     name:"Indu",
//     age: 25,
//     "person hobbies":["dance", "sing", "code"]
// }
// for (let keyValue in person){
//     console.log(keyValue);    //will give keys
// }
// for (let keyValue in person){
//     console.log(person[keyValue]);  //will give value
// }
// for (let keyValue in person){
//     console.log(`${keyValue}: ${person[keyValue]}`);
//   // or console.log(keyValue + ": " + person[keyValue]);
// }       //will print both keys and their values


// ////For of loop..........(Object.keys)
// for(let keyValue of Object.keys(person)){
//     console.log(keyValue+ ":" +person[keyValue]);
// }


// ////Computed property.....
// const key1= "object1";
// const key2= "object2";

// const value1="myvalue1";
// const value2="myvalue2";

// const myobj={
//     [key1]= value1,
//     [key2]= value2
// }
// console.log(myobj);
// //or
// const myobj={}
// myobj[key1]= value1;
// myobj[key2]= value2;
// console.log(myobj);


////Spread operator in object..........
// const obj1={
//     name: "Indu Joshi",
//     age:25,
// };
// const obj2={
//     address: "Nimbukheda",
//     family_member:5,
//     father: "Khemraj Joshi"
// };
// const obj3={
//     mother: "Jamuna Joshi",
//     brother:"Pankaj and Naresh",
//     hobby: "Coding"
// };
// const newObj={...obj1, ...obj2 ,...obj3, subject:"CSIT"};
// console.log(newObj);


// ////Object Destructuring................
// const info={
//     name:"Milan",
//     age:26,
//     height:5.4,
//     hobby:"Coding"
// }
// //1st way
// const name= info.name;
// const age= info.age;
// console.log(name, age);
// //2nd way
// const {name, height} = info;
// console.log(name);
// console.log(height);
////3rd way
// let{name:var1, age:var2, ...other}=info;
// console.log(var1);
// console.log(var2);
// console.log(other);


////Object inside array.................
// const person=[
//     {name:"Indu", subject:"CSIT",age:25, address:"Nimbukheda",hobby:"Coding",},
//     {name:"Kabita", subject:"CSIT",age:24, address:"Attariya", hobby:"Coding",},
//     {name:"Milan", subject:"CSIT",age:26, address:"Chitwan",hobby:"Coding"}
// ]
// console.log(person);
// for(let info of person){
//     console.log(info);
// }

// //......Nested Destructuring........
// const [user1, user2, user3]=person;
// console.log(user1, user2);

// const [{name},{address},{age}]=person;
// console.log(name);
// console.log(address);
// console.log(age);

// const [{name:name1,age},  ,{age:age3}]=person;
// console.log(name1);
// console.log(age);
// console.log(age3);


////........Function................////
// function birthday(){
//     console.log("Happy birtday to you...");
// }
// birthday();


// function add(a,b){
//     console.log(a+b);
// }
// add(5,7);

// function sub(x,y){
//     return x-y;
// }
// const subtraction= sub(40,3);
// console.log(subtraction);

// function isEven(num){
//     if(num%2===0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd");
//     }
// }
// isEven(601);


// function isEven(num){
//    return num%2===0;
// }
// console.log(isEven(60));


// function firstchar(string){
//     return string[0];
// }
// console.log(firstchar("Indu"));

// function findTarget(array, target){
//     for(let i=0; i<array.length;i++){
//         if (array[i]===target){
//             return (`The index of target is ${i}`);
//         }
//     }
//     return  ("The number you have entered is not present in array");
// }
// const v=findTarget([2,3,4,5,6,7,8,9,0], 6);
// console.log(v);


// function info(name, age){
//     console.log(`My name is ${name} and i am ${age} years old.`);
// }
// info("Indu", 25);
// info("Milan",26);
// info("Kabita",24);

// ////or
// function info(name, age){
//    return (`My name is ${name} and i am ${age} years old.`);
// }
// console.log(info("Indu",25))


////.......Function expression........////works same as function//
//  const add= function(a,b){
//     console.log(a+b);
//  }
//  add(2,9);  


//  const isEven= function(num){
//     return num % 2 === 0;
//  }
//  console.log(isEven(5));


///........Arrow Function.......////
// const add=(a,b,c)=>{
//     return a+b+c;
// }
// console.log(add(2,5,7));

// const intro=(name,age,address)=>{
//     return (`My name is ${name}, i am ${age} years old and i am from ${address}.`);
// }
// const info= intro("Indu Joshi",25,"Nimbukheda");
// console.log(info);

// const isEven= num => num%2===0;   //if input parameter is single we can write it without ( ).
// console.log(isEven(9));

// const firstChar=(string)=> (string[0]);
// console.log(firstChar("Kabita"));

// const find= (array, target)=>{
//     for(let i=0 ; i<array.length; i++){
//         if(array[i]===target){
//             console.log("Index of target is ${i}");
//         }
//         else{
//             console.log("Your value is not present in the array.")
//         }
//     }
// }
// const a=[1,4,3,5];
// const t=7;
// find(a,t);
  

////Hoisting....,,
///Hoisting is a kind of default behavior in which all the declarations either variable declaration or function declaration are moved at the top of the scope just before executing the program's code.
// hello();
// function hello(){
//     console.log("Hello world.");
// }

// console.log(a);
// var a;


////Function inside function.............
// const mainFunc=()=>{
//     const add=(a,b)=> {
//         let ad= a+b;
//         console.log(`Addition of ${a} and ${b} is ${ad}`);
//     }
//     const sub=(x,y)=>{
//         let sb= x-y;
//         console.log(`Subtraction of ${x} and ${y} is ${sb}`);
//     }
//     const mul=(p,q)=>{
//         let ml= p*q;
//         console.log(`Multiplication of ${p} and ${q} is ${ml}`);
//     }
//     console.log("This is mainFunc.");
//     add(8,9);
//     sub(9,2);
//     mul(67,3);
// }
// mainFunc();


////............Lexical scope...........
//  const name="Kalpana";
// function myFunction(){
//     // const name="Rajesh";
//     // console.log("This is myFunction", name);

//     const myFunc= function(){
//         // const name="Kabita";
//         console.log("This is myFunc", name);

//         const func = ()=>{
//             // const name="Milan";
//             console.log("This is func", name );
//         }
//         func();
//     }
//     myFunc();
// }
// myFunction();



// ////.......Block scope vs function scope..
// //let and const are block scope and var is function scope
// {
//     let myName="Indu Joshi";
//     console.log (myName);  ////block scope
// }
// {
//     const myName="Kabita Joshi";
//     console.log (myName);  ////block scope
// }
// {
//     var myName="Milan Poudel";
// }
// console.log (myName);  ////function scope

// function myFunc(){
//     if(true){
//         var myName="Indu Joshi";
//         console.log(myName);
//     }
//     if(true){
//         var myName="Indu Joshi";
//         console.log(myName);
//     }
//     console.log(myName);
// }
// myFunc(); ////function scope
 



////............Default parameter......
// function mul(a,b){   ////old method
//     if(typeof b ==="undefined"){
//         b = 1;
//     }
//      const multiplication=(a*b);
//      console.log(`Multiplication of ${a} and ${b} is ${multiplication}.`);
// }
// mul(9,6);
// mul(6);

// function add(x,y=0){ ////new method
//      const addition=(x+y);
//      console.log(`Addition of ${x} and ${y} is ${addition}.`);
// }
// add(9,6);
// add(6);


////Rest parameters.........
// function numbers(a,b,...c){
//     console.log(`a is ${a}.`);
//     console.log(`b is ${b}.`);
//     console.log(`c is ${c}.`);
// }
// numbers(1,5,7,9,3,5);

// function addAll(...num){
//     let sum=0;
//     for(let i=0; i<num.length;i++){
//            sum=sum+num[i];
//     }
//     console.log(`Total value is ${sum}`);
// }
// addAll(1,5,7,9,3);




////.......Parameter Destructuring.......
// const person={
//     name:"Kalpana",
//     address:"Nimbukheda",
//     age:25
// }
// function details(obj){
//     console.log(`My name is ${obj.name}, i live in ${obj.address} and i am ${obj.age} years old.`);
// }
// details(person); ////normal
 

// function detail({name,address,age}){
//     console.log(`My name is ${name}, i live in ${address} and i am ${age} years old.`);
// }
// detail(person); ////Parameter destructuring


////.....Callback function......passing a function as a argument in a function..
// function func2(name){
//     console.log("This is func2");
//     console.log(`Your name is ${name}`)
// }
// function func1(callback){
//     console.log("This is func1.");
//     callback("Rani");
// }
// func1(func2);


// function myIntro(name,age,address,subject){
//     console.log(`Hey I am ${name}, my age is ${age} and currently i am studying ${subject}. And I am from ${address}. Thank you!!!`)
// }
// function intro(callback){
//     console.log("My Introduction:");
//     callback("Indu Joshi", 25, "Mahendranagar", "Bsc CSIT");
// }
// intro(myIntro);

// function myIntro(name,age){
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
// }
// function intro(callback){
//     console.log("Introduction:");
//     callback("Indu","age");
// }
// intro(myIntro);

// function person(){}
// function info(name,age,address,callback){
//     for(let i=1; i<=4; i++){
//         console.log("Roll No.:", i);
//     }
//     console.log(` Name: ${name} \n Age:${age} \n Address: ${address} `);
//     callback();
// }
// info("Indu Joshi",25,"Mahendranagar",person);
// info("Kabita Joshi",24,"Attariya",person);
// info("Milan Paudel",26,"Chitwan",person);





////Function returning function.........
// function myFunc(){
//     console.log("Hello");
//     function func(){
//         return "Hello World";
//     }
//     return func;
// }
// const answer= myFunc();
// console.log(answer());


// function person(name,age){
//     console.log("My Introduction is given below:->");
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     function intro(address){
//         console.log(`Address: ${address}`);
//     }
//     return intro;
// }
// const introduction = person("Indu Joshi", 25);
// introduction("Nimbukheda");


////.....................Array Methods.........................
////foreach
////map
////filter
////reduce

////foreach................................
// const numbers=[22,40,53,56,57,81];
// // function find(num ,index){
// //     console.log(`Index is ${index} and number is ${num} `);
// // }
// // for(let i=0; i<numbers.length;i++){
// //     find(numbers[i],i);
// // }

// numbers.forEach(function(num, index){
//     console.log(`Index is ${index} and number is ${num} `);
// })

// const users=[
//     {firstName:"Indu Joshi", age:25},
//     {firstName: "Milan Paudel", age:25},
//     {firstName:"Kabita Joshi", age:25}
// ]
// users.forEach(function(user){
// console.log(user.firstName);
// });


// const user=[
//     {firstName:"Indu Joshi", age:25},
//     {firstName: "Milan Paudel", age:25},
//     {firstName:"Kabita Joshi", age:25}
// ]
// user.forEach((use)=>{
// console.log(use.firstName);
// });


/////,..........map method......
// const numbers=[2,5,7,8,4];
// const squareNumber = numbers.map(function(num){
//       let square= num*num;
//       return square; 
// })
// console.log("Square numbers are:",squareNumber);


// const number= numbers.map(function(numb,index){
//     return (`Number is ${numb} and index is ${index}.`);
// })
// console.log(number);

// const myArray=[23,56,77,27,55,90];
// const evenNumber= myArray.map(function(num){
//     if(num%2===0){
//         return (`${num} is even.`);
//     }
//     else{
//         return (`${num} is odd.`);
//     }
// })
// console.log(evenNumber);

// const users=[
//      {firstName:"Indu Joshi", age:25},
//      {firstName: "Milan Paudel", age:25},
//      {firstName:"Kabita Joshi", age:25}
//  ]
// const myUser= users.map(function(user){
//     return (user.firstName);
// })
// console.log(myUser);


////......Filter Method.............(always returns true or false only)
// const myArray=[23,56,77,27,55,90];
// const oddNumber= myArray.filter(function(num){
//     return num%2!==0;
// })
// console.log(`Odd numbers are:${oddNumber}`);

// const array=[23,56,72,27,55,90];
// const number= array.filter(function(numb){
//     return numb%3===0;
// })
// console.log(`The numbers which are exactly divisible by 3 are:${number}`);


// //.......Reduce Method...........................
//// accumulator          currentValue      return
////  1            +          2              = 3
////  3            +          3              = 6
////  6            +          4              = 10
////  10           +          5              = 15
// const numbers=[1,2,3,4,5,6,7,8,9,10];

// const sum= numbers.reduce(function(accumulator, currentValue){
//     return accumulator+ currentValue;
// },100)
// console.log(sum);
////Realist example:-->
// const userCart=[
//     {productId:1,productName:"mobile", price:2000},
//     {productId:2,productName:"radio", price:3000},
//     {productId:3,productName:"TV", price:5000}
// ]
// const total= userCart.reduce(function(totalPrice, currentPrice){
//     return totalPrice+ currentPrice.price;
// },0)
// console.log(total);

// const myArray=[
//     {name: "Indu", age:25, salary:25000},
//     {name: "Kabita", age:24, salary:35000},
//     {name: "Milan", age:26, salary:45000}
// ];
// const salary= myArray.reduce((totalSalary, currentSalary)=>{
//     return totalSalary+ currentSalary.salary;
// },0);
// console.log(`Total salary is ${salary}`);


////Sort method........................................
// const num=[23,56,3,567,80,12,22,43];
// num.sort(function(a,b){
//     return a-b; //// print in accending order & is need decending order do b-a.
// })
// console.log(num);

// const person=["Indu", "Ram", "Pankaj","jamuna","abhishek", "Kabita","Anup"]; 
// person.sort();  ////will arranged by their ASCII value so small letter name comes later
// console.log(person);

// const number=[12,2,1,5,6777,888,9000];
// number.sort(); ///is sorted on the basis of their ASCII code (numbers treated as string in this program)
// console.log(number);

// const product= [
//     {productId:1, productName: "Mobile", price: 22000},
//     {productId:2, productName: "Radio", price: 2000},
//     {productId:3, productName: "Laptop", price: 82000},
//     {productId:4, productName: "TV", price: 32000},
//     {productId:5, productName: "Fridge", price: 24000},
//     {productId:6, productName: "Iron", price: 1200}
// ]
// // product.sort(function(a,b){
// //     return a.price-b.price;
// // })
// console.log(product);

// ///Low to HIgh  in another array
// const lowToHigh=product.slice(0).sort(function(a,b){ //// slice is used to story this in new array bcoz sort doesn't give new array but update the array
//     return a.price-b.price;
// })
// console.log(lowToHigh);

// ///High to Low in another array
// const highToLow=product.slice(0).sort(function(a,b){
//     return b.price-a.price;
// })
// console.log(highToLow);


////Find Method.......................................
// const animals=["tiger","monkey","cat", "dog", "elephant", "cow"]
// const animal= animals.find(function(string){
//     return string.length===3; //only return 1st string which length is 3
// })
// console.log(animal);

// const users=[
//     {userId:1, userName:"Indu"},
//     {userId:2, userName:"Kabita"},
//     {userId:3, userName:"Kalpana"},
//     {userId:4, userName:"Aakriti"},
//     {userId:5, userName:"Milan"}
// ]
// const myUser= users.find((user)=>{
//     return user.userId===3;
// })
// console.log(myUser);


////Every method.........check for every element...........only gives true and false value
// const numbers=[2,4,5,6,8,21];
// const number= numbers.every((evenNum)=>{
//     return evenNum%2===0;
// })
// console.log(number); ////it only gives true when every numbers are even

// const users=[
//     {productId:1, productName:"Mobile", price: 23000},
//     {productId:2, productName:"Laptop", price: 29000},
//     {productId:3, productName:"Watch", price: 28900},
//     {productId:4, productName:"Radio", price: 26000},
//     {productId:5, productName:"TV", price: 12000}
// ]
// const user= users.every((product)=>product.price<=30000);
// console.log(user);


////Some methods..................
// const numbers=[2,7,5,6,8,21];
// const number= numbers.some((evenNum)=>{
//    return evenNum%2===0; ///returns true if atleast 1 element is even
//  })
//  console.log(number);


// const users=[
//         {productId:1, productName:"Mobile", price: 33000},
//         {productId:2, productName:"Laptop", price: 49000},
//         {productId:3, productName:"Watch", price: 5890000},
//         {productId:4, productName:"Radio", price: 260000},
//         {productId:5, productName:"TV", price: 12000}
//     ]
//     const user= users.some((product)=>product.price>30000);
//     console.log(user);



////Fill method.................value, start, end........
// const myArray= new Array(5).fill(25000);
// console.log(myArray); ///will create a array of length 5 and value 25000 as each element

// const myArray=[0,1,2,3,4,5,6,7,8,9];
// myArray.fill(2.5,0,5); //// it will fill 2.5 as a value in the index from 0 to 4.
// console.log(myArray);


////Splice method....(start, delete, insert),...........
// const numbers=[11,22,33,44,55,66,77,88,99];
// numbers.splice(0,5, 10,20,30,40,50) ////start fron 0 index and delets 5 items and insert 10,20,30,40,50
// console.log(numbers);

// const names=["Indu", "Kabita", "Milan","Jamuna", "Khemraj"];
// const deletedItems = names.splice(3,2,"Kalpana","Aakriti"); ////will start from 3 index and delete 2 item and insert kalpana and aakriti
// console.log(names); //will give updated array with new values
// console.log(deletedItems);  ///will give the deleted items


////Iterables...........where we can use for of loop..
// const myName= "Indu";    ///String is iterable
// for(let char of myName){
//     console.log(char);
// }

// const myArray=["cat", "dog", "tiger", "cow"];  //array is also iterable
// for(let element of myArray){
//     console.log(element);
// }

// const myObj= {           //object is not iterable
//     firstName:"Indu",
//     lastName:"Joshi",
//     age:25,
//     address:"Nimbukheda"
// }
// for(let keyvalue of myObj){
//     console.log(myObj);
// }


////Array like object....(which has length property or which we can access from their index)
// const myString="Nimbukheda";
// console.log(myString.length);
// console.log(myString[3]);


////Sets.......It is iterable. 
// const numbers= new Set([11,11,22,33,44,55]);  ///duplicate value is not allowed in set so will not take 11 twice
// console.log(numbers);
// console.log(numbers[3]); //no index based access

// const myArray=[1,2,3,4,5];
// const number= new Set();
// number.add(11);
// number.add("Hello");
// number.add(myArray);
// number.add(myArray); //will not added bcoz duplicate not allowed
// number.add([125,225]);
// number.add([125,225]);/// here same values is added bcoz address of these two arrray are different
// console.log(number);

// if(number.has(01)){   //will check if 01 is present in the set or not
//     console.log("Present in set");
// }
// else{
//     console.log("Not present in set");
// }
// console.log(number);

// const mySet= new Set([1,2,3,4,5,6,7,8,9]);
// for(let number of mySet){
//     console.log(number);
// }

// const ids= [1,2,6,4,1,33,23,7,33,23];
// const uniqueElements= new Set(ids);
// console.log(uniqueElements);
// console.log(ids);
// let length=0;
// for(let element of uniqueElements){
//     length++;
// }
// console.log(length); ////to find length of set



////Map.....................
// const person= new Map();
// person.set("firstName", "Indu"); //to add values in map
// person.set("age",25);
// person.set(1,"one"); /// we can set key of any type
// console.log(person);
// console.log(person.get("age")); //to get values from map
// console.log(person.keys());  //will print keys
// for(let key of person.keys()){  //will print keys
//     console.log(key, typeof key);
// }
// for(let key of person){  //will print keys and value in an array
//          console.log(key); 
// }

// for (let [key, value] of person){  /// will print key and value in normal form
//     console.log(key, value);
// }


// const person= new Map([["firstName","Indu"],["lastNAme","Joshi"]]);
// console.log(person);  ///can directly pass key value painr in map


// const person1={
//     firstName: "Indu",
//     lastName: "Joshi",
//     age: 25
// }
// const person2={
//     firstName: "Pankaj",
//     lastName: "Joshi",
//     age: 23
// }

// const extraInfo= new Map();
// extraInfo.set(person1, {address:"Nimbukheda", gender: "female"});
// extraInfo.set(person2, {address:"Baitadi", gender: "Male"});
// console.log(extraInfo);
// console.log(person1.age);
// console.log(extraInfo.get(person1).address);  
// console.log(extraInfo.get(person2).address);  



///Cloning using object.assign..................
// const myObj={
//     key1:"Value1",
//     key2:"Value2"
// }
// ////const myObj2= {...myObj, key3:"value3"} ///spread operator method
// const myObj2= Object.assign({}, myObj);
// myObj2.key3="Value3";
// console.log(myObj2);


////Optional Chaining......Optional Chaining in JavaScript is used to return undefined for accessing an object property that doesn't exist and whose parent property is nullish (null or undefined). 
// const person={
//     firstName:"Indu",
//     lastName:"Joshi",
//     // address: {houseNumber:2001}
// }
// ///console.log(person.firstName);
// ///console.log(person.address.houseNumber); //but when address is not present in person object then it will give an error.
// console.log(person?.firstName);
// console.log(person?.address?.houseNumber); //if this  doesn't exist on object then it will give undefined.



////Methods....are function inside object....
// const person={
//     firstName:"Kabita",
//     lastName:"Joshi",
//     age:25,
//     about: function(){
//         console.log(`Person's name is ${this.firstName} ${this.lastName} and person's age is ${this.age}.`)  /// this is an object which is calling this function
//     }
// }
// person.about();

// function personInfo(){
//     console.log(`Person's name is ${this.firstName} ${this.lastName} and person's age is ${this.age}.`)
// }
    
// const person1={
//     firstName:"Kabita",
//     lastName:"Joshi",
//     age:24,
//     about: personInfo
// }
// const person2={
//     firstName:"Indu",
//     lastName:"Joshi",
//     age:25,
//     about: personInfo
// }
// const person3={
//     firstName:"Milan",
//     lastName:"Paudel",
//     age:26,
//     about: personInfo
// }

// person1.about();
// person2.about();
// person3.about();



/////Call/ Apply/ Bind........................---it specify the value of this
////call 
// const user1={
//     firstName:"Indu",
//     age:25,
//     about: function(movie, song){
//         console.log(`${this.firstName} is ${this.age} years old. Her/His favourite movie is ${movie} and favourite song is ${song}`);
//     }
// }
// const user2={
//     firstName:"Kabita",
//     age:24
// }
// //user1.about.call(); //will give undefined
// user1.about.call(user1, "Namaste London", "'Dhan bina ko man thulo ki man bina ko dhan'");
// user1.about.call(user2,"Gajni","'Jab koi baat bigad jaye'");


// function about(movie, song){
//     console.log(`${this.firstName} is ${this.age} years old. Her/His favourite movie is ${movie} and favourite song is ${song}`);
// }
// const user1={
//     firstName:"Indu",
//     age:25
// }
// const user2={
//     firstName:"Kabita",
//     age:24
// }
// //about.call(); //will give undefined
// about.call(user1, "Namaste London", "'Dhan bina ko man thulo ki man bina ko dhan'");
// about.call(user2,"Gajni","'Jab koi baat bigad jaye'");

////Apply......
// function about(movie, song){
//     console.log(`${this.firstName} is ${this.age} years old. Her/His favourite movie is ${movie} and favourite song is ${song}`);
// }
// const user1={
//     firstName:"Indu",
//     age:25
// }
// const user2={
//     firstName:"Kabita",
//     age:24
// }
// //about.call(); //will give undefined
// about.apply(user1, ["Namaste London", "'Dhan bina ko man thulo ki man bina ko dhan'"]);
// about.apply(user2,["Gajni","'Jab koi baat bigad jaye'"]);  ///pass the arguments in [ ]

////Bind............
// function about(movie, song){
//     console.log(`${this.firstName} is ${this.age} years old. Her/His favourite movie is ${movie} and favourite song is ${song}`);
// }
// const user1={
//     firstName:"Indu",
//     age:25
// }
// const user2={
//     firstName:"Kabita",
//     age:24
// }
// //const fun=about.call(); //will give undefined
// //fun();
// const func1=about.bind(user1, "Namaste London", "'Dhan bina ko man thulo ki man bina ko dhan'");
// const func2=about.bind(user2,"Gajni","'Jab koi baat bigad jaye'");
// func1(); // returns function and need to call it
// func2();


/////__proto__...........................................

////FizzBuzz
//  let myArray= [];
//  const answer = function(num) {
//     for (let i = 0; i < num; i++) {
//         myArray[i] = String(i+1);
//     if (num%3==0 && num%5==0) {
//         myArray[num-1]="FizzBuzz";
//     } 
//     else if(num%3==0) { 
//         myArray[num-1]="Fizz";  
//     }
//     else if (num%5==0) {                         
//         myArray[num-1]="Buzz";
//     } 
//     else{
//         myArray[num-1]= String(num);
//     }                           
// }
// return myArray
// }
//  console.log(answer(3));
 
