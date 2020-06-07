// Chap # 1
// Q # 1    
alert("Welcome JavaScript")


// Q # 2
alert("Error! Please Enter a valid password.")

// Q # 3
alert("Welcome to JS Land...\nHappy Coding!")

// Chap # 2
// Q # 1,2,3,4
var username;
var myName = "Umair Zafar";
var age = 21;
var course = "Cerified Mobile Application Developemnt";
var message = "Hello World"

alert(myName);
alert("Age is 22");
alert(course);

// Q # 6
var email = "Umair.Shah1995@gmail.com";
alert("My email address is " + email);

//Q # 7
var book = "A smarter\n way to learn JavaScript";
alert("I m trying to learn from the Book. " + book)

//Q # 8 
document.write("Yah! I can write HTML content through JavaScript")

// Chapter # 3
// Q # 1
var age = prompt(" Enter Your age", "")
alert("I m  " + age + " year old")

// Q # 3
var birthYear = 1996;
document.write("My Birth Year is " + birthYear)

//Chapter # 4
// Q # 1
var one, two, three;


// Q # 3
<h3>Rules for naming JS variable </h3>
document.write("Varibles name can only contain numbers, $ and _ . For example: my_1stVarible </br>")
document.write("Variable must begin with a Letter, $ or _ .Fro example: $name. _name or name </br>")
document.write("Variables name are case Sensitive </br>")
document.write("Variables name should not be JS keywords </br>")


// Chapter 4
// Q # 1
var num1 = 3;
var num2 = 5;
var add = num1 + num2;

document.write("Sum of " + num1, " and " + num2, " is " + add)

// Q # 2
var num1 = 10;
var num2 = 5;
var subtract = num1 - num2;

document.write("Subtraction from " + num1, " and " + num2, " is " + subtract)

var num1 = 10;
var num2 = 5;
var multiply = num1 * num2;

document.write("Multiplying from " + num1, " and " + num2, " is " + multiply)

var num1 = 10;
var num2 = 5;
var divide = num1 / num2;

document.write("Dividing from " + num1, " and " + num2, " is " + divide)

var num1 = 10;
var num2 = 5;
var modulus = num1 % num2;

document.write("Modulus from " + num1, " and " + num2, " is " + modulus)

//Q # 3
var test;
var num = 5;
var num2 = num + 1;
var num3 = num2 + 7;
var num4 = num3 - 1;
var num5 = num4 % 12;

// Q # 3 
document.write("Value after variable declaration is " + test, "</br>")

// Q # 3 
document.write("Initial value:" + num, "</br>")

// Q # 3
document.write("Value after increment is:" + num2, "</br>")

// Q # 3 
document.write("Value after addition is: " + num3, "</br>")

// Q # 3 
document.write("Value after decrement is: " + num4, "</br>")

// Q # 3 
document.write("The remainder is: " + num5)

// Q # 4
var ticket_price = 600;
cost_of_buying = ticket_price * 5;

document.write("Total cost to buy 5 tickets to a movie is " + cost_of_buying, "PKR")

// Q # 5
for (var i = 1; i <= 10; i++) {
    document.write("4" + "x" + i + "=" + 4 * i + "</br>")
}

//Q # 6
var celcius_temp = 25;
var fahrenheit_temp = 70;
var Cel = (fahrenheit_temp - 32) * 5 / 9;
var Fah = (celcius_temp * 9 / 5) + 32;

document.write(+celcius_temp + "C " + " is " + Fah + "F" + "</br>")

document.write(+fahrenheit_temp + "F " + " is " + Cel + "C")

//Q # 8
//<h1>Marks Sheet </h1>
var total_marks = 980;
var marks_obtained = 804;
var percentage = marks_obtained / total_marks * 100;

document.write("Total Marks: " + total_marks + "</br>" + "Marks obtained:" + marks_obtained + "</br>" + "Percentage" + percentage)


//Q # 9
//<h1> Currency in PKR </h1>
var us_dollars = 10;
var saudi_riyal = 25;
var one_us_dollar = 104.80;
var one_saudi_riyal = 28;
var convert_dollar = us_dollars * one_us_dollar;
var convert_riyal = saudi_riyal * one_saudi_riyal;
var total = convert_riyal + convert_dollar;

document.write("Total currency in PKR: " + total)

// Q # 10
var num1 = 5;
var num2 = 10;
var num3 = 3;
var result = num1 * num2 / num3;

document.write("Result of " + num1 + "," + num2 + " and " + num3 + " is: " + result)

// Q # 12
var radius = 20;
var circumference_circle = 2 * 3.142 * radius;
var area_of_circle = 3.142 * radius * radius;

