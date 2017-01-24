// $(document).ready(function(event){
//
// });


// north america toggle
$(document).ready(function(event){
  $(".northamer").hide();
  $(".northamerdot").click(function(){
    $(".northamer").slideDown("slow");
  });
  $(".northamerbutton").click(function(){
    $(".northamer").slideDown("slow");
  });
});
$(document).ready(function(event){
  $(".slideclose").click(function(){
    $(".northamer").slideUp("slow");
  });
});

// south america toggle
$(document).ready(function(event){
  $(".southamer").hide();
  $(".southamerdot").click(function(){
    $(".southamer").slideDown("slow");
  });
  $(".southamerbutton").click(function(){
    $(".southamer").slideDown("slow");
  });
});
$(document).ready(function(event){
  $(".slideclose").click(function(){
    $(".southamer").slideUp("slow");
  });
});

// europe toggle
$(document).ready(function(event){
  $(".europe").hide();
  $(".europedot").click(function(){
    $(".europe").slideDown("slow");
  });
  $(".europebutton").click(function(){
    $(".europe").slideDown("slow");
  });
});
$(document).ready(function(event){
  $(".slideclose").click(function(){
    $(".europe").slideUp("slow");
  });
});

// africa toggle
$(document).ready(function(event){
  $(".africa").hide();
  $(".africadot").click(function(){
    $(".africa").slideDown("slow");
  });
  $(".africabutton").click(function(){
    $(".africa").slideDown("slow");
  });
});
$(document).ready(function(event){
  $(".slideclose").click(function(){
    $(".africa").slideUp("slow");
  });
});

// asia toggle
$(document).ready(function(event){
  $(".asia").hide();
  $(".asiadot").click(function(){
    $(".asia").slideDown("slow");
  });
  $(".asiabutton").click(function(){
    $(".asia").slideDown("slow");
  });
});
$(document).ready(function(event){
  $(".slideclose").click(function(){
    $(".asia").slideUp("slow");
  });
});

// australia toggle
$(document).ready(function(event){
  $(".australia").hide();
  $(".australiadot").click(function(){
    $(".australia").slideDown("slow");
  });
  $(".australiabutton").click(function(){
    $(".australia").slideDown("slow");
  });
});
$(document).ready(function(event){
  $(".slideclose").click(function(){
    $(".australia").slideUp("slow");
  });
});

// north america mineral slide show
$(document).ready(function(event){
  var currentIndex = 0,
  items = $('.northamer .mineralpics div'),
  itemAmt = items.length;
function cycleItems() {
  var item = $('.northamer .mineralpics div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}
var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 2000);
});

// south america mineral slide show
$(document).ready(function(event){
  var currentIndex = 0,
  items = $('.southamer .mineralpics div'),
  itemAmt = items.length;
function cycleItems() {
  var item = $('.southamer .mineralpics div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}
var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 2000);
});

// europe mineral slide show
$(document).ready(function(event){
  var currentIndex = 0,
  items = $('.europe .mineralpics div'),
  itemAmt = items.length;
function cycleItems() {
  var item = $('.europe .mineralpics div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}
var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 2000);
});

// africa mineral slide show
$(document).ready(function(event){
  var currentIndex = 0,
  items = $('.africa .mineralpics div'),
  itemAmt = items.length;
function cycleItems() {
  var item = $('.africa .mineralpics div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}
var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 2000);
});

// asia mineral slide show
$(document).ready(function(event){
  var currentIndex = 0,
  items = $('.asia .mineralpics div'),
  itemAmt = items.length;
function cycleItems() {
  var item = $('.asia .mineralpics div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}
var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 2000);
});

// australia mineral slide show
$(document).ready(function(event){
  var currentIndex = 0,
  items = $('.australia .mineralpics div'),
  itemAmt = items.length;
function cycleItems() {
  var item = $('.australia .mineralpics div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}
var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 2000);
});
