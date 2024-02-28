// //<-- 1 -->

// {
//     function Square(){
//         let i;
//         let Square = 0;
//         for(i = 1 ; i <= 20 ; i++){
            
//             Square = i * i

//             console.log(Square);
//         }
//     }
//     Square() ;
// }

// <-- 2 -->
// {
//     function Fahrenheit(){
//         let Celsius = 20.00;

//         console.log("Fahrenheit  " , (Celsius * 9/5) + 32 ); 

//     }
//     Fahrenheit();
// }

// // <-- 3 -->

// {
//     function Rectangle(){
//         let l = 12; w = 20; r = 0;

//         r = l * w;
//         console.log("The Reactangle Area  " , r);
//     }
//     Rectangle();
// }

// <-- 4 -->
// {
//     function reverse(){
//         let num1 = "deep";
//         let result = num1.toString().split('').reverse().join('');

//         console.log("Reverse is : ", result);
//     }
//     reverse();
// }

// // <-- 5 -->

// {
//     function num(string){
//         let Vowels = 'aAeEiIoOuU';
//         let count = 0;

//         for(let i = 0; i < string.length; i++){
//             if (Vowels.indexOf(string[i]) !== -1){
//                 count += 1;
//             }
//         }
//         return count;
//     }
//     console.log("The Total Number Of Vowels is", num("Hello world"));
// }

// // <-- 6 -->
// {
//     function SI(){
//         let p = 10000;
//         let r = 5;
//         let t = 5;
//         let si;

//         si = (p * r * t)/100;
        
//         return si;
//     }
//     console.log("Simpe Interest is", SI());
// }

// // <-- 7 -->

// {
//     function random(){
        
//         let random = Math.random() * (200 - 23) + 1;
//         let random1 = Math.random() * (200 - 23) + 1;

//         console.log("The Random Number is", random);
//         console.log("The Random Number is", random1);

//     }
//     random();
// }

// // <-- 8 -->

// {
//     function date(){
//         let now = new Date();
//         const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//         let day = weekday[now.getDay()];
//         let hours = now.getHours();
//         let minutes = now.getMinutes();

//         console.log("Today is", day , "and the time is", hours,":",minutes);
//     }
//     date();
// }

// // <-- 9 -->
// {
    
//     function order(string){

//         return string.split('').sort().join('');

//     }
//     console.log("FEDCBA =", order("FEDCBA"));
// }

