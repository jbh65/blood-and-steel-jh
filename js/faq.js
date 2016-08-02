$(document).ready(function(){

  $('.question').on('click', function(){
     var alreadyActive = $(this).hasClass('is-active');

    $('.answer').slideUp();
    $('.question.is-active').removeClass('is-active');

    if (!alreadyActive) {
      $(this).next('.answer').slideDown();
       $(this).addClass('is-active');
    }

  });


});
