// for (var i = 100; i > 0; i -= 2) {
//     console.log(i)
// }

// var i = 100

// while (i >= 1) {
//     console.log(i)
//     i--
// }

// while (i >= 1) {
//     console.log(i)
//     --i
// }

// while (i >= 1) {
//     console.log(i)
//     i = i - 1
// } 

// while (i >= 1) {
//     console.log(i)
//     i -= 1
// }

/*
Task 1
Write a "for" loop that will count and print 1 to 10, once finished counting, print "Finished counting to 10"
*/

for (var i = 1; i < 11; i ++) {
    console.log(i)
}
console.log("Finished counting to 10");

// Task 2
// Write a "for" loop that will count and print 10 to 1, once finished counting, print "Finished counting to 1"
for (i = 10; i > 0; --i) {
    console.log(i)
}
console.log("Finished counting to 1");

// Task 3
// Re do the Task 1 with while loop, use different methods of incrementing/decrementing. comment out other methods of incrementing/decrementing.

var i = 1
while (i <= 10) {
    console.log(i)
    i = i + 1
}
console.log("Finished counting to 10");

// Task 4
// Re do the Task 2 with while loop, use different methods of incrementing/decrementing. comment out other methods of incrementing/decrementing.

var i = 10

while (i >= 1) {
    console.log(i)
    i = i - 1
}
console.log("Finished counting to 1");

/* 
Task 5
With the loop of your choice, from numbers 1 to 100, print out ONLY numbers that are divisible by BOTH 3 AND 5, not OR. 
Once finished, print out "DONE!"
NOTE. You can increment the count only by one
*/

for (var i = 1; i < 101; i++)

if (i % 3 == 0 && i % 5 ==0 ) {
    console.log(i)
} else {};
console.log("DONE!");



