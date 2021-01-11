const palindrome = str => {

    str = str.toLowerCase()
    // reverse input string and return the result of the
    // comparisong
    
    console.log(str === str.split('').reverse().join(''))
  }

palindrome("James");