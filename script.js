// Print odd numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var evenNumbers = numbers.filter(function(item) {
   return (item % 2 === 1);
});
console.log(evenNumbers);

//Convert all the strings to title caps in a string array

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(titleCase("converting string to titlecase"));

// Sum of all numbers in an array

const sum = [1, 2, 3].reduce(add,0); 
function add(accumulator, a) {
    return accumulator + a;
}
console.log(sum); // 6

// Return all the prime numbers in an array

const array = [-5, -3, -2, -1, ...Array(20).keys()]; 
// Array(20).keys() generates numbers from 0 to 19.
function isPrime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13, 17, 19]

// Return all the palindromes in an array

var myArray = ['121', 'racecar', '333', 'ada'];
function palindromize(word) {
    var p = word.split("").reverse().join("");
    return p === word ? word : 0;
}
console.log('<pre>' + JSON.stringify(myArray.map(palindromize), 0, 4) + '</pre>');

// Return median of two sorted arrays of same size

function getMedian(ar1, ar2, n)
{
	var i = 0; 
	var j = 0; 
	var count;
	var m1 = -1, m2 = -1;
               for (count = 0; count <= n; count++)
	{
	         if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}
                              else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}
                              if (ar1[i] <= ar2[j])
		{
			m1 = m2; 
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2;
			m2 = ar2[j];
			j++;
		       }
	        }
      return (m1 + m2)/2;
      }


var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
	console.log("Median is "+ getMedian(ar1, ar2, n1));
else
	console.log("Doesn't work for arrays of unequal size");
// Remove duplicates from an array

function getUnique(arr){
      let uniqueArr = [];
     for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
const uniqueArray = [1, 2, 3, 2, 3];
getUnique(uniqueArray);

// Rotate an array by k times

function rotateArray(arr,val,pos){
    // set pos to 0 if moving val to first position, or 1 for last position
    arr=arr.concat(arr.splice(0,arr.indexOf(val)+pos));
    return arr;
}
var adjustedArray=rotateArray(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],'may',5);
console.log(adjustedArray)

//Do the below programs in arrow functions

// Print odd numbers in an array
 function getOddNumbers() {
        var arr = [4,5,7,8,14,45,76];
    	  var evens = arr.filter(number => number % 2 === 1);
        console.log('Odd Numbers: ' + evens);
    }
     getOddNumbers();
// Convert all the strings to title caps in a string array
function titleCase(str) {
  return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}
console.log(titleCase('iron man'));
console.log(titleCase('iNcrEdible hulK'));
// Sum of all numbers in an array
let arr = [1, 2, 3, 4];
let sumOfNum = arr.reduce((v, i) => (v + i));
console.log(sumOfNum);
function arraySum(array){
  var total = 0,
      len = array.length;
for (var i = 0; i < len; i++){
    total += array[i];
  }
 return total;
}
var my_array = [1,2,3,4];
// Returns 10
console.log( arraySum( my_array ) );
// Return all the prime numbers in an array
const newArray = [1, 3, 2, 5, 10];
const isPrimeNum = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = newArray.filter(element => isPrimeNum(element));
console.log(myPrimeArray);
// Return all the palindromes in an array
function isPalindrome(word) {
  palindromeWord = ''
  for(var i = word.length - 1; i >= 0; i--) {
    palindromeWord += word.charAt(i)
  }
return palindromeWord === word
}
let arrList =  ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip']
let palindromeArr = []
arrList.forEach(word => {
  if (isPalindrome(word)) {
    palindromeArr.push(word)
  }
})
console.log(palindromeArr)

