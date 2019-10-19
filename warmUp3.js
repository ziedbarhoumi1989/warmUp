// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var females ="Hania, Insaf, Lina, Ons, Dhia, Houda, Nejah, fooz, ruba, Fatima, Amera" 

var males ="Jihed,Adnen, Allam, Bilel, Fares, Firas, Khoubaieb, Farouk, Hamza, Taha, Taha, Wajdi, Zied, Heni, Adam, Malik, Ali, Hashem, omar, mohamed, mohamed, salim ali, muftah, ahmed, hamam, AbdeSofian, Essam, abdlrrahman, Abdolsalam"

var instructors = "Saif, Matt, Yusef"

// var femalesArr =["Hania", "Insaf", "Lina,Ons", "Dhia", "Houda", "Nejah", "fooz", "ruba", "Fatima","Amera"]; 

// var malesArr =["Jihed","Adnen", "Allam", "Bilel", "Fares", "Firas", "Khoubaieb", "Farouk", "Hamza", "Taha","Taha","Wajdi", "Zied", "Heni", "Adam", "Malik", "Ali", "Hashem", "omar", "mohamed", "mohamed", "salim ali", "muftah", "ahmed", "hamam", "AbdeSofian", "Essam", "abdlrrahman", "Abdolsalam"];

// var instructorsArr = ["Saif", "Matt", "Yusef"];

 
 


 
 
 




// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

 function middle(arr){
       var i;

      if(arr.length % 2 === 0) { 
            return "This array has even number of eliments"
      }
     
      i = (arr.length  - 1) / 2;
      return arr[i];
}






// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function dubleEvenInd(array){
      for (var i = 0; i < array.length; i++){
           if (i % 2 === 0){
                 
                array[i] = array[i] * 2;
            }
           
      } 
             
      return array;
}