document.write("Radius of a circle: " + radius + "</br>" + "The circumference is: " + circumference_circle
    + "</br>" + "The area is: " + area_of_circle
)

// Q # 13
// <h1>The Lifetime Supply Calculator</h1>
var fav_snack = "Chocolate Chip";
var age = 15;
var max_age = 65;
var amount_of_snack_per_day = 3;
var result = max_age + age * amount_of_snack_per_day;

document.write("Favorite Snake: " + fav_snack + "</br>")
document.write("Current age: " + age + "</br>")
document.write("Estimated maximum age: " + max_age + "</br>")
document.write("Amount of snack per day: " + amount_of_snack_per_day + "</br>")
document.write("You will need " + result + fav_snack + " to last until the ripe old age of " + max_age)



// Chapter # 6 to 9
// Q # 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;


document.write("--a is: 1" + "</br>")
document.write("--b is:  0" + "</br>")
document.write("++b is: 1" + "</br>")
document.write("b-- is: 1" + "</br>")
document.write("a is: 1" + "</br>")
document.write("b is: 0" + "</br>")
document.write("result is: 3 " + "</br>")

// Q # 3
var name = prompt("What's your name?")
document.write("Welcome to JavaScript " + name)

//Q # 5
var number = prompt("Enter a Table number?")

for (var i = 1; i <= 10; i++) {
    if (number == "") {
        document.write("5" + "x" + i + "=" + 5 * i + "</br>")
    }
    else
        document.write(+number + "x" + i + "=" + number * i + "</br>")
}

// Chapter # 9 to 11
// Q # 1
var city = prompt("Enter the City Name")

if (city == "karachi") {
    alert("Welcome to City of Lights")
}

// Q # 2
var gender = prompt("Enter Your gender")

if (gender == "male") {
    alert("Welcome Sir")
    if (gender == "female") {
        alert("Welcome Ma'am")
    }
}

// Q # 4
var fuel = prompt("How many remaining fuel in car")

if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}

// Q # 5
// (a)
alert("Given condition of varibale a is true")

// (b)
alert("Given condition of varibale b is not true")

// (c)
alert("condition 2,3 and 4 is true")

// (d)
alert("The Cost is equal")

// (e)
alert("True")

// (f)
alert("car is smaller than cat")

// Q # 6
//   <h1>Marks Sheet</h1>
var totalMarks = prompt("Total Marks")
var obtainedMarks = prompt("Obtained marks of math")
var obtainedMarks = prompt("Obtained marks of urdu")
var obtainedMarks = prompt("Obtained marks of english")


if (obtainedMarks >= 80) {
    alert("A-one Grade! Excellent")
}
else if (obtainedMarks >= 70) {
    alert("A Grade! Good")
}
else if (obtainedMarks >= 60) {
    alert("You need to improve")
}
else if (obtainedMarks < 60) {
    alert("Sorry! You are Fail")
}

var percentage = marks_obtained / total_marks * 100;
document.write("Total Marks: " + totalMarks + "</br>")
document.write("Marks Obtained: " + obtainedMarks + "</br>")
document.write("Percentage: " + percentage + "</br>")
document.write("Grade: B" + "</br>")
document.write("Remarks: You need to improve")

// Q # 8
var number = prompt("Enter a number");
if (number % 3 == 0) {
    alert("Number is divisible")
}
else {
    alert("Number is not divisible")
}

// Q # 9
var number = prompt("Enter the number")
if (number % 2 == 0) {
    alert("The number is even")
}
else {
    alert("The number is Odd")
}

// Q # 10
var temp = prompt("Enter the Temperature")
if (temp > 40) {
    alert("It is too hot outside")
}
else if (temp > 30) {
    alert("The Weather today is Normal")
}
else if (temp > 20) {
    alert("Today's Weather is cool")
}
else {
    alert("OMG! Today Weather is so Cool")
}

// Q # 11
var firstNumber = prompt("Enter a First Number")
var secondNumber = prompt("Enter a Second Number")
var operator = prompt("Enter a Operator")


if (operator === '+') {
    alert(firstNumber + secondNumber)
}
else if (operator === '-') {
    alert(firstNumber - secondNumber)
}
else if (operator === '*') {
    alert(firstNumber * secondNumber)
}
else if (operator === '/') {
    alert(firstNumber / secondNumber)
} else (operator === '%')
    alert(firstNumber % secondNumber)


// Chapter # 12 to 13
// Q # 2  
   var number = prompt("Enter an Integer value")
   var number2 = prompt("Enter an Integer value")

   if(number > number2){
       alert(+number + "is larger")
   }
   else if(number == number2){
       alert("Both Numbers are Equal ")
   }
   else{
      alert(+number2 + "is larger")
   }

