// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

<<<<<<< HEAD
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
//1
var females=["houda","roba","insaf"];
var males=["bilel", "heni,","mehdi"];
var instructors=["matt","seif","yossef","tamara"];
//2
function middle(array) {
	if(array.length%2===1){
	return array[Math.floor(array.length/2)]}
	return array[Math.floor(array.length/2)]+" or "+array[Math.floor(array.length/2)+1]
}
//3
function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 
function map(array, f) { 
       var acc = []; 
       each(array, function(element, i) { 
             acc.push(f(element, i)); 
       }); 
       return acc; 
 }
function multiplyByTwo(a,b){
	if (b%2===0){
		a=a*2;
	}
	return a;
}
function evenIndexesMyultipliedByTwo(array) {
	return map(array,function(element,index){
		return multiplyByTwo(element,index)})
}
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
