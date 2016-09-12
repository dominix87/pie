$(document).ready(function(){
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
      });
    });

$('.menu1').click(function()
{$(this).toggleClass('active');
return false;
})