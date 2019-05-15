$(document).ready(function(){
  $('.btn-1').click(function(){
    checkBtnId('.btn-1');
  });
  $('.btn-2').click(function(){
     checkBtnId('.btn-2');
   });
  $('.btn-3').click(function(){
     checkBtnId('.btn-3');
   });
  $('.btn-4').click(function(){
     checkBtnId('.btn-4');
   });


 function checkBtnId (id){
    var getClassId = {};
    var offset = {};
   
    if(".btn-1" == id){
      getClassId = $('.main');
      offset = getClassId.offset();
    }
    if(".btn-2" == id){
       getClassId = $('.skill');
       offset = getClassId.offset();
    }
    else if(".btn-3" == id){
       getClassId = $('.work');
       offset = getClassId.offset();
    }
    else if(".btn-4" == id){
       getClassId = $('.contact');
       offset = getClassId.offset();
    }

    $('html,body').animate({scrollTop : offset.top }, 2000);

 }

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