// Q # 4
var character = prompt("Enter a Vowels")  

  if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u" ){
      alert("It is a Vowel")
  }
  else{
      alert("It is not a Vowel")
  }   

  // Q # 5
  var password = "umair";
    var user = prompt("Enter Youy Password")

    if(user == ""){
        alert("Please enter You Password")
    }
    else if(user == password){
        alert("Correct!")
    }else{
        alert("InCorrect Password!")
    }

    // Q # 6
    var hour = 13;

    if(hour < 18){
        alert("Good Day");
    }
    else{
        alert("Good Evening");
    }

    // Q # 7
    var time = 1900;
    var time = prompt("Enter a time")
 
    if(time >=  0000 && time < 1200){
        alert("Good Mornning")
    }
    else if(time >= 1200 && time < 1700){
        alert("Good Afternoon")
    }
    else if(time >=  1700 && time < 2100){
        alert("Good Evening")
    }
    else{
    (time >= 2100 && time <= 2359)
        alert("Good Night")
    }

// Chapter # 14 to 16

// Q # 1
var array = [];

// Q # 2
var array = {FirstName: "", LastName: "" }

// Q # 3
var array = ["Hello","World"]

// Q # 4
var array  = [1,2,3,4,5]

// Q # 5
var boolArray = [true,false];
console.log(boolArray);

// Q # 6
var mixedArray = ["Hello","World",1,2,3]

// Q # 10
var number = [320, 230, 480, 120,1 ];

document.write("Score of Students: " + number + "</br>")
document.write("Ordered Score of Students: " + number.sort())

// Q # 11
var cities = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar"]

   document.write("Cities List: " + "</br>" + cities)
   document.write("</br>")

   document.write("Selected cities list: " + "</br>" + cities.copyWithin(1,0,0))

// Q # 12
var arr = ["This", "is", "my", "cat"]

document.write("Array:" + "</br>" + arr + "</br>")
document.write("</br>")
document.write("String: " + "</br>" + arr.join(" "))   

// Chapter # 17 to 20
// Q # 1
var multiArray = [
    [],
    [],
];

// Q # 2
var multiArray = [
    [0 , 1 , 2 , 3],
    [1 , 0 , 1 , 2],
    [2,  1 , 0 , 1],
];

  for(var i = 0; i < multiArray.length; i++) { 
   document.write(multiArray[i].join(" ") + "</br>")
   
  }

// Q # 3
for(var i = 1; i<=10; i++){
    document.write(i + "</br>")
}

// Q # 5
fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "</br>")
    document.write("</br>")
}
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + [i] + " is " + fruits[i] + "</br>")
}

// Q # 6
 // (a)
 document.write("<b>Counting:</b> " + "</br>" + "</br>")
        
 for(var i=1; i<=15; i++){
  
    document.write(i + ",")
    
 }
 // (b)
 document.write("</br>" + "</br>")
 document.write("<b> Reverse Counting:</b> " + "</br>" + "</br>") 

 for(var i=10; i > 0; i--){
     document.write(i + ",")
 }
 // (c)
 document.write("</br>" + "</br>")
 document.write("<b>Even:</b> " + "</br>" + "</br>")

 for(var i=0; i<=20; i++){
     if(i % 2 == 0){
         document.write(i + ",")
     }
 }
 // (d)
 document.write("</br>" + "</br>")
 document.write("<b>Odd:</b> " + "</br>" + "</br>")

 for(var i=0; i<=20; i++){
     if(i % 2 == 1){
         document.write(i + ",")
     }
 }

 // (e)
 document.write("</br>" + "</br>")
 document.write("<b>Odd:</b> " + "</br>" + "</br>")

 for(var i=1; i<=20; i++){
     if(i % 2 == 0){
         document.write(i + "k,")
     }
 }

 // Q # 8
 var arr = [24,53,78,91,12];
 var largest = 0;

 for(var i=0; i <= largest; i++){
     if(arr[i] > largest){
         largest = arr[i];

     }
    
 }
 document.write("<b>Array Items: </b>" + "</br>" + "</br>" +arr + "</br>")
 document.write("</br>")
 document.write("<b>The largest number is</b> " +largest)

 // Q # 9
 var arr = [24,53,78,91,12];
 var smallest = arr[0];

 for( i=0; i < arr.length; i++){
     if(arr[i] < smallest){
         smallest = arr[i];

     }
    
 }
 document.write("<b>Array Items: </b>" + "</br>" + "</br>" +arr + "</br>")
 document.write("</br>")
 document.write("<b>The Smallest number is</b> " +smallest)

 // Q # 10
 for(var i=1; i<=100; i++){
    if(i % 5 == 0){
        document.write(i + ",")
    }
}





