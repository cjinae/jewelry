//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(document).ready(function(){

$('.outer-row').hover(function(){
	$(this).find('.product-detail').toggleClass('show');
	$(this).next('li').find('.product-overlay--bottom').toggleClass('hide');
	$(this).next('li').find('.product-overlay--topsmall').toggleClass('hide');
});	


})