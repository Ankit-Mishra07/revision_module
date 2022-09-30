// JS built-in object: Date

let now = new Date();
console.log(now); // shows current date/time

// getFullYear() :- shows current year of the specified date according to local time.
console.log(now.getFullYear()); //2022

// getMonth() :- Shows the month, from 0 to 11.
console.log(now.getMonth() + 1); // 9

// getDate() :- Shows the day of month, from 1 to 31.
console.log(now.getDate()); // 29

// getDay() :- Shows the day of week, from 0 (Sunday) to 6 (Saturday).
console.log(now.getDay()); // 4 (Thursday)

// getHours() :- Provides the current hour from 0 to 23.
console.log(now.getHours()); // 11

// getMinutes() :- Provides the current minutes from 0 to 59.
console.log(now.getMinutes()); // 49

// getSeconds() :- Provides the current seconds from 0 to 59.
console.log(now.getSeconds()); // 30

let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
console.log(time); // 11:46:30

/* Creator: Ankit Mishra */

let date = new Date();
let str = "hello";
str.test = 5;
console.log(str.test);
