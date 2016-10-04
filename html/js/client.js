$(".container").click(function(){
	alert("Hello");
});

$("#add").click(function(){
	$.ajax({
		type: "POST",
		url: url,
		data: data,
		success: success,
		dataType: dataType
	});
});