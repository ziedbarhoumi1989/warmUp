//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 1, 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function isSubset(array1,array2) {
	var str1=array1.join("")
	var str2=array2.join("")
	
	if(str1.indexOf(str2)>-1){
		return true;
	}
	else{
		return false;
	}

}