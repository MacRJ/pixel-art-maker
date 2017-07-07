// Event listeners to turn boxes Red
$('#box1').mousedown(function(){
  $('#box1').css('backgroundColor', 'red');
})
$('#box2').mousedown(function(){
  $('#box2').css('backgroundColor', 'red');
})
$('#box3').mousedown(function(){
  $('#box3').css('backgroundColor', 'red');
})
$('#box4').mousedown(function(){
  $('#box4').css('backgroundColor', 'red');
})

// Create paintbrush

$('.Palette').on("click", function(){
$('.selector').css('background-color', $(this).css('background-color'))
})

$('.pixel').on("click", function(){
  $(this).css('background-color', $('.selector').css('background-color'))
})
