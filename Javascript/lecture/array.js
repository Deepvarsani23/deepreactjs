/* Javascript Array */  

// let newarry = [1,false,"string"]
// console.log(newarry);
// console.log(newarry.length);
// let newarry2 = ["apple" , "banana" , "watermelon" ,  , "lichi"]
// console.log(newarry2);
// console.log(newarry2[4]);
// console.log(Object.keys(newarry2));
// console.log(newarry2.length);
// newarry2.length = 10;
// console.log(newarry2);
// console.log(Object.keys(newarry2));
// newarry2[0] = "Graps"
// console.log(newarry2);
// let newstring  = newarry2.toString();
// console.log(newstring);
// console.log(typeof(newstring));



// Array length properties
// Accessing the First Array Element
// Accessing the Last Array Element
// Adding Array Elements
// Converting Arrays to Strings

/*

Array indexes start with 0:

[0] is the first array element
[1] is the second 
[2] is the third ...

*/



/* Array length properties */

// let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
// console.log(arry);
// console.log(arry[0]);
// console.log(arry[5]);
// arry.push("frontend");  
// console.log(arry);
// arry.pop()
// arry.pop()
// arry.pop()
// console.log(arry);

// arry[0] = "one"

// console.log(arry);

/* The length property provides an easy way to append new elements to an array without using the push() method. */



/* The join() method also joins all array elements into a string. */

{
    // let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
    // let arry2 = arry.join("+")
    // console.log(arry2);
    // console.log(typeof(arry2));
}

/* Popping in javascript Array */

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = fruits;
    
    document.getElementById("demo-1").innerHTML =  fruits.pop();
    
    console.log(fruits);
    
    console.log(fruits.length);
}

/* The pop() method returns the value that was "popped out" */

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];

//     document.getElementById("demo").innerHTML = fruits;
    
//     document.getElementById("demo-1").innerHTML = fruits.pop();
//     document.getElementById("demo-2").innerHTML = fruits.pop();
//     document.getElementById("demo-3").innerHTML = fruits.pop();

//     console.log(fruits);
// }


/* Pushing in javascript Array */

/* The push() method adds a new element to an array (at the end) */

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];

//     document.getElementById("demo").innerHTML = fruits;

//     fruits.push("Kiwi");

//     document.getElementById("demo-1").innerHTML = fruits;

//     console.log(fruits);
// }

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // document.getElementById("demo").innerHTML = fruits.push("Kiwi");

    // document.getElementById("demo-1").innerHTML = fruits.length;
}

/* Shifting Elements */

/* JavaScript Array shift() */

/* The shift() method removes the first array element and "shifts" all other elements to a lower index */

{
    //  let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
    //  let arry2 = arry.shift();
    //  let arry3 = arry.shift();
    //  console.log(arry2);
    //  console.log(arry3);
    //  console.log(arry);
}

/*  The shift() method returns the value that was "shifted out" */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // document.getElementById("demo").innerHTML = fruits.shift();
    // document.getElementById("demo-1").innerHTML = fruits;
}

/*  JavaScript Array unshift() */
/* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements */

{
    //  let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
    //  arry.unshift("OneAuthor");
    //  console.log(arry);
}

/* The unshift() method returns the new array length */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits.unshift("Lemon");
    // document.getElementById("demo-1").innerHTML = fruits;
}

/*  Changing Elements */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // fruits[10] = "Kiwi";
    // console.log(fruits);
}

/* JavaScript Array add element */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
    // fruits[fruits.length] = "Kiwi";
    // document.getElementById("demo-1").innerHTML = fruits;
}

/* JavaScript Array delete() */

/* Array elements can be deleted using the JavaScript operator delete. */

/* Using delete leaves undefined holes in the array. */

/* Use pop() or shift() instead. */

{
        // let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
        // console.log(arry);
        // console.log(arry.length);
        // delete arry[4]
        // console.log(arry);
        // console.log(arry.length);
        
        // arry.length = 20;
        // console.log(arry);
        
        // arry[16] = "skillQode"
        // console.log(arry);
 }
 
 /* Merging (Concatenating) Arrays */
 
 {

    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // let arry2 = ["kotlin" , "dart" , "nodejs"  , "php" , "wordpress"];
    // let arry3 = ["boostrap" , "tailwind" , "reactjs" , "nextjs"];

    // let arry4 = arry1.concat(arry3 , arry2)

    // console.log(arry4);
  
 }
 
 /* The concat() method does not change the existing arrays. It always returns a new array. */
 
 /* Splicing and Slicing Arrays */
 
 /* JavaScript Array splice() */


// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)
 
 {
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // console.log(arry1);
    // let arry2 = arry1.splice(3  , 3 , "reactjs" , "nextjs")
    // console.log(arry2);
    // console.log(arry1);

 }
 

 
 /* JavaScript Array slice() */

