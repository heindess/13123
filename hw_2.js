// NORMAL level
// Task 1
let x = 20;
let y = 58;
let z = 42;

console.log(`x + y + z = ${x + y + z}`);

// Task 2
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_YEAR = 365;
let age = 22;

let myAgeInSeconds = age * DAYS_IN_YEAR * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE;
console.log(`myAgeInSeconds = ${myAgeInSeconds}`);

// Task 3
let count = 42;
let userName = '42';

// 1 variant
count = "" + count;
console.log(`Variable: count have type: ${typeof(count)}`);
userName = +userName;
console.log(`Variable: userName have type: ${typeof(userName)}`);

// return start types
count = +count;
console.log(`Variable: count have type: ${typeof(count)}`);
userName = "" + userName;
console.log(`Variable: userName have type: ${typeof(userName)}`);

// 2 variant
count = String(count);
console.log(`Variable: count have type: ${typeof(count)}`);
userName = Number(userName);
console.log(`Variable: userName have type: ${typeof(userName)}`);

// Task 4
let aa = 1;
let bb = 2;
let cc = "белых медведей";

console.log(String(aa) + bb + " " + cc);

// Task 5
let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";

let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;
console.log(`lengthWords = ${lengthWords}`);

// Task 6
let var1 = "abc";
let var2 = 3;
let var3 = true;

console.log(`Variable: ${var1} have type: ${typeof(var1)}`);
console.log(`Variable: ${var2} have type: ${typeof(var2)}`);
console.log(`Variable: ${var3} have type: ${typeof(var3)}`);

// Task 7
let username = prompt("Ваше имя", "Имя");
let userAge = prompt("Ваш возраст", "Возраст");

console.log(`username: ${username} userAge: ${userAge}`);

// ADVANCED level
// Task 1
let a = 4;
let b = 3;

a = "" + a + b;
// console.log("🚀 ~ file: hw_2.js:10 ~ a", a);
b = +a[0];
console.log(`new b = ${b}`);
a = +a[1];
console.log(`new a = ${a}`);


// Task 2
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);