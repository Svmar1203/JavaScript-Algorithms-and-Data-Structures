"use strict";
/*
///////--SUM OF ALL NUMBERS--//////////////
calculates the sum of all numbers from 1 up to (including) some number n;
function sum(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(sum(3));
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed ${(t2 - t1) /  1000} seconds.`);
*/
/////////--WHICH ONE IS BETTER?--//////////
/*
function sum1(n) {
  return (n * (n + 1)) / 2;
}

console.log(sum1(3));
const time1 = performance.now();
addUpTo2(1000000000);
const time2 = performance.now();
console.log(`Time Elapse ${(time2 - time1) / 1000} seconds`);
*/
//////--DOWN-UP AND UP-DOWN--FROM 1 TO 9 AND BACK--//////
/*
function countUpandDown(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log(`At the top! \ nGoing down...`);
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log(`Back down. Bay!!`);
}

countUpandDown(10);
*/
////////--PRINT ALL PAIRS OF NUMBERS--////////////////
/*
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

printAllPairs(6);
*/
/////////--LOG AT LEAST 5 NUMBERS, EVEN IF N=2, OR 1--/////
/*
function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(2);
*/
/////////--LOG MAX OF N, EVEN IF N IS GREATHER--/////

function logAtMost5(n) {
  for (let i = 0; i < Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(10);
