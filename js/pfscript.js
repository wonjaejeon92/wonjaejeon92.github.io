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

$(document).ready(function() {   
  var sideslider = $('[data-toggle=collapse-side]');
  var sel = sideslider.attr('data-target');
  var sel2 = sideslider.attr('data-target-2');
  sideslider.click(function(event){
      $(sel).toggleClass('in');
      $(sel2).toggleClass('out');
  });
});

$(document).ready(function(){
  var map;
  function initialize(){
    var myLatlng = new google.maps.LatLng(36.331483, 127.454790);
    var mapOption = {
      zoom:17,
      center:myLatlng,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById('map-canvas'),mapOption);
    google.maps.event.addListener(map,'zoom_changed',function(){ setTimeout(moveDaejeon, 3000);});
    var market = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "hi"
    });
    google.maps.addListener(marker,'click',function() {map.setZoom(10);});
  }
  google.maps.event.addDomListener(window,'load',initialize);
})
