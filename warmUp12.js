/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */


 function smallestAndLargest(inputString,range) {
 	var arr=inputString.split("");
 	var arr2=[];
 	for (var i in arr) {
 		arr2[i]= Number(arr[i]);
 	}
 	console.log(arr2)
 	var result=[];
 	var min=0;
 	var max=0;
 	var condition1=true;
 	var condition2=true;
 	while(true) {
 	for (var i=0;i<arr2.length;i++) {
 		 min=arr2[i]
 		 //max=arr2[i+1]
 		 for (var j=0;j<arr2.length;j++) {
 		 	max= arr2[j];
 		 	if(max-min+1!==10){
 		 		condition1=false
 		 	}
 		 	if(arr2[j]>=max ||arr2[j]<=min){
 		 		condition2=false
 		 	}
 		 	
 		 }

   
 
 }
       var index=-1
    
    if(!condition1 || !condition2) {
        var first=arr2[0]
        arr2.shift();
         index++;
        arr2[0]=arr2[0]+Math.pow(first,index)
    }
 
 if(condition1 &&condition2){
    result.push(min)
    result.push(max)
    break
 }
}
return result;
}