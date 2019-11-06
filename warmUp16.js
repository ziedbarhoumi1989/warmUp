// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
function instances(string) {
	var obj={}

	obj.b=0
	obj.a=0
	obj.l=0
	obj.o=0
	obj.n=0

	for (var i=0; i<string.length;i++) {
		for (var key in obj) {
			if(string[i] === key) {
				obj[key]=obj[key]+1
			}
		}
	}

	obj.l= Math.floor((obj.l)/2)
	obj.o= Math.floor((obj.o)/2)
	
	var min=obj["b"]
	for (key in obj) {
		if(obj[key] <= min) {
			min = obj[key]
		}
	}
	return min
	
}