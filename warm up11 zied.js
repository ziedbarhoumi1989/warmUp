//alert("hello");
var value=$('input').val();
$('button#create').on('click',function(){
	var list=$('<li></li>')
		list.text(value)
		if($('button#right').on('click',function(){
			$('ul .right').append(list)
		}
		if($('button#left').on('click',function(){
			$('ul .left').append(list)
		}
)
})