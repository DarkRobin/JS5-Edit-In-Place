$(document).on('ready', function() {
  	$( '.edit' ).on('click', function() {
  		console.log('edit');

	});

  	$(".comment").on("click", function () {
  		var $edit = $(".edit");
  		var $input = $(".input-field");
  		var words = $edit.text().trim();

  		$input.val(words);
		$(".comment").hide();
  		$(".input-container").css({"display" : "block" });
  	});


  	$('.submit-form').on('click', function () {
		var $edit = $(".edit");
  		var $input = $(".input-field");
  		var words = $input.val();
  			//$edit == $(".edit")
  		$(".input-container").css({"display" : "none"});
  		$edit.text(words);
  		$(".comment").css({"display" : "block"});




  	});



});