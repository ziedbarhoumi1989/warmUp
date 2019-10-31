	alert("hello");
$('document').ready( function() {
$('button#create').on('click', function(){
	var $value =$('input').val();
	var $Rlist =$('<li ></li>');
	var $Llist =$('<li ></li>');
	//console.log(list)
	

		$('button#right').on('click', function(){
			($Rlist).text($value)
			$('ul.right').append($Rlist);

		})
		

		$('button#left').on('click', function(){
			($Llist).text($value)
			$('ul.left').append($Llist);
		})
		})

});
