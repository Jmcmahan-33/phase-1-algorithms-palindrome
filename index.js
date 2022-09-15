

function isPalindrome(word) {
  // Write your algorithm here
  let n = word.length
  console.log("hello")
  for(let i = 0; i < n; i++,n--)
  if (word[i] != word[n - 1])
  return false
  return true
  
}

/* 
  //reate a function that will take in one argument as a string,
  //loop/iterate over each string element and return true if the string is a palindrom
  otherwise 
  return false if string is not a palindrome 
  return true if string is palindrome
*/

/*
  I wrote a function that took in the argument "word". then I assigned each word length to the the variable n.
  After that, I created a for loop that ran through each word. In the loop I assigned 0 to the variable i. if i is less than n(the word length, then )
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("expecting: to return string")
  // console.log()
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

// initialize empty array called result

// iterate over each item in the input array:
//   if element is a number:
//     push item onto result

// return result