$(document).ready(function() {
  $(window).load(function() {
    setTimeout(function() {
    	if ( !$('#loader').hasClass('done') ){
    		$('#loader').animate({'width':'60px', 'height':'60px', 'margin-left':'-30px', 'margin-top':'-30px', 'top':'17px'}, 750);
    	}
	    if ( $('#loader').css('width') == '60px' ){
	    	alert('ok');
	    } else {
	    	$('#preloader').fadeOut(1000, function() {});
	    }
    }, 2000);
  });
});

$(function(){

	$('a').click(function(){
    $('html, body').animate(
        {scrollTop: $( $.attr(this, 'href') ).offset().top}, 
        500);
    return false;
	});

	$(window).scroll(function() {
		var headerHeight = $('header').height(); 
		var topOfWindow = $(window).scrollTop();
		var secondSec = $('.second_sec').height() - 167;
		var thirdSec = $('.third_sec').height();
		var fourthSec = $('.fourth_sec').height() - 511;
		var blog = 511;
		var fifthSec = $('fifth_sec').height();

		if ( topOfWindow >= headerHeight){
			$('.apearMenu').fadeIn();
		} else {
			$('.apearMenu').fadeOut();
		}

		if ( topOfWindow >= headerHeight && topOfWindow < headerHeight + secondSec){
			$('.leftMenu ul li').css('visibility', 'hidden');
			$('.rightMenu ul li a').css({'color':'#888', 'padding-left':'0'});
			$('#02').text('About Us');
			$('#01').text('01');
			$('#03').text('03');
			$('#04').text('04');
			$('#05').text('05');
			$('#06').text('06');
			$('#02').css({'color':'white', 'padding-left':'5px'});
			$('.leftMenu ul li:nth-child(2)').css('visibility', 'visible');
			$('.leftMenu ul li a').css('color', '#fff');
		} else if ( topOfWindow >= headerHeight + secondSec && topOfWindow < headerHeight + secondSec + thirdSec - 167 ){
			$('.leftMenu ul li').css('visibility', 'hidden');
			$('.rightMenu ul li a').css({'color':'#888', 'padding-left':'0'});
			$('#03').text('Team');
			$('#01').text('01');
			$('#02').text('02');
			$('#04').text('04');
			$('#05').text('05');
			$('#06').text('06');
			$('#03').css({'color':'black', 'padding-left':'5px'});
			$('.leftMenu ul li:nth-child(3)').css('visibility', 'visible');
			$('.leftMenu ul li a').css('color', '#000');
		} else if ( topOfWindow >= headerHeight + secondSec + thirdSec &&  topOfWindow < headerHeight + secondSec + thirdSec + fourthSec ){
			$('.leftMenu ul li').css('visibility', 'hidden');
			$('.rightMenu ul li a').css({'color':'#888', 'padding-left':'0'});
			$('#04').text('Services');
			$('#01').text('01');
			$('#02').text('02');
			$('#03').text('03');
			$('#05').text('05');
			$('#06').text('06');
			$('#04').css({'color':'white', 'padding-left':'5px'});
			$('.leftMenu ul li:nth-child(4)').css('visibility', 'visible');
			$('.leftMenu ul li a').css('color', '#fff');
		} else if ( topOfWindow >= headerHeight + secondSec + thirdSec + fourthSec && topOfWindow < headerHeight + secondSec + thirdSec + fourthSec + blog  ){
			$('.leftMenu ul li').css('visibility', 'hidden');
			$('.rightMenu ul li a').css({'color':'#888', 'padding-left':'0'});
			$('#05').text('Blog');
			$('#01').text('01');
			$('#02').text('02');
			$('#03').text('03');
			$('#04').text('04');
			$('#06').text('06');
			$('#05').css({'color':'white', 'padding-left':'5px'});
			$('.leftMenu ul li:nth-child(5)').css('visibility', 'visible');
			$('.leftMenu ul li a').css('color', '#fff');
		} else if ( topOfWindow >= headerHeight + secondSec + thirdSec + fourthSec + blog ){
			$('.leftMenu ul li').css('visibility', 'hidden');
			$('.rightMenu ul li a').css({'color':'#888', 'padding-left':'0'});
			$('#06').text('Contact Us');
			$('#01').text('01');
			$('#02').text('02');
			$('#03').text('03');
			$('#04').text('04');
			$('#05').text('05');
			$('#06').css({'color':'black', 'padding-left':'5px'});
			$('.leftMenu ul li:nth-child(6)').css('visibility', 'visible');
			$('.leftMenu ul li a').css('color', '#000');
		}
	});
	
	$('.apearMenu').hide();
	$('.leftMenu ul li').css('visibility', 'hidden');


	$('#01').click(function(){
		$('.leftMenu ul li').css('visibility', 'hidden');
		$('.rightMenu ul li a').css({'color':'#888', 'padding-left':'0'});
		$(this).text('Home');
		$('#02').text('02');
		$('#03').text('03');
		$('#04').text('04');
		$('#05').text('05');
		$('#06').text('06');
		$('#01').css({'color':'white', 'padding-left':'5px'});
		$('.leftMenu ul li:nth-child(1)').css('visibility', 'visible');
	});

	$('#02').click(function(){
		$('.leftMenu ul li').css('visibility', 'hidden');
		$('.rightMenu ul li a').css({'color':'#888', 'padding-left':'0'});
		$(this).text('About Us');
		$('#01').text('01');
		$('#03').text('03');
		$('#04').text('04');
		$('#05').text('05');
		$('#06').text('06');
		$('#02').css({'color':'white', 'padding-left':'5px'});
		$('.leftMenu ul li:nth-child(2)').css('visibility', 'visible');
	});

	$('#03').click(function(){
		$('.leftMenu ul li').css('visibility', 'hidden');
		$('.rightMenu ul li a').css({'color':'#888', 'padding-left':'0'});
		$(this).text('Team');
		$('#01').text('01');
		$('#02').text('02');
		$('#04').text('04');
		$('#05').text('05');
		$('#06').text('06');
		$('#03').css({'color':'white', 'padding-left':'5px'});
		$('.leftMenu ul li:nth-child(3)').css('visibility', 'visible');
	});

	$('#04').click(function(){
		$('.leftMenu ul li').css('visibility', 'hidden');
		$('.rightMenu ul li a').css({'color':'#888', 'padding-left':'0'});
		$(this).text('Services');
		$('#01').text('01');
		$('#02').text('02');
		$('#03').text('03');
		$('#05').text('05');
		$('#06').text('06');
		$('#04').css({'color':'white', 'padding-left':'5px'});
		$('.leftMenu ul li:nth-child(4)').css('visibility', 'visible');
	});

	$('#05').click(function(){
		$('.leftMenu ul li').css('visibility', 'hidden');
		$('.rightMenu ul li a').css({'color':'#888', 'padding-left':'0'});
		$(this).text('Blog');
		$('#01').text('01');
		$('#02').text('02');
		$('#03').text('03');
		$('#04').text('04');
		$('#06').text('06');
		$('#05').css({'color':'white', 'padding-left':'5px'});
		$('.leftMenu ul li:nth-child(5)').css('visibility', 'visible');
	});

	$('#06').click(function(){
		$('.leftMenu ul li').css('visibility', 'hidden');
		$('.rightMenu ul li a').css({'color':'#888', 'padding-left':'0'});
		$(this).text('Contact Us');
		$('#01').text('01');
		$('#02').text('02');
		$('#03').text('03');
		$('#04').text('04');
		$('#05').text('05');
		$('#06').css({'color':'white', 'padding-left':'5px'});
		$('.leftMenu ul li:nth-child(6)').css('visibility', 'visible');
	});

});