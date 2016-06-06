// PART 0: Write a function called squareDance() that squares each number in an array.
function squareDance(array){
    var newArray = []
    for (var i = 0; i < array.length; i++){
  	   newArray.push(Math.pow(array[i],2))
    }
return newArray
}

console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.

function nicer(input){

    var newString =  ""
    var stringArray = input.split(" ")
    for(var i = 0; i < stringArray.length-1; 		i++){
        if((stringArray[i] !== 'darn') &&	 	(stringArray[i] !== 'heck')
          && (stringArray[i] !== 'crappy')&& (stringArray[i] !== 'dang')){
        newString += stringArray[i] + ' '
        }  }   
    newString += stringArray[stringArray.length-1]
    return newString
}

console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence. 

var capFirstLetter = function(word){
    var newString = ''
    var array = word.split('')
    newString += array[0].toUpperCase()
    for(var i = 1;i < array.length;i++){
        newString += array[i]}
    return newString
}   

function capitalizeAll(sentence){
    var newString = ''
var a = sentence.split(' ')
newString = capFirstLetter(a[0])
    for(var i = 1;i < a.length; i++){
        var c = " " +capFirstLetter(a[i])
        newString += c
    }
    return newString
}

console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

console.log('Completed thru 2')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

function properSentences(sentence){
    var newString = ''
var a = sentence.split('. ')
newString = capFirstLetter(a[0])
    for(var i = 1;i < a.length; i++){
        var c = ". " +capFirstLetter(a[i])
        newString += c
    }
    return newString
}

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")
console.log('Completed thru 3')

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 

function iPutTheFunIn(word){
    var newString = ''
var a = word.split('')
    for(var i = 0;i < a.length/2; i++){
        var c =a[i]
        newString += c
    }
    newString += 'fun'
      for(var i = a.length/2;i < a.length; i++){
        var c =a[i]
        newString += c
    }
    return newString
}

console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")
console.log('Completed thru 4')
// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

function pipeline(paragraph,nicer,properSentences){
    return properSentences(nicer(paragraph))
    
}

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
	return n * n
}

var addOne = function(n) {
	return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)
console.log('Completed thru 5 test 2')

// test 3
var exclaimAll = function(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i ++) {
		newArr.push(arr[i] + '!')
	}
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")

