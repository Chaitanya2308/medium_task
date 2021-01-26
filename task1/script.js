console.log("Add Five")
//1: Add Five 
var num = 10;
function addFive(num) { 
return num+5;
}
console.log(addFive(5));
console.log(addFive(0))
console.log(addFive(-5));


//2: getOpposite

console.log("Get Opposite")
function getOpposite(num) {
    if(Number.isInteger(num)) return num * -1;
    return -1;
}
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));

//3: Fill in your code that takes an number minutes and converts it to seconds

console.log("Minute to Seconds")
function toSeconds(min) {
    return min*60;
}
console.log(toSeconds(5))
console.log(toSeconds(3))
console.log(toSeconds(2))


//4:Create a function that takes a string and returns it as an integer.
console.log("String to Integer")
function toInteger(mystr)
{
    return parseInt(mystr)
}
console.log("6")
console.log("1000")
console.log("12")

//5:Create a function that takes a number as an argument, increments the number by +1 and returns the result.
console.log("Increment by One")

function nextNumber(myint)
{
    return myint+1;
}
console.log(nextNumber(0))
console.log(nextNumber(9))
console.log(nextNumber(-3))

//6:Create a function that takes an array and returns the first element.
console.log("First Elemnt in array")
function getFirstElement(arr)
{
    return arr[0];
}
console.log(getFirstElement([1,2,3]))
console.log(getFirstElement([80,5,100]))
console.log(getFirstElement([-500,0,50]))


//7: Convert Hours into Seconds

console.log("Hours into Seconds")

function hoursToSeconds(arr)
{
    return arr*60*60;
}
console.log(hoursToSeconds(2))
console.log(hoursToSeconds(10))
console.log(hoursToSeconds(24))

//8: perimeter of a Rectangle
console.log("Perimeter of Rectangle")

function findPerimeter(num1, num2)
{
    return 2*(num1+num2);

}
console.log(findPerimeter(6,7))
console.log(findPerimeter(20,10))
console.log(findPerimeter(2,9))


//9: Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

console.log("Less Than 100")

function lessThan100(num1, num2)
{
    if(num1+num2<100)
    {
        return true;
    }else{
        return false;
    }
}
console.log(lessThan100(22,15))
console.log(lessThan100(83,34))


// 10: Modulus operator

console.log("Modulus Operator")

function remainder(num1, num2)
{
    return num1%num2;
}
console.log(remainder(1,3))
console.log(remainder(3,4))
console.log(remainder(-9,45))
console.log(remainder(5,5))


//11: McDonalds Animals Legs Count
console.log("Animals Legs Count")

function CountAnimals(tur,horse,pigs)
{
    return tur*2+horse*4+pigs*4;
}
console.log(CountAnimals(2,3,5))
console.log(CountAnimals(1,2,3))
console.log(CountAnimals(5,2,8))


//12: Frames per Second

console.log("Frames Per Second")

function frames(num1,num2)
{
    return num1*60*num2;
}

console.log(frames(1,1))
console.log(frames(10,2))
console.log(frames(10,25))


//13: Divisible by 5
console.log("Divisible By Five")
function divisibleByFive(num1)
{
    if((num1%5)===0)
    {
        return true;
    }else{
        return false
    }
}
console.log(divisibleByFive(5))
console.log(divisibleByFive(-55))
console.log(divisibleByFive(37))

//14: Given a number, “isEven” returns whether it is even.

console.log("Is Even")

function isEven(num)
{
    if(Number.isInteger(num))
    {
        if(num%2===0)
        {
            return true;
        }
        else{
            return false;
        }
    }
    return -1;
}

console.log(isEven(12))
console.log(isEven(0))
console.log(isEven(11))
console.log(isEven("11h"))

//15: Both Odd
console.log("Both Odd")

function areBothodd(num1, num2)
{
    if(num1%2!==0&& num2%2!==0)
    {
        return true
    }
    return false;
}

console.log(areBothodd(1,3))
console.log(areBothodd(2,3))
console.log(areBothodd(2,3))
console.log(areBothodd(0,0))

//16: get Full Name
console.log("Get Full Name")
function getFullname(firstName, lastName="")
{
    return '"'+firstName+' '+lastName+'"'
}
console.log(getFullname("GUVI","GEEK"))
console.log(getFullname("GUVI",))
console.log(getFullname("GUVI"))
console.log(getFullname("",""))


