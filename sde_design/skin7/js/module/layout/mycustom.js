$(document).ready(function() {
    $(".fadein a:gt(0)").hide();
	setInterval(function(){
	$(".fadein a:first-child").fadeOut().next("a").fadeIn().end().appendTo(".fadein");
	},5000);

	$(document).on("click", ".naccs .menu div", function() {
		var numberIndex = $(this).index();
	  
		if (!$(this).is("active")) {
		  $(".naccs .menu div").removeClass("active");
		  $(".naccs ul li").removeClass("active");
	  
		  $(this).addClass("active");
		  $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
	  
		  var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		  $(".naccs ul").height(listItemHeight + "px");
		}
	  });


});