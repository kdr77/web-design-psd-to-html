$(".scrolltop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:300,
    autoplayHoverPause:true,
    items:4,
    nav:true,
    dots:true
  });
});
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}