// slice()
// slice(start)
// slice(start, end)
 
 {
    // let arry1 = [45 , 89 , 21 , 2 , 57 , 23]
    // console.log(arry1);
    // let arry2 = arry1.slice(0 , 3)
    // console.log(arry2);
    // console.log(arry1);
 }
 
 /*  Array.isArray */
 
 {
    // console.log(Array.isArray(17));
 }
 
 /*  javascript Sorting Array */
 
 {
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // console.log(arry1);
    // let arry2 = arry1.sort()
    // console.log(arry2);
 }
 
 /*  Reversing array */
 
 {
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // console.log(arry1);
    // let arry2 = arry1.reverse();
    // console.log(arry2);
 }
 
 /*  Number Sort */
 
 {
    // let arry1 = [189 , 45 , 56 , 128  , 10 , 150 ]
    // console.log(arry1);
    // let numbersorted = arry1.sort((a  , b) => a - b)
    // console.log(numbersorted);
 }
 
 /*  javascript array map() */
 
 {
    //  const number1 = [56 , 798 , 345  ,35];
    //  console.log(number1);
    //  const number2 = number1.map(myFunction);

    //  const number3  = number2.sort((a, b) => a - b)
 
    //  console.log(number2);

    //  function myFunction(value){
    //      return value * 2;
    //  }
 }
 
 
 /*  javascript Array flatMap() */
 
 {

    // let flatmap = [1 , 2 , 3 , 4]

    // let flatmap1 = flatmap.flatMap((num) => num === 3 ? [1,1] : 2)

    // console.log(flatmap1);
 }

 /* Javascript Array flat() */

 {
    // let flatarray  = [10 , 20 , [22 , 33 , [44  , 55 ,[66 , 77]]]]
    // let flatmap2  = flatarray.flat(3)
    // console.log(flatmap2);
 }
 
 /* javascript array filter() */
 
 {

    // let filterarry = ["tennis" , "baseball" , "cricket"  , "khokho" , "vollyball" , "chess"]
    // let filterarry2  = filterarry.filter((word)  => word.length < 10)
    // console.log(filterarry2);

    // let filterarry3 = filterarry2.sort()
    // console.log(filterarry3);
    
 }
 
 /*  javascript array fill method */
 
 
 {
    
 }
 
 /* javascript array copywithin() method */
 
 {
     // const fruits = ["A" , "B" , "C" , "D" , "E" , "F"];
     // const newcopy = fruits.copyWithin(0 , 3 , 4);
     // console.log(newcopy);
 }
 
 /* javascript valueof() method */
 
 {
    //  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango" , "watermelon" , "kiwi"  , "Olive"];
    //  const newfruits = fruits.valueOf();
    //  console.log(newfruits);
 }
 
 /*  javascript flat() method */
 
 {
    //  const fruits = [1,2,3,[4,[5,6,[7,8,9]]]];
    //  const newarray1 = fruits.flat();
    //  const newarray2 = fruits.flat(2);
    //  const newarray3 = fruits.flat(3);
    //  const newarray4 = fruits.flat(4);
    //  console.log(newarray1);
    //  console.log(newarray2);
    //  console.log(newarray3);
    //  console.log(newarray4);
 }
 
 /*  JavaScript Multidimensional Array */
 
 /* A multidimensional array is an array that contains another array. */
 
 {
     // // multidimensional array
     // const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
 }
 
 {
     // let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];
 
     // let student1 = ['Jack', 24];
     // let student2 = ['Sara', 23];
     // let student3 = ['Peter', 24];
 
     // // multidimensional array
     // let studentsDatas = [student1, student2, student3];
 
     // // both example 1 and example 2 creates a multidimensional array with the same data.
 }
 
 /* Access Elements of an Array */
 
 {
     // let x = [
     //     ['Jack', 24],
     //     ['Sara', 23], 
     //     ['Peter', 24]
     //     ];
         
     //     // access the first item 
     //     console.log(x[0]);
         
     //     // access the first item of the first inner array
     //     console.log(x[0][0]); 
         
     //     // access the second item of the third inner array
     //     console.log(x[2][1]); 
 }
 
 
 /* Add an Element to a Multidimensional Array */
 
 {
     // // Adding Element to the Outer Array
 
     // let studentsData = [['Jack', 24], ['Sara', 23],];
     // studentsData.push(['Peter', 24]);
 
     // console.log(studentsData);
 }
 
 {
     // Adding Element to the Inner Array
     {
         // // using index notation
         // let studentsData = [['Jack', 24], ['Sara', 23],];
         // studentsData[1][2] = 'hello';
     
         // console.log(studentsData);
     }
     {
         // // using push()
         // let studentsData = [['Jack', 24], ['Sara', 23],];
         // studentsData[1].push('hello');
 
         // console.log(studentsData);
     }
     {
         // // the Array's splice() method to add an element at a specified index.
 
         // let studentsData = [['Jack', 24], ['Sara', 23],];
 
         // // adding element at 1 index
         // studentsData.splice(1, 0, ['Peter', 24]);
 
         // console.log(studentsData);
     }
 
     /*  Remove an Element from a Multidimensional Array */
 
     {
         // // remove the array element from outer array
         // let studentsData = [['Jack', 24], ['Sara', 23],];
         // studentsData.pop();
 
         // console.log(studentsData);
     }
     {
         // // remove the element from the inner array
         // let studentsData = [['Jack', 24], ['Sara', 23]];
         // studentsData[1].pop();
 
         // console.log(studentsData); // [["Jack", 24], ["Sara"]]
     }
     {
         // // the splice() method to remove an element at a specified index.
         // let studentsData = [['Jack', 24], ['Sara', 23],];
 
         // // removing 1 index array item
         // studentsData.splice(1,1);
         // console.log(studentsData);
     }
 }