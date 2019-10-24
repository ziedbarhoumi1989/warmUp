// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
/////////////////////////////////Q1
function fullName(firstName, lastName) {
	return firstName+" "+lastName;
}
fullName("Mahdi","ali");
/////////////////////////////////Q2
console.log(13%3===0)
////////////////////////////////Q3
function average(array) {
	var sum=0
	for(var i in array) {
		sum+=array[i];
	}
	return sum/array.length;
}
var ages= [13,14,13,15,16,17,19,13,16,15];
average(ages);
/////////////////////////////Q4
function ageInSecondes(age) {
	return age * 365 * 24 * 60 * 60;
}
ageInSecondes(30);