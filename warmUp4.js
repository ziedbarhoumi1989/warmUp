 function each(array, func) {
 	for (var i = 0; i < array.length; i++){
 		func (array[i]);
 	}
 }


function map(array) {
	var acc = [];
	each(array, function(elm, i){
		acc.push(f(elm, i));
	});
	return acc;
}





// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(str){
	var arr = str.split('');
	var x = 1;
	
	each(arr, function(elm, i){
		acc.push([arr[arr.length - x], x]);
		x = x + 1;
	});
	return acc;	
}
	


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength(arr){
	return filter (arr, function(elm, i){
		return elm.length 
	});
	
}
