$('.add').on('click', function () {
  var newItem = $('.to-do-list li').first().clone();
  newItem.text($('.new-field').val());
  $('.to-do-list').append(newItem);
});
$('.to-do-list').on('dblclick','li',function(){
   $(this).toggleClass('strike').fadeOut('slow');   
})