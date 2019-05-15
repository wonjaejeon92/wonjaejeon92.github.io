$(document).ready(function(){

  $('.btn-1').click(function(){

    var a = $('.skill');
    var b = $('.work');
    var c = $('.contact');
    
    if(a){
      var offset = $(a).offset();
    }
    if(b){
      var offset = $(b).offset();
    }
    if(c){
      var offset = $(c).offset();
    }
    
    
    $('html,body').animate({scrollTop : offset.top }, 2000);

  });

});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}


