// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here


// 1-using + operator combine your partner first and last name .
function fullName(first, last){
	full = "";
	full = first + " " + last;
	return full;
}

// 2-find if the number 13 is a multiple of 3 or not.

function multOfThree(n){
	if (n % 3 !== 0) {
		return "No !" + n + " " + "is nota a multiple of 3 ";
	}
	return "yes " + n + " " + "is a multiple of 3 ";
}

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

function average(arr) {
	var total = 0;
	for ( var i = 0; i < arr.length; i++ ){
		total = total + arr[i];
	}
	return total / arr.length;
}

// 4-calculate your age in seconds.

function secAge(age) {
	var sec = 0;
	sec = age * 365 * 24 * 60 * 60 * 60
	return "your age in seconds is " + sec + " " + "seconds";
}
