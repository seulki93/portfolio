$(document).ready(function() {
	
	
	$(".popbody").mCustomScrollbar({
		theme:"minimal-dark"
	});
	
	$('.workpiece').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	
	$('.popup .close').on('click',function(){
		$(this).parents().removeClass('active');
	});
	
	/* Scrollbar */
	
	/*$(window).on("load",function(){

		$(".popbody").mCustomScrollbar({
			theme:"minimal-dark"
		});
	});*/
	
	/* Scrollbar */
});
