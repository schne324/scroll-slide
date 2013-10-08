var overflow, slider;

$(function(){
    overflow = this.getElementById("overflow");
    slider = this.getElementById("slider");
    winResize();
    $(window).bind({resize: winResize, scroll: winScroll});
});

function winResize(){   
    overflow.style.top = slider.offsetHeight + "px";
}

function winScroll(){
    var op = 1 - (window.pageYOffset / slider.offsetHeight);
    slider.style.opacity = op; 
    
}



// click scroller

var scroller = document.querySelector('#scroller'),
	overflow = $('#overflow');

$(scroller).click(scrollTo);


function scrollTo(div){
	console.log('div');
	$('html, body').animate({
		scrollTop: $("#overflow").offset().top
	},1000);
}