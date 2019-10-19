// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]+ 
/////////////////////////////1
function reverseString (string) {
	var str="";
	var i=0;

	while (i< string.length) {
		str=str + string[string.length-1-i]+ (i+ 1);
		i++;
	}

	return str;
}
///////////////////////////////////////2
function sameLength(array) {
	var arr=[];
	for (var i=0;i<array.length;i++) {
		for(var j=0;j<i;j++) {
			if(array[i].length===array[j].length){
				arr.push(array[i]);
				arr.push(array[j]);
			}
		}
	}
	return arr;
}