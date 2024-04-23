function wordsLen(str) { 
    const array = str.trim().split(/\s+/); 
    return array.length; 
} 
  
const str = "hello World"; 
  
console.log("Word count:" ,wordsLen(str));