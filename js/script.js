

$(function(){ 

	// highlight current nav
	$("#workshops a:contains('workshops')").parent().addClass('active');	
	$("#resources a:contains('resources')").parent().addClass('active');
	$("#blog a:contains('blog')").parent().addClass('active');
	$("#about a:contains('about')").parent().addClass('active');
	$("#contact a:contains('contact')").parent().addClass('active');
	
	// make menus drop down automatically	
	$("ul.nav li.dropdown").hover(function(){
		$(this).children("dropdown-menu").fadeIn("slow");
		}, // in
		function(){
			$(this).children("dropdown-menu").fadeOut("fast");
		} // out
	); // hover
}); // jQuery loaded
