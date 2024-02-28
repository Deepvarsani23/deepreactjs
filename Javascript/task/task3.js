// <-- 1 -->
// {
//   let i = 10;
//   while (i > 0) {
//     document.write(i);
//     document.write("<br>");
//     i--;
//   }
// }

// {
//     let i = 10;
//     do{
//         document.write(i);
//         document.write("<br>");
//         i--;
//     }while (i > 0)
// }

// {
//     let i = 10;

//     for(i; i > 0; i--){
//         document.write(i);
//         document.write("<br>");
//     }
// }



// <-- 2 -->



// {
//   let sum = 0;
//   let i = 1;
// 
//    while (i <= 10) {
    // sum += i;
    // i++;
    //  
    //   document.write(sum);
    // }
    //   }



// {
//     let sum = 0;
//     let i = 1;

//     do{
//         document.write(i + "\t")
//         sum += i;
//         i++;
//     }while (i <= 10)
//     document.write(sum);
// }


    

// {
//     let sum = 0;
//     let i = 1;

//     for(i; i<=10; i++)
//     {
//         sum+=i;
//     }

//     document.write(sum)
// }


// <-- 3 -->


// {
//   let number = 5;
//   let i = 1;
//   while (i <= 10) {
//     document.write(${number} x ${i} = ${number * i});
//     document.write("<br>");
//     i++;
//   }
// }

// {
//     let number = 5;
//     let i = 1;

//     do{
//         document.write(${number} x ${i} = ${number * i});
//         document.write("<br>");
//         i++;
//     }while (i <= 10)
// }

// {
//     let number = 5;
//     let i = 1;
//     for(i; i<=10; i++)
//     {
//         document.write(${number} x ${i} = ${number * i});
//         document.write("<br>");
//     }
// }



// <-- 4 -->


// {
//   let randomNumber = 20;
//   let guessCount = 0;
//   let guess = 10;

//   while (guessCount < guess) {
//     let userGuess = prompt("Enter a number between 1 and 100");
//     guessCount++;

//     if (userGuess == randomNumber) {
//       alert(
//         "Congratulations! You guessed the number in " + guessCount + " tries."
//       );
//       break;
//     }

//     if (userGuess > randomNumber) {
//       alert("Your guess is too high. Try again.");
//     } else if (userGuess < randomNumber) {
//       alert("Your guess is too low. Try again.");
//     }

//     if (guessCount == guess) {
//       alert(
//         "Sorry, you have exceeded the guess limit. The number was " +
//           randomNumber +
//           "."
//       );
//     }
//   }
// }



// {
//   let randomNumber = 20;
//   let guessCount = 0;
//   let guess = 10;

//   do {
//     let userGuess = prompt("Enter a number between 1 and 100");
//     guessCount++;

//     if (userGuess == randomNumber) {
//       alert(
//         "Congratulations! You guessed the number in " + guessCount + " tries."
//       );
//       break;
//     }

//     if (userGuess > randomNumber) {
//       alert("Your guess is too high. Try again.");
//     } else if (userGuess < randomNumber) {
//       alert("Your guess is too low. Try again.");
//     }

//     if (guessCount == guess) {
//       alert(
//         "Sorry, you have exceeded the guess limit. The number was " +
//           randomNumber +
//           "."
//       );
//     }
//   } while (guessCount < guess);
// }



// {
//   let randomNumber = 20;
//   let guessCount = 5;
//   let guess = 5;

//   for (guessCount; guessCount < guess; guessCount++) {
//     let userGuess = prompt("Enter a number between 1 and 100");

//     if (userGuess == randomNumber) {
//       alert(
//         "Congratulations! You guessed the number in " + guessCount + " tries."
//       );
//       break;
//     }

//     if (userGuess > randomNumber) {
//       alert("Your guess is too high. Try again.");
//     } else if (userGuess < randomNumber) {
//       alert("Your guess is too low. Try again.");
//     }

//     if (guessCount == guess) {
//       alert(
//         "Sorry, you have exceeded the guess limit. The number was " +
//           randomNumber +
//           "."
//       );
//     }
//   }
// }


// <-- 5 -->

// 
// {
//   let num1 = 0,
    // num2 = 1;
//   while (num1 < 10) {
    // let nextNum = num1 + num2;
    // document.write(nextNum + "\t");
    // num1 = num2;
    // num2 = nextNum;
//   }
// }

// {
//   let num1 = 0,
//   let num2 = 1;
//   do {
//     let nextNum = num1 + num2;
//     document.write(nextNum + "\t");
//     num1 = num2;
//     num2 = nextNum;
//   } while (num1 < 10);
// }

// {
//   let fibonacci = [];
//   fibonacci[0] = 0;
//   fibonacci[1] = 1;

