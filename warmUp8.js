//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubse(array, sub){
	var test = [];
	
	// next step is creating loop inside a loop to check every maching elimint in the two arrays 
	// thin puch the comon elimint into test[]
	for (var i = 0; i < array.length; i++ ) {
		for (var k = 0; k < sub.length; k++){
			if (sub[k] === array[i]){
			test.push(sub[k]);
			}
		}
	}
// if the length test array = length of sub array it means the second array is a subset of the first array
// and will return true.

	if (test.length === sub.length){
		return true;
	}
return false;
}

