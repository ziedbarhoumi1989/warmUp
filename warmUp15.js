// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reverse(string) {
	var arr=[]
	var result=[]
	var str=""
	var reversed=""
	for (var i=0;i<string.length;i++) {
		arr[i]=string[i]


	}
	for (var i=arr.length-1;i<0;i--) {
		end=i
		var index=0;
		if(arr[i]===" "){
			start=i
		}
		for(var j=start+1;j<=end;j++) {
			str += arr[j]
		}
		result[index]=str
		str="";
	}
	for (var a=0; a<result.length-1;a++) {
		reversed+= result[a]
	}
	reversed += result[result.length-1]
	return reversed;
}