//   for (let i = 2; i < 10; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//   }

//   document.write(fibonacci);
// }


// <-- 6 -->


// {
//   let num = 5;
//   let result = 1;
//   while (num > 1) {
//     result *= num;
//     num--;
//   }
//   document.write(result);
// }

// {
//   let num = 5;
//   let result = 1;
//   do {
//     result *= num;
//     num--;
//   } while (num > 1);
//   document.write(result);
// }

// {
//     let num =6;
//     let result = 1;
//     for(num; num>1; num--)
//     {
//         result *= num;
//     }
//     document.write("Factorial of "+num+" is: " + result);
// }


// <-- 7 -->


// {
//   let word = "level";
//   let isPalindrome = true;
//   let i = 0;
//   let j = word.length - 1;

//   while (i < j) {
//     if (word[i] !== word[j]) {
//       isPalindrome = false;
//       break;
//     }
//     i++;
//     j--;
//   }

//   if (isPalindrome) {
//     document.write(word + " is a palindrome.");
//   } else {
//     document.write(word + " is not a palindrome.");
//   }
// }

// {
//     let word = "level";
//     let isPalindrome = true;
//     let i = 0;
//     let j = word.length - 1;

//     do {
//       if (word[i] !== word[j]) {
//         isPalindrome = false;
//         break;
//       }
//       i++;
//       j--;
//     }while (i < j)

//     if (isPalindrome) {
//       document.write(word + " is a palindrome.");
//     } else {
//       document.write(word + " is not a palindrome.");
//     }
//   }

// {
//   let word = "vevev";
//   let isPalindrome = true;
//   let i = 0;
//   let j = word.length - 1;

//   for (i; i < j; i++) {
//     if (word[i] !== word[j]) {
//       isPalindrome = false;
//       break;
//     }
//     j--;
//   }
//   if (isPalindrome) {
//     document.write(word + " is a palindrome.");
//   } else {
//     document.write(word + " is not a palindrome.");
//   }
// }

// <-- 8 -->

// {
//   let base = 10;
//   let exponent = 3;

//   let result = 1;

//   while (exponent > 0) {
//     result *= base;
//     exponent--;
//   }
//   document.write(result);
// }

// {
//     let base = 6;
//     let exponent = 3;

//     let result = 1;

//     do {
//       result *= base;
//       exponent--;
//     }while (exponent > 0)
//     document.write(result);
//   }

// {
//     let base = 6;
//     let exponent = 3;

//     let result = 1;

//     for(exponent; exponent>0; exponent--)
//     {
//         result *= base;
//     }
//     document.write(result);
// }

// <-- 9 -->

// <-- 10 -->

// {
//   let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
//   let searchNumber = 35;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === searchNumber) {
//       document.write("Number found at index:", i);
//       break;
//     }
//   }
// }

// <-- 11 -->

// {
//   let i = 0;
//   while (true) {
//     if (i % 2 !== 0) {
//       document.write(The first odd number is: ${i});
//       break;
//     }
//     i++;
//   }
// }

// <-- 12 -->

// {
//     let num = 4;
//     let i = 2
//       for ( i = 2; i < num; i++) {
//         if (num % i === 0) {
//           document.write(num + " is not a prime number.");
//           break;
//         }
//       }

//       If the loop completes without finding a divisor, it's a prime number
//       if (i === num) {
//         document.write(num + " is a prime number.");
//       }

// }

// <-- 13 -->

// {
//   let userInput;

//   while (true) {
//     userInput = prompt("Enter a number (type 'exit' to stop loop):");

//     if (userInput === "exit") {
//       document.write("Exiting the loop based on user input.");
//       break;
//     }

//     document.write("You entered: " + userInput);
//   }
// }

// <-- 14 -->

// {
//     let i = 1;
//     for (i=1; i <= 10; i++){
//         if (i % 2 !== 0){
//             continue;
//         }
//         document.write(i + "\t")
//     }
// }
// <-- 15 -->

// {
//   let number = 1;

//   while (number <= 15) {
//     if (number % 3 === 0) {
//       number++;
//       continue;
//     }

//     document.write(number + "\t");

//     number++;
//   }
// }

// <-- 16 -->

// {
//     let startNum = prompt('Enter the starting number');
//     let endNum = prompt('Enter the ending number');
//     let i;
//     for(i = startNum; i <= endNum; i++)
//     {
//         if(i % 2 !== 0)
//         {
//             continue;
//         }
//         document.write(i + "\t")
//     }
// }

// <-- 17 -->

// {
//     let i = 0;
//     let num = prompt("enter a number");
    
//     do {
//       i++;
//       if (i % 5 === 0) {
//         continue;
//       }
//       document.write(i + "\t");
//     } while (i < num);
// }