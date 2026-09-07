// Task 1
for (let i= 1; i <=10; i++) {
   console.log(i);
}
// Task 2
for (let i= 10; i >=1; i--) {
   console.log(i);
}
// Task 3
console.log("even numbers");
for(let i=1; i<=20; i++){
    if(i%2 ==0){
        console.log(i);
        
    }
}
// Task 4
console.log("odd numbers");
for(let i=1; i<=20; i++){
    if(i%2 !=0){
        console.log(i);
        
    }
}
// Task 5
console.log("5 Table");
let n=5;
for(let i=1;i<=10;i++){
    console.log(n + "*"+i+" = "+(n*i));
}
// Task 6
let num = 10;
while(num >= 1){
    console.log(num);
    num-- ;
}

// Task 7
let z=0
for(let i=1;i<=10;i++){
    z=z+i;
}
console.log(`sum of nums ${z}`);

// Task 8

let m = 1;
do {
    console.log(m);
    m++;
} while (m<= 5);

// Task 9
let a = 10;
do {
    console.log(a);
    a++;
} while (a <= 5); 
// output is 10 in do while the task is performed atleast once before checking the condition

// Task 10
let name="javascript";
for(let character of name){
 console.log(character);
 }

//  Task 11
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for(let fruit of fruits){
    console.log(fruit);
    
}

// Task 12
let studentNames = ["Naveen","vamsi","Kannan","Dinesh","Kiran"]
for (let student of studentNames){
    console.log("Student: ",student);
}

// Task 13 

let employees = {
    emName : "Naveen",
    emAge : 25,
    emRole : "Java Developer",
    emCity : "HYD",
}

for (let key in employees){
    console.log(key ,employees[key]);
}

//Task 14
let Product = {
    productName : "MacBook",
    Price : 99999,
    Brand : "Apple",
    Category : "M1",
    Stock : "Available",
}

for(let keys in Product){
    console.log(keys, Product[keys]);
}

//Task 15
function welcome(){
    console.log("Welcome to JavaScript");
}
welcome();
welcome();
welcome();

//Task 16 
function greet(name){
    console.log("Hello " + name);
}
greet("Naveen");
greet("Arun");
greet("Krishna");

// Task 17 
function Students(name,age,department){
    console.log("Name: " , name);
    console.log("Age: " ,age);
    console.log("Department: ",department);
}

Students("Sonu" , 23 , "Mech");
Students("Naveen" , 22 , "ECE");
Students("Krish" , 22 , "EEE");

//Task 18 
function add(a,b){
    return a + b;
}
let answer = add(10,12);
console.log(answer);

//Task 19 
function sal(month){
    return month
}
let salaryAmount = sal(90000);
console.log(salaryAmount);

//Task 20
function bonus (sal, bonusAmount){
    return sal + bonusAmount;
}

let total = bonus(50000,5000);
console.log(total);

//Task 21
function employes(name,role = "Developer"){
    console.log("Name: ",name);
    console.log("Role: ",role);
}
employes("Arun");
employes("Priya","Designer");


//Task 22 
function squares(number12){
    return number12 * number12;
}
console.log(squares(10));
console.log(squares(3));
console.log(squares(12));
console.log(squares(71));
console.log(squares(18));

// Task 23 
let calculate = function(a,b){
    return a+b;
};

let result = calculate(10,20);
console.log(result);


// Task 24 
let multiply = (a,b) => {
    return a*b;
};
console.log(multiply(10,2));

// Task 25 
function test() {

    if (true) {

        var z = 10;
        let y = 20;
        const x = 30;

        console.log(z);  //10
        console.log(y);   //20
        console.log(x);   //30
    }

    console.log(z);  //10
    // console.log(y);  
    //  console.log(x);  
}

test();  

//Task 26 

console.log(o);

var o = 10;

//Task 27

//console.log(j);

//let j= 20;

//Task 28

//console.log(t);

//const t= 30;

//Task 29 

(function(){
    console.log("Welcome to JavaScript");
})

let discountOffer = function(product, discount) {
    console.log(product + " has " + discount + "% discount");
};
discountOffer("Laptop", 10);

//Task 30

function welcome() {
    console.log("Welcome");
}
function execute(callback) {
    callback();
}
execute(welcome);

//Task 31 
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let rest= cashback();
for (let value of rest){
    console.log(value);
}

//Task 32 
let employe = [
    {
        name: "Kanish",
        age: 25,
        department: "IT",
        role: "Developer",
        salary1: 60000
    },
    {
        name: "Vicky",
        age: 23,
        department: "HR",
        role: "HR Executive",
        salary1: 35000
    },
    {
        name: "Saroon",
        age: 25,
        department: "IT",
        role: "Frontend Developer",
        salary1: 45000
    }
];


// for...of
for (let employe1 of employe) {
    console.log(employe1);
}


// for...in
for (let employe2 of employe) {

    for (let key in employe2) {
        console.log(key, employe2[key]);
    }

    console.log("----------------");
}


// Function
function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary1:", salary);
}


// Function call
displayEmployee(
    "Kanish",
    25,
    "IT",
    "Developer",
    60000
);


// Return
function getSalary(employee) {
    return employee.salary;
}

let salary = getSalary(employe[0]);

console.log("Employee Salary:", salary);


// Condition
for (let employee of employe) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " → Salary is 40000 or above");
    } else {
        console.log(employee.name + " → Salary is below 40000");
    }
}


// Arrow Function
let calculateBonus = (salary, bonus) => {
    return salary + bonus;
};

console.log("Total Salary:", calculateBonus(40000, 5000));


// Generator
function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log("Benefit:", benefit);
}