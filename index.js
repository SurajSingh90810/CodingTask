//  Arm Strong

function Arm(num) {
  const a = num % 10;
  const b = Math.floor(num / 10) % 10;
  const c = Math.floor(num / 100);

  return a * a * a * +b * b * b + c * c * c === num;
}
// console.log(Arm(143));

// Table

function table(num1) {
  for (let i = 1; i <= 10; i++) {
    console.log(i * num1);
  }
}

// table(50);

let str1 = "Hello";
let str2 = "e";
let count = 0;

for (let i = 0; i < str1.length; i++) {
  if (str1[i] == str2) {
    count++;
  }
}
// console.log(count);

// Same letter in String

let string1 = "hexxllo";
let string2 = "worlxxd";
let printed = [];

for (let i = 0; i < string1.length; i++) {
  if (string2.includes(string1[i]) && !printed.includes(string1[i])) {
    // console.log(string1[i]);
    printed.push(string1[i]);
  }
}

//  fibbonacci Series

var a = 0;
var b = 1;

for (let i = 0; i < 15; i++) {
  var temp = a + b;
  a = b;
  b = temp;
  //   console.log(temp);
}

// 1st letter UppperCase

let str = "hello";
let spilted = str.split(" ");
let newWord = spilted.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});
// console.log(newWord.join(" "));

// Joning of Two Array

let arr1 = [10, 12, 15, 14, 98];
let arr2 = [45, 13, 12, 55, 11];

let arr3 = [...arr1, ...arr2];
let newArray = new Set(arr3);
// console.log(newArray);

// Same value in Array

let arr4 = [10, 45, 11, 78, 30];
let arr5 = [11, 78, 91, 30, 55];

let intersect = arr4.filter((ele) => {
  return arr5.includes(ele);
});
// console.log(intersect);

// factors

let num = 12;

for (let i = 0; i <= num; i++) {
  if (num % i == 0) {
    // console.log(i);
  }
}

// sort the array

let arr6 = [10, 45, 11, 13, 47, 78];

let sorting = arr6.sort((a, b) => {
  return a - b;
});
// console.log(sorting);

//  SWAPPING

let a1 = 5;
let b1 = 10;

let temp1 = a1;
a1 = b1;
b1 = temp1;

// console.log("a =", a1);
// console.log("b =", b1);

let a2 = 5;
let b2 = 10;

a2 = a2 + b2;
b2 = a2 - b2;
a2 = a2 - b2;

// console.log("a =", a2); // 10
// console.log("b =", b2); // 5

let e = 10;
let f = 20;
let g = 30;

let temp3 = e;
e = f;
f = g;
g = temp3;

// console.log("a =", e);
// console.log("b =", f);
// console.log("c =", g);

let h = 20;
let i = 30;
let j = 40;

[h, i, j] = [i, j, h];

// console.log("h", h);
// console.log("i", i);
// console.log("j", j);

let k = 5;
let l = 10;
let m = 15;

k = k + l + m; // k = 30
l = k - (l + m); // l = 5 (old k)
m = k - (l + m); // m = 10 (old l)
k = k - (l + m); // k = 15 (old m)

// console.log("k =", k); // 15
// console.log("l =", l); // 5
// console.log("m =", m); // 10

// Palindrome

let palin = (str) => {
  var reverseStr = str.split("").reverse().join("");
  if (reverseStr == str) {
    return true;
  } else {
    return false;
  }
};

// console.log(palin("mom"));

//    Vowels

let str3 = "s";

let str4 = str3.toLowerCase();

if (str4 == "a" || str4 == "e" || str4 == "i" || str4 == "o" || str4 == "u") {
  // console.log(true);
} else {
  // console.log(false);
}

// Prime Number

let number = 5;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    console.log("Not Prime Number");
    break;
  } else {
    console.log("Prime");
    break;
  }
}

// FACTORIAL

let num2 = 4;
let fact = 1;
if (num2 < 0) {
  console.log("Not posible");
} else {
  for (let i = 1; i <= num2; i++) {
    fact = fact * i;
  }
  // console.log(fact);
}

let numbers = [1, 45, 20, 31, 84, 25];

let even = numbers.filter((item) => {
  return item % 2 == 0;
});

let odd = numbers.filter((item) => {
  return item % 2 == !0;
});

// console.log("Even Number", even);
// console.log("Odd Numbers", odd);

// Missing Numbers

const arrNum = [1, 2, 3, 4, 5, 7, 8, 10];
const MissingArray = [];

const MissingValue = (arr) => {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      MissingArray.push(i);
    }
  }
  return MissingArray;
};
// console.log(MissingValue(arrNum));

let maths = Math.random();
// console.log(maths);

//  SUBARRAY

let arr7 = [
  [1, 2],
  [4, 6],
  [10, 9],
  [7, 63],
];

let fullArray = arr7.reduce((a, b) => a.concat(b));
// console.log(fullArray);

// PrimeNumber From Array

let arr8 = [17, 10, 12, 45, 11, 3];

let arrPrime = arr8.filter((ele) => {
  if (ele < 2) return false;
  for (let i = 2; i <= Math.sqrt(ele); i++) {
    if (ele % i === 0) return false;
  }
  return true;
});

// console.log(arrPrime);



//REVERSE OF STRINGS 
var str5="Hello Good Morning to every One"

var result= str5.split(" ").map((word)=>{
   return word.split("").reverse().join("")
})


// console.log(result.join(" ")) //by joining the string array become again string

// console.log(str5.split("o"))

// MAKE LENGTH ZERO
var arr9 = [1, 2, 3, 4, 5, 6, 7, 8];
arr9.length = 0; 
// console.log(arr9); // Output: []


// console.log(Number.isInteger(1.5)) //no 


// FIND INTEGER
var a=12;

if(a%1===0){
  // console.log("integer")
}else{
  // console.log("Not integer")
}


// DUPLICATE ARRAY
var b=[1,2,3,4,5,6]
var res= b.concat(b)
// console.log(res)


// RVERESE THE NUMBER
var c=156
var result1=c.toString().split("").reverse().join("")

// console.log(Number(result1))


// RVERESE THE NUMBER
function reverseKaro(num){

  var rev=0

  while(num>0){
    var rem=num%10
    rev=rev*10+rem
    num=Math.floor(num/10)
  }
  return rev
}

// console.log(reverseKaro(12345))

//SORT THR STRING
const spelling="suraj"
const res1=spelling.split("").sort().join("")

// console.log(res1)


//MAKE 1ST LETTER CAPITAL
var cap="suraj"
var res2=cap.charAt(0).toUpperCase()+cap.substring(1)

// console.log(res2)


function occur(str) {
  var occurence = {};
  str.split("").forEach((elem) => {
    if (occurence.hasOwnProperty(elem) === false) {
      occurence[elem] = 1;
    } else {
      occurence[elem]++;
    }
  });
  return occurence;
}

// console.log(occur("dasdfafsasfwqasdasdqw"));