//script for redirecting to the next page
$(document).ready(function(){
  book();
});

$(document).ready(function(){
  $("#placeOrder").on("click", function(e){
    e.preventDefault();

    $("#online").show();

    placeOrderOnline();

    $("#order").on("click", function(){

      $("#online").hide();
    });
  });
});


// queries for scrolling page
$(document).ready(function(){
  $("#topPage").on("click", function(e){
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});


$(document).ready(function(){
  $("#location").click(function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#contactUs").offset().top
    }, 2000);
  });
});


$(document).ready(function(){
  $("#contactUs").click(function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#topPage").offset().top
    }, 2000);
  });
});


$(document).ready(function(){
  $("#reservation").click(function(event){
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $("#setReser").offset().top
    }, 1000);

    book();
  });
});


$(document).ready(function(){
  $("#contact").click(function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#topPage").offset().top
    }, 2000);
  });
});


// queries for scrolling menu page
$(document).ready(function(){
  $("#traditionalPage").click(function(event){
    event.preventDefault();

    if($(window).width() < 1000) {
      $('html, body').animate({
        scrollTop: $("#tradPiza1").offset().top - 320
      }, 2000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#tradPiza1").offset().top
      }, 2000);
    }

    $("#tableBackground1").fadeOut(2800);
    $("#tableBackground1").fadeIn(2800);
  });
});


$(document).ready(function(){
  $("#gourmetPage").click(function(event){
    event.preventDefault();

    if($(window).width() < 1000) {
      $('html, body').animate({
        scrollTop: $("#gourPiza").offset().top - 320
      }, 2000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#gourPiza").offset().top
      }, 2000);
    }

    $("#fadeGour").fadeOut(2800);
    $("#fadeGour").fadeIn(2800);
  });
});


$(document).ready(function(){
  $("#italianPage").click(function(event){
    event.preventDefault();

    if($(window).width() < 1000) {
      $('html, body').animate({
        scrollTop: $("#targetItalian").offset().top - 320
      }, 2000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#targetItalian").offset().top
      }, 2000);
    }

    $("#listStyle1").fadeOut(2800);
    $("#listStyle1").fadeIn(2800);
  });
});

$(document).ready(function(){
  $("#beveragesPage").click(function(event){
    event.preventDefault();

    if($(window).width() < 1000) {
      $('html, body').animate({
        scrollTop: $("#targetBeverages").offset().top - 320
      }, 2000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#targetBeverages").offset().top
      }, 2000);
    }

    $("#listStyle2").fadeOut(2800);
    $("#listStyle2").fadeIn(2800);
  });
});

$(document).ready(function(){
  $("#kidsPage").click(function(event){
    event.preventDefault();

    if($(window).width() < 1000) {
      $('html, body').animate({
        scrollTop: $("#targetKids").offset().top - 320
      }, 2000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#targetKids").offset().top
      }, 2000);
    }

    $("#fadeKids").fadeOut(2800);
    $("#fadeKids").fadeIn(2800);
  });
});

$(document).ready(function(){
  $("#pastaPage").click(function(event){
    event.preventDefault();

    if($(window).width() < 1000) {
      $('html, body').animate({
        scrollTop: $("#targetPasta").offset().top - 320
      }, 2000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#targetPasta").offset().top
      }, 2000);
    }

    $("#fadePasta").fadeOut(2800);
    $("#fadePasta").fadeIn(2800);
  });
});

$(document).ready(function(){
  $("#saladsPage").click(function(event){
    event.preventDefault();

    if($(window).width() < 1000) {
      $('html, body').animate({
        scrollTop: $("#targetSalads").offset().top - 320
      }, 2000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#targetSalads").offset().top
      }, 2000);
    }

    $("#fadeSalad").fadeOut(2800);
    $("#fadeSalad").fadeIn(2800);
  });
});



function clickBook() {
  if($(window).width() < 1000) {
    $('html, body').animate({
      scrollTop: $("#location").offset().top - 1050
    }, 2000);
  }
  else {
    $('html, body').animate({
      scrollTop: $("#location").offset().top
    }, 2000);
  }
}

function resAndOnline() {
  if($(window).width() < 1000) {
    $('html, body').animate({
      scrollTop: $("#reservation").offset().top + 210
    }, 'fast');
  }
  else {
    $('html, body').animate({
      scrollTop: $("#reservation").offset().top
    }, 'fast');
  }
}

function placeOrderOnline() {
  if($(window).width() < 1000) {
    $('html, body').animate({
      scrollTop: $('#reservation').offset().top + 770
    }, 2000);
  }
  else {
    $('html, body').animate({
      scrollTop: $('#reservation').offset().top + 610
    }, 2000);
  }
}

function book(){
  $("#book").on("click", function(e){
    e.preventDefault();
    location.href = "https://dashboard.nexmo.com/sign-in?redirect=sms";
  });
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = $("#slideshow img");
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length){
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}
