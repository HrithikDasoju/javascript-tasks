
// * task1
// var  sname="rohit"
// let sage=19
// const scity = "hyd"
// const scollege = "OU"
// console.log(snamename);
// console.log(sage);
// console.log(scity);
// console.log(scollege);
// name="karan"
// age=20
// console.log(sname);
// console.log(sage);
// city="kerela"

var sname = "karim"
// let sage=21;
// const scity="tirupathi";

// ! Task 2  

// console.log("Task3");
// alert("Hello")
// confirm("click OK")
// let ex=prompt("enter the subject")
// console.log(ex);
// document.writeln("JAVA SCRIPT")

// ^ Task 3

// let userName=prompt("Enter Name");
// console.log(userName);

// let userAge=prompt("Enter Age");
// console.log(userAge);

// let userCity=prompt("Enter your City");
// console.log(userCity);

// let userQualification=prompt("Enter your Qualification");
// console.log(userQualification);

// ! Task 4


let dataString = "JavaScript";
let dataNumber = 100;
let dataDecimal = 99.5;
let dataTrue = true;
let dataFalse = false;
let dataUndefined = undefined;
let dataNull = null;

console.log(dataString, typeof dataString);
console.log(dataNumber, typeof dataNumber);
console.log(dataDecimal, typeof dataDecimal);
console.log(dataTrue, typeof dataTrue);
console.log(dataFalse, typeof dataFalse);
console.log(dataUndefined, typeof dataUndefined);
console.log(dataNull, typeof dataNull);

// ^ Task 5

let students=["Arun","Priya","Kumar", "Divya", "Rahul"]
console.log("First student:", students[0]);
console.log("Second student:", students[1]);
console.log("Last student:", students[students.length - 1]);
console.log("Total students:", students.length);

//! Task 6
let emp={
    name:"kannan",
    age:29,
    role:"Developer",
    skills:["HTML","JS","React","SpringBoot"],
    isWorking:true,
    qualification:["B.Tech","Masters"]
} ;

console.log("Name : ", emp.name);
console.log("Age : ", emp.age);
console.log("Role : ", emp.role);
console.log("First Skill : ", emp.skills[0]);
console.log("Last Qualification : ", emp.qualification[emp.qualification.length-1]);
console.log("Is working ",emp.isWorking);




// !Task 7

let calculatorA = 20;
let calculatorB = 5;

console.log("Addition:", calculatorA + calculatorB);
console.log("Subtraction:", calculatorA - calculatorB);
console.log("Multiplication:", calculatorA * calculatorB);
console.log("Division:", calculatorA / calculatorB);
console.log("Modulus:", calculatorA % calculatorB);
console.log("Exponentiation:", calculatorA ** calculatorB);



// ^Task 8

let shirtPrice = 999;
let pantPrice = 1499;
let shoesPrice = 1999;
let bagPrice = 799;

let shoppingTotal = shirtPrice + pantPrice + shoesPrice + bagPrice;

console.log("Total shopping price:", shoppingTotal);



// & Task 9

let incrementA = 10;
let incrementB = incrementA++;

console.log(incrementA);
console.log(incrementB);

let preIncrementA = 10;
let preIncrementB = ++preIncrementA;

console.log(preIncrementA);
console.log(preIncrementB);

let decrementA = 10;
let decrementB = decrementA--;

console.log(decrementA);
console.log(decrementB);

let preDecrementA = 10;
let preDecrementB = --preDecrementA;

console.log(preDecrementA);
console.log(preDecrementB);



// *Task 10

let assignmentNumber = 10;

assignmentNumber += 5;
console.log("After += 5:", assignmentNumber);

assignmentNumber -= 3;
console.log("After -= 3:", assignmentNumber);

assignmentNumber *= 2;
console.log("After *= 2:", assignmentNumber);

assignmentNumber /= 4;
console.log("After /= 4:", assignmentNumber);

assignmentNumber %= 3;
console.log("After %= 3:", assignmentNumber);

assignmentNumber **= 2;
console.log("After **= 2:", assignmentNumber);



// !Task 11

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");



// #Task 12

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);



// ~Task-13

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);



// & Task 14

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));



// !Task 15

console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");



// ^ Task 16

let votingAge = 20;

let votingResult = votingAge >= 18
    ? "Eligible to vote"
    : "Not eligible";

console.log(votingResult);



// ~Task 17

let passwordStatus = true;

let loginResult = passwordStatus
    ? "Login successful"
    : "Wrong password";

console.log(loginResult);

// !Task 18 
let userIntro="Naveen";
let userAge=25;
let userCity="Trichy";
console.log("My Name is "+userIntro+". I am  "+userAge+" years old."+" I live in "+userCity+".");
console.log(`My name is ${userIntro}. I am ${userAge} years old. I live in ${userCity}.`);


// *Task 19

let stringNumber = String(100);
let stringBoolean = String(true);
let stringUndefined = String(undefined);
let stringNull = String(null);
let stringArray = String([1, 2]);

console.log(stringNumber, typeof stringNumber);
console.log(stringBoolean, typeof stringBoolean);
console.log(stringUndefined, typeof stringUndefined);
console.log(stringNull, typeof stringNull);
console.log(stringArray, typeof stringArray);



// *Task-20

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));



//& Task-21

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));



// ^ Task-22

let eligibilityAge = 20;

if (eligibilityAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}



// ! Task 23

let checkNumber = -10;

if (checkNumber > 0) {
    console.log("Positive");
} else if (checkNumber < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}



// ~ Task 24

let studentMarks = 85;

if (studentMarks >= 90 && studentMarks <= 100) {
    console.log("A Grade");
} else if (studentMarks >= 80) {
    console.log("B Grade");
} else if (studentMarks >= 70) {
    console.log("C Grade");
} else if (studentMarks >= 60) {
    console.log("D Grade");
} else if (studentMarks >= 0) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}



// &  Task 25

let jobAge = 22;
let jobHeight = 165;
let jobWeight = 65;

if (jobAge >= 18) {
    if (jobHeight >= 160) {
        if (jobWeight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not selected because your weight is below 60");
        }
    } else {
        console.log("You are not selected because your height is below 160");
    }
} else {
    console.log("You are not selected because your age is below 18");
}



// ^Task 26

let trafficColor = "red";

switch (trafficColor) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}



// * Task 27

let selectedDay = 1;

switch (selectedDay) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

// ~ Task 28
let studentName = "Krishna";
let studentAge = 22;
let studentCity = "Vellore";

let tamilMarks = 90;
let englishMarks = 89;
let mathsMarks = 76;

let resultTotal = tamilMarks + englishMarks + mathsMarks;
let resultAverage = resultTotal / 3;

let resultGrade;

if (resultAverage >= 90) {
    resultGrade = "A";
} else if (resultAverage >= 80) {
    resultGrade = "B";
} else if (resultAverage >= 70) {
    resultGrade = "C";
} else if (resultAverage >= 60) {
    resultGrade = "D";
} else {
    resultGrade = "Fail";
}

let resultVoting;

if (studentAge >= 18) {
    resultVoting = "Eligible";
} else {
    resultVoting = "Not Eligible";
}

console.log(`
Name: ${studentName}
Age: ${studentAge}
City: ${studentCity}
Total: ${resultTotal}
Average: ${resultAverage.toFixed(2)}
Grade: ${resultGrade}
Voting: ${resultVoting}
`);
