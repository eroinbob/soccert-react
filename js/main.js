$( document ).ready(function() {
    $('.open-mega-menu').click( function() {
    	$('.mega-menu').removeClass('animated bounceOutLeft');
    	$('.mega-menu').addClass('animated slideInLeft');
    	$('.mega-menu').css('display','block');
    });
    
    $('.mega-menu .close').click( function() {
	   	/*$('.mega-menu').removeClass('animated slideInLeft');*/
    	$('.mega-menu').addClass('animated bounceOutLeft');
    	/*$('.mega-menu').css('display','none');*/
    });
});