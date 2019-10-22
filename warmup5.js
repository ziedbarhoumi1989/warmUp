// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.


//create a data model for classmates: each one of my classmates have different attributes 
//for example: first name, last name, gender and age

//factory function:
function makeClassmate(first, last, gender, age) {
	return {
		firstName:first,
		lastName:last,
		gender:gender,
		age:age
	};
} 

//array that holds the classmates;
var classmates=[makeClassmate("ahmed", "wheida","male",25), makeClassmate("ali","abbas","male",21),
makeClassmate("jihan","fares","female",22)];


//function display friend:
function displayFriend(mate) {
	return mate.first+ " "+mate.last +"is a "+gender+ " and has "+ mate.age +"years old"; 
}


///function add Friend:
function addFriend(mate) {
	classmates.push(mate);
}

//calculate the number of males:
function numberOfMales(array) {
	var count=0;
	for(var i=0; i<array.length; i++) {
		if( array[i][gender]==="male") {
			count++
		}
	}
	return count;
}


// function search mates:
///
function searchMates(array, query) {
	var mate={}
	for(var i=0; i<array.length; i++) {
		if (typeof(query)==="number") {
				if(array[i].age===query){
					arr= array[i];
				}
		if (typeof(query)==="string") {
			for (var key in array[i]){
			
				if(array[i][key].indexOf(query)>-1) {
					arr=array[i];
				} 
			}

			}

		}
	}
}




