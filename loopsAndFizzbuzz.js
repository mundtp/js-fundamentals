/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var i
var sumOfArray = function(input){
    var a = 0
    for(i = 0;i < input.length; i = i + 1){
		a = a + input[i]
    }
       return a
}


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.
var maxOfArray = function(input){
    var maxNumber = 0
	for(i = 0;i < input.length;i = i + 1){
  		var current = input[i]
        if(typeof current !== 'number'){
        	return 'not a number'
        }
  		else if(current > maxNumber){
      		maxNumber = current
  		}
 	 }
	return maxNumber
}


console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){
	  var vowel = 'aeiouAEIOU'
	  	for (var i = 0; i < vowel.length; i = i + 1){
	   			var element = vowel[i];
	   			if (element === symbol) {
	       		return true
	   			}
		}

	 	{return false}	
	}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
var reverse = function(string){
    var solutionString = ''
    var len = string.length
    	for(i = len - 1; i >= 0; i--){
   	 	solutionString += string[i]
		}
    return solutionString
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")



/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */
var fizzbuzz = function(number){
    var string = ''
    for(i = 1; i <= number; i++){
        var iteration = i
	    if( (iteration % 3 === 0) && (iteration % 5 !== 0) ) {string += 'fizz'}
	    if( (iteration % 5 === 0) && (iteration % 3 !== 0) ) {string += 'buzz'}
	    if( (iteration % 3 === 0) && (iteration % 5 === 0) ) {string += 'fizzbuzz'}
	    if( (iteration % 3 !== 0) && (iteration % 5 !== 0) ) {string += '.'}
    }
    return string
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")


/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

var memberOf = function(iterable,value){
	  	for (var pos = 0; pos < iterable.length;pos = pos + 1){
	   		var element = iterable[pos]
	   			if (element === value) {
	      			 return true
	   			}
		}
	    
	   	{return false}
  }

function findLongestWord(sentence){
    var number = 0
    var newArray = []
    var stringArray = sentence.split(" ")
    for(i = 0; i < stringArray.length; i++){
        if((stringArray[i].length > number) && (memberOf(stringArray[i],"'") === false)){
        	number = stringArray[i].length
        	newArray.push(stringArray[i])
        }     
		}
    return newArray[newArray.length-1] 
}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")


/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

var GCD = function(a,b){
    
    for(i = 1; i <= a; i++ ){
        if(a % i === 0){
        	var testDenom = a / i
        	if(b % testDenom === 0) return testDenom
        }
    }
}

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

console.log('Completed')