// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
function convert(string) {
var obj={};
for(var i=0;i<string.length;i++) {
	if(!obj[string[i]]) {
		obj[string[i]]=[1]
	} else obj[string[i]].push(obj[string[i]][i-1])
}

var j=0;
var result=""
var count=0
for(var key in obj) {
	while(j<string.length){
	if(string[j]===key) {
		result+= obj[key][count]
		count++
	}
}
		
}
return result
}