//17: getLengthOfWord
console.log("word Length")

function getLengthOfWord(word1)
{
    if(typeof word1=="string")
    {
        return word1.length;
    }else{
        return -1;
    }
}

console.log(getLengthOfWord("GUVI"))
console.log(getLengthOfWord(""))
console.log(getLengthOfWord())
console.log(getLengthOfWord(9))


//18: Same length

console.log("Is Same Length")

function isSamelength(word1, word2)
{
    if(word1.length===word2.length)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(isSamelength("GUVI","GEEK"))

//19: Distance

console.log("Distance")
function getDistance(x1,y1,x2,y2)
{
    return Math.hypot(x2 - x1, y2 - y1);
}
console.log(getDistance(100,100,400,300))


//20: Element at Nth Element

console.log("NTh Element")

function getNthElement(array,n)
{
    return array[n];
}

console.log(getNthElement([1,3,5],1))

//21: get Last element

function getLastElement(array)
{
    return array[array.length-1]
}
console.log(getLastElement([1,2,3,4]))


//22: get property

console.log("get Property")

var obj = {
    mykey:'value'
    };
function getProperty(obj, key)
{
    return obj[key]
}
console.log(getProperty(obj,'mykey'))
console.log(getProperty(obj,'dummykey'))


//23: Add property

console.log("Add property")
var obj={

}

function addProperty(obj,key)
{
    obj[key]=true;
    return obj;
}
console.log(addProperty(obj,"mykey"))


//24: Delete Object property
var obj1={
    name: "chaitanya",
}

console.log("remove object")
function removeProperty(obj1, key)
{
    delete obj1[key];
    return obj1[key]
}
console.log(removeProperty(obj1,"name"))

//25: count of Positive and sum of Negative
console.log("count of Positive and sum of Negative");

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {

    var result=[];
    var positive_count=0;
    var negative_sum=0;
    
    for(let i=0;i<arr.length;i++)
    {
       if(arr[i]<0)
       {
           negative_sum+=arr[i];
       }
       else
       {
           positive_count+=1;
       }
    }
    result.push(positive_count, negative_sum)
    return result;

}
console.log(countPositivesSumNegatives(arr));

//26 return only positive numbers
console.log("only Positive numbers")


function getPositives(ar){
    return ar.filter(element => element > 0);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

//27 FReturn power of Two

console.log("Power of Two")
function powersOfTwo(n){
    res = [];
    for(let i = 0; i <= n; i++) res.push(2**i);
    return res;
}
var res3= powersOfTwo(0)
var res1=powersOfTwo(1)
var res2=powersOfTwo(2)
console.log(res3);
console.log(res1);
console.log(res2);


//28: Maximum Number
console.log("maximum number")
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function findMax(ar)
{
let ans = ar.sort();
return ar[ar.length-1]
}
var max = findMax(ar);
console.log('Max: ', max)

//29: First 100 prime numbers

console.log("100 primes")
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, '->', i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
    var flag=0;
     for(let i=2 ; i < n/2 ; i++) {
      if(n%i === 0) {
         flag = 1;
         break;
      }
   }
   if(flag == 0) {
      return true;
   }
    }

 //30: Primes At greater than number

 console.log("Starting at Number")
 function getPrimes(nPrimes, startAt)
 {
 
     var n =0;
     var i = startAt;
     
     while(n < nPrimes)
     {
     if (isPrime(i))
     {
     console.log(n, '->', i);
     n++;
     }
     
     i++;
     }
 }
 // Returns true if a number is prime
 function isPrime(n)
 {
     var flag=0;
     for(let i=2 ; i < n/2 ; i++) {
      if(n%i === 0) {
         flag = 1;
         break;
      }
   }
   if(flag == 0) {
      return true;
   }
 }
 console.log(getPrimes(10, 100));

 //31: reverse String
 console.log("reverse String")
 var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   return s.split("").reverse().join("")
}

//32: Merged Array

console.log("Merged Array");

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
console.log(mergeArrays(ar1, ar2));
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 for(let el of ar2)
 {
 result.push(el);
 }
 
 return result;
}

//33: Sum of CSV File;

console.log("Sum of CSV")

console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));
function sumCSV(s)
{

    var numbers=s.split(",")
    var sum=0;
    for(let i=0;i<numbers.length;i++)
    {
        sum+=+numbers[i];
    }
    return sum;
  // your code here
}
